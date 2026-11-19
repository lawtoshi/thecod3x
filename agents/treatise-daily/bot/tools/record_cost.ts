import type { JsonValue } from "@grok/agent-sdk";
import { defineTool } from "@grok/agent-sdk/tools";
import { z } from "zod";
import { SPEND_CEILING_PCT, monthUtc, spendKvKey } from "../lib/config.js";
import { asNumber, asObject } from "../lib/kv.js";

export default defineTool({
  description:
    "Add estimated usage units to the monthly cost log (toward spend_ceiling_pct 75). Call once at end of cycle.",
  effect: "idempotent",
  inputSchema: z.object({
    units: z.number().int().min(0).max(10_000),
    note: z.string().min(1).max(280),
    limit: z.number().int().min(1).max(1_000_000).optional(),
  }),
  async execute(input, ctx) {
    if (ctx.session.purpose === "eval") {
      return { recorded: false, reason: "eval" };
    }
    const month = monthUtc();
    const key = spendKvKey(month);
    const prior = asObject(await ctx.host.kv.get(key));
    const units = asNumber(prior.units, 0) + input.units;
    const limit = input.limit ?? asNumber(prior.limit, 100);
    const priorEntries = Array.isArray(prior.entries) ? prior.entries : [];
    const entries: JsonValue[] = [
      ...priorEntries,
      { units: input.units, note: input.note, at: new Date().toISOString() },
    ].slice(-40);
    await ctx.host.kv.put(key, { units, limit, entries });
    const pct = Math.round((units / limit) * 100);
    return {
      recorded: true,
      month,
      units,
      limit,
      pct,
      spend_ceiling_pct: SPEND_CEILING_PCT,
      pauseDrafts: pct >= SPEND_CEILING_PCT,
    };
  },
});
