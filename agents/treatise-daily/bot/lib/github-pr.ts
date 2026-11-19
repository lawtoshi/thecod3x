import type { HostGitHubClient } from "@grok/agent-sdk";
import { attributionLine } from "./config.js";

type Octokit = Awaited<ReturnType<HostGitHubClient["getOctokit"]>>;

export type ShipFile = {
  path: string;
  content: string;
};

export type ShipUpdate = {
  octokit: Octokit;
  owner: string;
  repo: string;
  base: string;
  branch: string;
  date: string;
  focus: string;
  title: string;
  what: string;
  why: string;
  sources: string[];
  challenge: string;
  risks: string;
  files: ShipFile[];
};

export type ShipResult = {
  posted: boolean;
  verdict: "skip" | "update";
  reason: string;
  url?: string;
  branch?: string;
};

export async function openTreatisePr(input: ShipUpdate): Promise<ShipResult> {
  const repo = { owner: input.owner, repo: input.repo };
  const existing = await input.octokit.rest.pulls.list({
    ...repo,
    state: "open",
    head: `${input.owner}:${input.branch}`,
    base: input.base,
    per_page: 1,
  });
  const open = existing.data[0];
  if (open !== undefined) {
    return {
      posted: false,
      verdict: "update",
      reason: "exists",
      url: open.html_url,
      branch: input.branch,
    };
  }

  const sameDay = await findSameDayTreatisePr(input.octokit, repo, input.date);
  if (sameDay !== undefined) {
    return {
      posted: false,
      verdict: "update",
      reason: "already_shipped_today",
      url: sameDay.html_url,
      branch: sameDay.head.ref,
    };
  }

  const parent = await refSha(input.octokit, repo, input.base);
  if (parent === undefined) {
    throw new Error(`missing base ref: ${input.base}`);
  }
  const { data: commit } = await input.octokit.rest.git.getCommit({
    ...repo,
    commit_sha: parent,
  });

  const stamped = input.files.map((file) => ({
    path: file.path,
    content: ensureAttribution(file.content, input.date, file.path),
  }));

  const blobs = await Promise.all(
    stamped.map(async (item) => {
      const { data } = await input.octokit.rest.git.createBlob({
        ...repo,
        content: Buffer.from(item.content).toString("base64"),
        encoding: "base64",
      });
      return {
        path: item.path,
        mode: "100644" as const,
        type: "blob" as const,
        sha: data.sha,
      };
    }),
  );
  const { data: tree } = await input.octokit.rest.git.createTree({
    ...repo,
    base_tree: commit.tree.sha,
    tree: blobs,
  });
  const { data: next } = await input.octokit.rest.git.createCommit({
    ...repo,
    message: `treatise: ${input.focus} update ${input.date}`,
    tree: tree.sha,
    parents: [parent],
  });
  await input.octokit.rest.git.createRef({
    ...repo,
    ref: `refs/heads/${input.branch}`,
    sha: next.sha,
  });
  const { data: pull } = await input.octokit.rest.pulls.create({
    ...repo,
    title: input.title,
    head: input.branch,
    base: input.base,
    draft: false,
    body: prBody(input),
  });
  return {
    posted: true,
    verdict: "update",
    reason: "opened",
    url: pull.html_url,
    branch: input.branch,
  };
}

export function prBody(input: {
  date: string;
  what: string;
  why: string;
  sources: string[];
  challenge: string;
  risks: string;
}): string {
  const sources =
    input.sources.length === 0
      ? "_None listed._"
      : input.sources.map((url) => `- ${url}`).join("\n");
  return `## What
${input.what}

## Why highest priority today
${input.why}

## Primary sources
${sources}

## Challenge / arbiter
${input.challenge}

## Risks / ambiguities
${input.risks}

## Review
Target skim: ~15 minutes. Merge autonomy: **human-all**.

Attribution in touched pages: \`${attributionLine(input.date)}\` (human date stamped on merge).

---
Coordinator prompt: **Are you ready to merge today’s treatise PR?**
`;
}

async function findSameDayTreatisePr(
  octokit: Octokit,
  repo: { owner: string; repo: string },
  date: string,
): Promise<{ html_url: string; head: { ref: string } } | undefined> {
  const { data } = await octokit.rest.pulls.list({
    ...repo,
    state: "open",
    per_page: 30,
  });
  const needle = `-${date}`;
  const match = data.find(
    (pull) => pull.head.ref.startsWith("update/") && pull.head.ref.includes(needle),
  );
  if (match === undefined) {
    return undefined;
  }
  return { html_url: match.html_url, head: { ref: match.head.ref } };
}

async function refSha(
  octokit: Octokit,
  repo: { owner: string; repo: string },
  name: string,
): Promise<string | undefined> {
  try {
    const { data } = await octokit.rest.git.getRef({
      ...repo,
      ref: `heads/${name}`,
    });
    return data.object.sha;
  } catch (error) {
    if (isNotFound(error)) {
      return undefined;
    }
    throw error;
  }
}

function ensureAttribution(content: string, date: string, path: string): string {
  if (!path.startsWith("fedreg/") && !path.startsWith("states/")) {
    return content;
  }
  const line = attributionLine(date);
  if (content.includes("This update created by bots on")) {
    return content;
  }
  if (/^##\s+Authors/m.test(content)) {
    return content.replace(/^(##\s+Authors[^\n]*\n)/m, `$1\n${line}\n`);
  }
  return `${content.trimEnd()}\n\n## Authors\n\n${line}\n`;
}

function isNotFound(error: unknown): boolean {
  return typeof error === "object" && error !== null && "status" in error && error.status === 404;
}
