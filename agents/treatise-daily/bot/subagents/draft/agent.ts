import { defineAgent } from "@grok/agent-sdk";

export default defineAgent({
  description:
    "Sonnet draft: edit one Phase-1 fedreg page (SEC/CFTC/OFAC) to house style with primary-source links only.",
  model: {
    id: "claude-sonnet-4-6",
    params: [{ id: "effort", value: "medium" }],
  },
});
