import { defineTool } from "@grok/agent-sdk/tools";
import { z } from "zod";
import { SPEND_CEILING_PCT, monthUtc, spendKvKey } from "../lib/config.js";
import { asNumber, asObject } from "../lib/kv.js";

export default defineTool({
  description:
    "Read monthly spend vs 75% ceiling. If at/above ceiling, pause new drafts (ingest-only / no-op).",
  effect: "read",
  inputSchema: z.object({}),
  async execute(_input, ctx) {
    const month = monthUtc();
    const key = spendKvKey(month);
    const current = asObject(await ctx.host.kv.get(key));
    const units = asNumber(current.units, 0);
    const limit = asNumber(current.limit, 100);
    const pct = limit <= 0 ? 100 : Math.round((units / limit) * 100);
    const pauseDrafts = pct >= SPEND_CEILING_PCT;
    return {
      month,
      units,
      limit,
      pct,
      spend_ceiling_pct: SPEND_CEILING_PCT,
      pauseDrafts,
      guidance: pauseDrafts
        ? "At/above spend ceiling — do not draft; ship a clean no-op or ingest-only note."
        : "Under ceiling — draft allowed within serial caps.",
    };
  },
});
