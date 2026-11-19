# thecod3x Monitoring Automation

This directory holds the constitution, monitor bible, budgets, and artifact sinks for updating [thecod3x.com](https://www.thecod3x.com).

## Primary path (interim): Project cloud worker

**Non-Enterprise:** Cursor service accounts are unavailable, so managed `agent-sdk deploy` from cloud workers is blocked. Daily runs are **laptop-independent** via the Project coordinator spawning one Cursor **cloud worker** per day.

Playbook: **`.automation/daily-cloud-run.md`**

```
coordinator spawns cloud worker (~14:00 UTC or when convenient)
  → scoop SEC/CFTC/OFAC candidates
  → ingest / rank → draft → cite-verify → challenge/arbiter
  → open ONE PR / day (or clean no-op)
  → Project coordinator yes/no → merge on yes
```

Long-term Agent SDK project (for when team agent hosting exists): `agents/treatise-daily/` — see `agents/treatise-daily/HOSTING.md`.

## Files in this directory

| File / dir | Role |
|------------|------|
| **`daily-cloud-run.md`** | **Interim daily playbook** for Project cloud workers |
| **`editorial-constitution.md`** | Neutrality, primary sources, ambiguity, attribution, human-all, no Litigation Tracker |
| **`monitoring-config.md`** | Daily cadence, serial caps, model tiers, `spend_ceiling_pct: 75`, PR / human-gate UX |
| **`weekly-crypto-monitor.md`** | Search queries + AUTO-INCLUDE / EVALUATE / SKIP |
| **`run-weekly-monitor.sh`** | **Emergency fallback only** — laptop Claude CLI weekly run |
| **`reports/`** | Candidate ledgers, cost logs, no-op notes, historical reports |
| **`proposals/`** | Per-day proposal packages (`YYYY-MM-DD-<slug>/`) |
| **`decisions/`** | Arbiter decision logs |
| **`prune/`** | Stale-passage queue (`prune/queue.md`) |

## Emergency fallback (laptop)

Only if cloud workers are unavailable:

```bash
chmod +x .automation/run-weekly-monitor.sh   # first time
./.automation/run-weekly-monitor.sh
```

## Review / merge UX

1. Workers open **one** substantive PR per day (or exit with no PR on quiet days).
2. Coordinator asks Gregory: **“Are you ready to merge today’s treatise PR?”**
3. On yes → merge and stamp the human-approved attribution date. On no → revise or defer.

Target skim: ~15 minutes. Review SLA: 72 hours.

## Customization

- Daily worker steps: edit `daily-cloud-run.md`
- Significance thresholds: edit `weekly-crypto-monitor.md`
- Caps / tiers / ceiling: edit `monitoring-config.md`
- Voice / citation / scope rules: edit `editorial-constitution.md`
- Future hosted Agent SDK: edit `agents/treatise-daily/`
