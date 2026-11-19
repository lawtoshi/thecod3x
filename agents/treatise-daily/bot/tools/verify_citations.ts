import { defineTool } from "@grok/agent-sdk/tools";
import { z } from "zod";
import { verifyUrls } from "../lib/cite-verify.js";

export default defineTool({
  description:
    "Fail-closed cite verify. Every material primary URL must pass before ship. Drop claims whose URLs fail.",
  effect: "read",
  inputSchema: z.object({
    urls: z.array(z.string().url()).min(1).max(40),
  }),
  async execute({ urls }) {
    const result = await verifyUrls(urls);
    return {
      allOk: result.allOk,
      failed: result.failed,
      results: result.results,
      guidance: result.allOk
        ? "All URLs verified — proceed to challenge/arbiter."
        : "Cite failures — remove failed claims from prose or hold to next day; do not ship unverified URLs.",
    };
  },
});
