# thecod3x Monitoring Automation

This directory holds the constitution, monitor bible, budgets, and artifact sinks for updating [thecod3x.com](https://www.thecod3x.com).

## Primary path: Cursor-hosted Agent SDK

Daily automation lives in **`agents/treatise-daily/`** (Agent SDK project) and deploys to **Cursor-hosted** Agent SDK — not Gregory’s laptop.

Pipeline (human-all merges):

```
schedule 14:00 UTC (or POST /channels/daily/run)
  → scoop SEC/CFTC/OFAC candidates
  → ingest (Haiku) → rank
  → draft (Sonnet, budget-capped)
  → cite-verify → challenge/arbiter (Opus)
  → open ONE PR / day (or clean no-op)
  → Project coordinator yes/no → merge on yes
```

| Piece | Location |
|-------|----------|
| Agent project | `agents/treatise-daily/` |
| Daily cron | `agents/treatise-daily/bot/schedules/daily.ts` (`0 14 * * *` UTC) |
| Manual trigger | `POST /treatise-daily/v1/channels/daily/run` (or playground schedule dispatch) |
| Constitution | `.automation/editorial-constitution.md` |
| Budgets / tiers / 75% ceiling | `.automation/monitoring-config.md` |
| Significance bible | `.automation/weekly-crypto-monitor.md` |

See `agents/treatise-daily/README.md` for validate / serve / deploy commands.

## Files in this directory

| File / dir | Role |
|------------|------|
| **`editorial-constitution.md`** | Neutrality, primary sources, ambiguity, attribution, human-all, no Litigation Tracker |
| **`monitoring-config.md`** | Daily cadence, serial caps, model tiers, `spend_ceiling_pct: 75`, PR / human-gate UX |
| **`weekly-crypto-monitor.md`** | Search queries + AUTO-INCLUDE / EVALUATE / SKIP |
| **`run-weekly-monitor.sh`** | **Emergency fallback only** — laptop Claude CLI weekly run if hosted path is down |
| **`reports/`** | Candidate ledgers, cost logs, no-op notes, historical reports |
| **`proposals/`** | Per-day proposal packages (`YYYY-MM-DD-<slug>/`) |
| **`decisions/`** | Arbiter decision logs |
| **`prune/`** | Stale-passage queue (`prune/queue.md`) |

## Emergency fallback (laptop)

Only if Cursor-hosted runs are down:

```bash
chmod +x .automation/run-weekly-monitor.sh   # first time
./.automation/run-weekly-monitor.sh
```

Review `.automation/reports/report-YYYY-MM-DD.md`, then open at most one PR for human yes/no via the Project coordinator — same human-all rule.

## Review / merge UX

1. Agents open **one** substantive PR per day (or exit with no PR on quiet days).
2. Coordinator asks Gregory: **“Are you ready to merge today’s treatise PR?”**
3. On yes → merge and stamp the human-approved attribution date. On no → revise or defer.

Target skim: ~15 minutes. Review SLA: 72 hours.

## Customization

- Significance thresholds: edit `weekly-crypto-monitor.md`
- Caps / tiers / ceiling: edit `monitoring-config.md`
- Voice / citation / scope rules: edit `editorial-constitution.md`
- Schedule / tools / subagents: edit `agents/treatise-daily/`
