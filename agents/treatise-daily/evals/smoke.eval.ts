import { defineEval } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description: "Budget tool reports the 75% spend ceiling without drafting.",
  async test(t) {
    await t.send(
      "Call check_budget only. Do not draft, do not ship, do not call other tools. Reply with the pauseDrafts boolean.",
    );
    t.succeeded();
    t.calledTool("check_budget");
  },
});
