# Daily treatise cycle — Project cloud worker playbook

**Interim primary path (non-Enterprise):** the Project coordinator spawns one Cursor **cloud worker** per day. That worker runs this playbook against `main`. No laptop must stay open. No Cursor service account / managed Agent SDK deploy required.

Keep `agents/treatise-daily/` as the long-term Agent SDK project for when Gregory has a **team with agent hosting** (and, if required, Enterprise service accounts). Until then, **do not** depend on `agent-sdk deploy` from cloud workers.

## Coordinator trigger (once per calendar day)

1. Spawn a cloud worker on repo `lawtoshi/thecod3x` @ `main`.
2. Point it at this file + locked configs:
   - `.automation/daily-cloud-run.md` (this playbook)
   - `.automation/editorial-constitution.md`
   - `.automation/monitoring-config.md`
   - `.automation/weekly-crypto-monitor.md`
3. After the worker finishes, ask Gregory: **“Are you ready to merge today’s treatise PR?”** (or report a clean no-op).

Suggested spawn prompt:

```text
Run today’s thecod3x treatise cycle using .automation/daily-cloud-run.md.
Phase 1 sections only: SEC → CFTC → OFAC.
Human-all: open at most one substantive PR, or report a clean no-op with reasons.
Do not merge. Do not deploy Agent SDK.
```

## Worker steps (serial)

1. **Checkout `main`** and confirm no open `update/*-YYYY-MM-DD` PR already exists for today (≤1 substantive treatise PR/day).
2. **Scoop** Phase 1 sources (reuse deterministic helpers when possible):

   ```bash
   cd agents/treatise-daily
   npm ci
   node --import tsx -e 'import { scoopPhase1, formatCandidatesMarkdown } from "./bot/lib/scoop.ts";
   const s = await scoopPhase1();
   console.log(formatCandidatesMarkdown(s));'
   ```

   Write the ledger to `.automation/reports/candidates-YYYY-MM-DD.md` (branch only if shipping a PR).
3. **Rank** with AUTO-INCLUDE / EVALUATE / SKIP from `weekly-crypto-monitor.md`. Prefer SEC → CFTC → OFAC. Quiet days → **stop** with a short no-op note (no empty PR).
4. **Draft** only the day’s winner (~15 min review package). Match house style; primary sources only; attribution line:

   `This update created by bots on [DATE] and approved by a human on [DATE].`
5. **Cite-verify** every material URL (fetch must succeed). Drop unverified claims.
6. **Challenge + arbiter** (adversarial accuracy pass). On reject / blocking low-confidence → no-op or hold.
7. **Ship** at most one PR:
   - Branch: `update/<focus>-YYYY-MM-DD`
   - Body: What → Why highest priority → Primary sources → Challenge/arbiter → Risks/ambiguities
   - Include automation artifacts under `.automation/reports|decisions|proposals/` when useful
8. **Hand off** to coordinator with PR URL or clean no-op reasons. Never merge.

## Cost / pace

- Spend ceiling **75%** of applicable Cursor limits for this Project.
- Default **1** section draft/day (hard cap 3, serial).
- Prefer clean no-ops over thin updates.

## Out of scope

- Litigation Tracker
- Merging to `main`
- `agent-sdk deploy` / service-account setup
- Laptop `run-weekly-monitor.sh` (emergency only)

## Optional later: managed Agent SDK hosting

If Gregory later has a Cursor **team with agent hosting** (and can deploy), see `agents/treatise-daily/README.md` → “Personal / team deploy (non-cloud-worker)”. Until then, this playbook is the daily path.
