import { defineAgent } from "@grok/agent-sdk";

export default defineAgent({
  description:
    "Opus challenge + arbiter: attack accuracy/cites, then accept / reject / accept-with-ambiguity-note for today's proposal.",
  model: {
    id: "claude-opus-4-6",
    params: [{ id: "effort", value: "high" }],
  },
});
