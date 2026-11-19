import { prompt, type AuthContext, type HostContext, type SendMessageFn } from "@grok/agent-sdk";
import { PHASE1_SECTIONS, REPO, todayUtc } from "./config.js";
import { formatCandidatesMarkdown, scoopPhase1 } from "./scoop.js";

const CONFIG_PATHS = [
  ".automation/editorial-constitution.md",
  ".automation/monitoring-config.md",
  ".automation/weekly-crypto-monitor.md",
] as const;

export type DayPack = {
  date: string;
  prompt: string;
  files: Record<string, string>;
};

export async function collectDay(host: HostContext, now = new Date()): Promise<DayPack> {
  const date = todayUtc(now);
  const files: Record<string, string> = {
    "day/date.txt": `${date}\n`,
    "day/repo.txt": `${REPO}\n`,
  };

  const octokit = await host.github.getOctokit();
  const [owner, repoName] = REPO.split("/");
  if (owner === undefined || repoName === undefined) {
    throw new Error(`invalid REPO: ${REPO}`);
  }
  const repo = { owner, repo: repoName };
  const repoInfo = await octokit.rest.repos.get(repo);
  const base = repoInfo.data.default_branch;
  files["day/base.ref"] = `${base}\n`;

  for (const path of CONFIG_PATHS) {
    files[`day/config/${path.split("/").pop()}`] = await readRepoFile(octokit, repo, base, path);
  }
  for (const section of PHASE1_SECTIONS) {
    files[`day/pages/${section.id}.md`] = await readRepoFile(octokit, repo, base, section.page);
    files[`day/pages/${section.id}.path`] = `${section.page}\n`;
  }

  const scoop = await scoopPhase1(now);
  files["day/candidates.md"] = formatCandidatesMarkdown(scoop);
  files["day/scoop.json"] = `${JSON.stringify(scoop, null, 2)}\n`;

  return {
    date,
    files,
    prompt: prompt`
      Daily treatise update for ${REPO} (${date}).
      Phase 1 sections only: SEC → CFTC → OFAC.

      Read day/config/ and day/candidates.md first.
      Follow bot/instructions.md pipeline exactly.
      Call ship_daily_result exactly once (update or clean no-op).
    `,
  };
}

export function startDay(send: SendMessageFn, day: DayPack, auth: AuthContext | null) {
  return send(day.prompt, {
    auth,
    title: `treatise ${day.date}`,
    continuationToken: `treatise-daily:${day.date}`,
    admission: "coalesce",
    workspaceFiles: day.files,
  });
}

export function dayFromTarget(target: unknown): DayPack | undefined {
  if (!isRecord(target)) {
    return undefined;
  }
  if (typeof target.date !== "string" || typeof target.prompt !== "string") {
    return undefined;
  }
  if (!isRecord(target.files)) {
    return undefined;
  }
  const files: Record<string, string> = {};
  for (const [path, content] of Object.entries(target.files)) {
    if (typeof content !== "string") {
      return undefined;
    }
    files[path] = content;
  }
  return { date: target.date, prompt: target.prompt, files };
}

async function readRepoFile(
  octokit: Awaited<ReturnType<HostContext["github"]["getOctokit"]>>,
  repo: { owner: string; repo: string },
  ref: string,
  path: string,
): Promise<string> {
  const { data } = await octokit.rest.repos.getContent({
    ...repo,
    path,
    ref,
  });
  if (Array.isArray(data) || data.type !== "file" || !("content" in data) || data.content === undefined) {
    throw new Error(`expected file at ${path}`);
  }
  return Buffer.from(data.content, data.encoding === "base64" ? "base64" : "utf8").toString("utf8");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
