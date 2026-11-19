import { defineTool } from "@grok/agent-sdk/tools";
import { z } from "zod";
import { formatCandidatesMarkdown, scoopPhase1 } from "../lib/scoop.js";

export default defineTool({
  description:
    "Deterministic Phase-1 scoop (Federal Register + agency feeds) for SEC/CFTC/OFAC. Prefer day/candidates.md from the schedule seed; call this only to refresh.",
  effect: "read",
  inputSchema: z.object({
    lookbackNote: z.string().max(120).optional(),
  }),
  async execute() {
    const scoop = await scoopPhase1();
    return {
      date: scoop.date,
      itemCount: scoop.items.length,
      errors: scoop.errors,
      markdown: formatCandidatesMarkdown(scoop),
      items: scoop.items,
    };
  },
});
