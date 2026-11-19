---
description: Daily treatise pipeline checklist (ingest → rank → draft → challenge → cite-verify → one PR)
---

# Pipeline checklist

Use when running or recovering a daily cycle.

1. Budget gate (`check_budget`) — pause drafts at ≥75%
2. Candidates from `day/candidates.md`
3. Ingest subagent ranks SEC/CFTC/OFAC only
4. Early exit on quiet days (`ship_daily_result` skip)
5. Draft subagent → cite verify → challenge/arbiter subagent
6. One `ship_daily_result` call
7. `record_cost`

Never open a second substantive treatise PR the same calendar day.
