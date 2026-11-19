import { defineAgent } from "@grok/agent-sdk";

export default defineAgent({
  description:
    "Haiku triage: classify day/candidates.md with AUTO-INCLUDE / EVALUATE / SKIP, rank SEC→CFTC→OFAC impact, recommend draft or clean no-op.",
  model: {
    id: "claude-haiku-4-5",
  },
});
