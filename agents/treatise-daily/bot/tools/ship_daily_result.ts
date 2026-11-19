import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { defineTool } from "@grok/agent-sdk/tools";
import { z } from "zod";
import { REPO, shipKvKey, todayUtc } from "../lib/config.js";
import { openTreatisePr } from "../lib/github-pr.js";
import { asObject, asString } from "../lib/kv.js";
import { parseRepo, treatisePath, updateBranch } from "../lib/paths.js";

const fileSchema = z.object({
  path: z.string().min(1).max(240),
  content: z.string().min(1).max(400_000),
});

export default defineTool({
  description:
    "End the daily cycle once: open the single treatise PR, or record a clean no-op. Enforces ≤1 substantive PR/day.",
  effect: (input) => (input.verdict === "update" ? "write" : "read"),
  inputSchema: z.discriminatedUnion("verdict", [
    z.object({
      verdict: z.literal("skip"),
      reason: z.string().min(1).max(500),
      candidatesSummary: z.string().max(4_000).optional(),
    }),
    z.object({
      verdict: z.literal("update"),
      focus: z.enum(["sec", "cftc", "ofac", "multi"]),
      title: z.string().min(8).max(160),
      what: z.string().min(8).max(4_000),
      why: z.string().min(8).max(4_000),
      sources: z.array(z.string().url()).min(1).max(30),
      challenge: z.string().min(8).max(8_000),
      risks: z.string().min(4).max(4_000),
      files: z.array(fileSchema).min(1).max(12),
      candidatesMarkdown: z.string().min(1).max(100_000),
      decisionMarkdown: z.string().min(1).max(50_000),
    }),
  ]),
  async execute(input, ctx) {
    if (ctx.session.purpose === "eval") {
      return { posted: false, reason: "eval", verdict: input.verdict };
    }

    const date = await readTrimmed(ctx.workspaceDir, "day/date.txt").catch(() => todayUtc());
    const shipped = asObject(await ctx.host.kv.get(shipKvKey(date)));
    const shippedUrl = asString(shipped.url);
    if (asString(shipped.verdict) === "update" && shippedUrl) {
      return {
        posted: false,
        verdict: "skip",
        reason: "already_shipped_today",
        url: shippedUrl,
        date,
      };
    }

    if (input.verdict === "skip") {
      await ctx.host.kv.put(shipKvKey(date), {
        verdict: "skip",
        reason: input.reason,
        at: new Date().toISOString(),
      });
      const noopPath = `.automation/reports/noop-${date}.md`;
      return {
        posted: false,
        verdict: "skip",
        reason: input.reason,
        date,
        artifactHint: noopPath,
        coordinatorNote: `Clean no-op for ${date}: ${input.reason}`,
      };
    }

    const repo =
      parseRepo((await readTrimmed(ctx.workspaceDir, "day/repo.txt").catch(() => REPO)) || REPO) ??
      parseRepo(REPO);
    const base = await readTrimmed(ctx.workspaceDir, "day/base.ref").catch(() => "main");
    if (repo === undefined) {
      throw new Error("missing repo");
    }
    const branch = updateBranch(input.focus, date);
    if (branch === undefined) {
      throw new Error("invalid branch focus/date");
    }

    const files = input.files.map((item) => {
      const path = treatisePath(item.path);
      if (path === undefined) {
        throw new Error(`path not allowed: ${item.path}`);
      }
      return { path, content: item.content };
    });

    // Bundle automation artifacts into the same PR.
    files.push(
      {
        path: `.automation/reports/candidates-${date}.md`,
        content: ensureTrailingNewline(input.candidatesMarkdown),
      },
      {
        path: `.automation/decisions/${date}.md`,
        content: ensureTrailingNewline(input.decisionMarkdown),
      },
      {
        path: `.automation/proposals/${date}-${input.focus}/challenge.md`,
        content: ensureTrailingNewline(input.challenge),
      },
      {
        path: `.automation/proposals/${date}-${input.focus}/sources.json`,
        content: `${JSON.stringify({ date, focus: input.focus, sources: input.sources }, null, 2)}\n`,
      },
    );

    for (const item of files) {
      if (treatisePath(item.path) === undefined) {
        throw new Error(`path not allowed: ${item.path}`);
      }
    }

    const result = await openTreatisePr({
      octokit: await ctx.host.github.getOctokit(),
      owner: repo.owner,
      repo: repo.repo,
      base: base || "main",
      branch,
      date,
      focus: input.focus,
      title: input.title,
      what: input.what,
      why: input.why,
      sources: input.sources,
      challenge: input.challenge,
      risks: input.risks,
      files,
    });

    await ctx.host.kv.put(shipKvKey(date), {
      verdict:
        result.posted || result.reason === "exists" || result.reason === "already_shipped_today"
          ? "update"
          : "skip",
      reason: result.reason,
      url: result.url ?? null,
      branch: result.branch ?? null,
      at: new Date().toISOString(),
    });

    return {
      ...result,
      date,
      coordinatorPrompt: result.url
        ? `Treatise PR ready (${date}): ${result.url} — Are you ready to merge today’s treatise PR?`
        : `No PR opened (${result.reason}).`,
    };
  },
});

async function readTrimmed(dir: string, rel: string): Promise<string> {
  return (await readFile(join(dir, rel), "utf8")).trim();
}

function ensureTrailingNewline(value: string): string {
  return value.endsWith("\n") ? value : `${value}\n`;
}
