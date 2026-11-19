import { defineChannel, POST } from "@grok/agent-sdk/channels";
import { z } from "zod";
import { collectDay, dayFromTarget, startDay } from "../lib/collect.js";

export default defineChannel({
  routes: [
    POST("/run", {
      description: "Collect SEC/CFTC/OFAC scoop + configs, then run the daily treatise cycle",
      bodySchema: z.object({}),
      handler: async (_req, route) => {
        route.waitUntil(
          collectDay(route.host).then((day) => startDay(route.send, day, route.auth)),
        );
        return new Response(null, { status: 202 });
      },
    }),
  ],
  receive: async (input, { send }) => {
    const day = dayFromTarget(input.target);
    if (day === undefined) {
      throw new Error("daily receive needs a collected day pack");
    }
    return startDay(send, day, input.auth);
  },
});
