import { defineSchedule } from "@grok/agent-sdk/schedules";
import daily from "../channels/daily.js";
import { collectDay } from "../lib/collect.js";

/** 14:00 UTC daily — Cursor-hosted fire; never auto-fires under --dev. */
export default defineSchedule({
  cron: "0 14 * * *",
  async run(schedule) {
    const day = await collectDay(schedule.host);
    schedule.waitUntil(
      schedule.receive(daily, {
        message: day.prompt,
        auth: schedule.appAuth,
        target: day,
      }),
    );
  },
});
