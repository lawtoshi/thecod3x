# thecod3x Monitoring Automation

This directory holds the constitution, monitor bible, budgets, and (later) Agent SDK prompts for updating [thecod3x.com](https://www.thecod3x.com).

## Primary path: Cursor-hosted Agent SDK

Daily automation runs on **Cursor-hosted Agent SDK** tied to this Project — not on Gregory’s laptop.

Pipeline (human-all merges):

```
ingest (Haiku) → rank → draft (Sonnet, budget-capped)
  → challenge/arbiter (Opus) → optional prune if it wins priority
  → open ONE PR / day → Project coordinator yes/no → merge on yes
```

Budgets, model tiers, `spend_ceiling_pct: 75`, and coordinator UX notes live in `monitoring-config.md`. Hard editorial rules live in `editorial-constitution.md`.

## Files in this directory

| File | Role |
|------|------|
| **`editorial-constitution.md`** | Neutrality, primary sources, ambiguity, attribution, human-all, experimental posture, no Litigation Tracker |
| **`monitoring-config.md`** | Daily cadence, serial caps, model tiers, 75% spend ceiling, PR / human-gate UX |
| **`weekly-crypto-monitor.md`** | Search queries + AUTO-INCLUDE / EVALUATE / SKIP thresholds (still the significance bible) |
| **`run-weekly-monitor.sh`** | **Emergency fallback only** — laptop Claude CLI weekly run if hosted path is unavailable |
| **`reports/`** | Candidate ledgers, cost logs, and historical monitoring reports |

Phase 1+ will add `agents/`, `proposals/`, `decisions/`, and `prune/` under this directory.

## Emergency fallback (laptop)

Only if Cursor-hosted runs are down:

1. Ensure Claude Code / `claude` CLI and `ANTHROPIC_API_KEY` are available.
2. From the repository root:

```bash
chmod +x .automation/run-weekly-monitor.sh   # first time
./.automation/run-weekly-monitor.sh
```

3. Review `.automation/reports/report-YYYY-MM-DD.md`, then open at most one PR for human yes/no via the Project coordinator — same human-all rule as the primary path.

Do **not** treat the weekly laptop script as the normal operating mode.

## Review / merge UX

1. Agents open **one** substantive PR per day (or exit with no PR on quiet days).
2. Coordinator asks Gregory: **“Are you ready to merge today’s treatise PR?”**
3. On yes → merge and stamp the human-approved attribution date. On no → revise or defer.

Target skim: ~15 minutes. Review SLA: 72 hours.

## Customization

- Significance thresholds: edit `weekly-crypto-monitor.md`
- Caps / tiers / ceiling: edit `monitoring-config.md`
- Voice / citation / scope rules: edit `editorial-constitution.md`

## Questions?

Reach the Project coordinator or @lawtoshi.
