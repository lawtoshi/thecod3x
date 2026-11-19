import { defineAgent } from "@grok/agent-sdk";

export default defineAgent({
  name: "treatise-daily",
  description:
    "Cursor-hosted daily orchestrator for thecod3x: ingest → rank → draft → challenge → cite-verify → one PR/day (SEC/CFTC/OFAC).",
  model: {
    id: "claude-haiku-4-5",
  },
  // Serial pipeline; no parallel fan-out.
  concurrency: { maxRunningTurns: 1 },
  // Server tools own network/GitHub writes; harness stays read + task.
  tools: ["read", "grep", "glob", "ls", "task"],
  hosting: {
    egressDomains: [
      "www.federalregister.gov",
      "www.sec.gov",
      "www.cftc.gov",
      "home.treasury.gov",
      "ofac.treasury.gov",
      "api.github.com",
      "github.com",
    ],
  },
});
