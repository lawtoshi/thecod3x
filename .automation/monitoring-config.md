# Monitoring Configuration

Docs-as-config for thecod3x daily automation. Primary runtime: **Cursor-hosted Agent SDK** (Project-tied). Laptop `run-weekly-monitor.sh` is emergency fallback only.

Load together with `editorial-constitution.md` and `weekly-crypto-monitor.md` (AUTO-INCLUDE / EVALUATE / SKIP thresholds remain authoritative for significance).

---

## Cadence

| Setting | Value |
|---------|-------|
| **Primary cadence** | Daily (Cursor-hosted Agent SDK) |
| **Output shape** | ≤1 substantive PR / calendar day |
| **Empty ingest** | Early exit — short “nothing significant” note; **no empty PR** |
| **Weekly prune evaluation** | Continues; ships only when it wins a day’s priority (or as a small additive fix inside that day’s PR) |
| **Laptop weekly script** | Emergency fallback only — not the primary path |

## Serial caps (cost discipline)

| Control | Default |
|---------|---------|
| Max section draft agent runs / day | **1** default, **hard cap 3** (serial) |
| Max new-state drafting runs / month | **1** (unless that state *is* the day’s top priority and budget allows) |
| Parallelism | **Serial** pipeline; no all-agencies fan-out |
| Retry policy | One retry on tool failure |

## Model tiers

| Role | Model | Notes |
|------|-------|-------|
| Ingest / triage / ranking | **Claude Haiku** (current Haiku generation) | High-volume classification; keep daily fixed cost low |
| Section draft / prune prose | **Claude Sonnet** (current Sonnet generation) | Cost/quality for treatise markdown matching house style |
| Challenge + arbiter | **Claude Opus** (current Opus generation) | Accuracy KPI — spend on vetting, not parallel draft fan-out |

If Opus spend threatens the spend ceiling, demote arbiter-only days to Sonnet and **log the demotion**; do **not** drop cite-verify or challenge entirely.

## Spend ceiling

```yaml
spend_ceiling_pct: 75
```

- Ceiling is **75% of limits** applicable to this automation (Cursor / Anthropic / Project Agent SDK quotas).
- At **≥75%**, pause new draft runs; ingest-only or stop until next period / Gregory raises the ceiling.
- Token logging: `reports/cost-YYYY-MM.md`; alert the Project coordinator as the ceiling approaches.

## Human gate (human-all) + coordinator yes/no UX

```yaml
merge_autonomy: human-all
review_sla_hours: 72
review_effort_target_minutes: 15
```

**Nothing merges to `main` without Gregory’s affirmative approval.**

Human-gate UX (interactive with the **Project coordinator**, not silent GitHub-only):

1. Daily pipeline opens **one** PR with a short brief: what changed, why highest priority today, key primary sources, challenge/arbiter outcome, risks/ambiguities.
2. Coordinator asks Gregory: **“Are you ready to merge today’s treatise PR?”** (yes/no).
3. On **yes** → coordinator merges (or triggers merge); stamp human-approved date on attribution.
4. On **no** / edits requested → agents revise or defer; **no merge**.

Do not loosen human-all unilaterally. As accuracy warrants, the coordinator may later prompt Gregory to loosen (e.g., allowlist auto-merge for verified Index bullets).

## First daily sections (rotation priority)

1. SEC  
2. CFTC  
3. OFAC  
4. Then Treasury family (after related federal expansion PRs merge)  
5. Then consumer / banking pages  

## Priority agencies (checked first)

1. SEC (Securities and Exchange Commission)
2. CFTC (Commodity Futures Trading Commission)
3. OFAC / Treasury Department / FinCEN
4. Federal Reserve
5. Federal Courts (major crypto cases — primary-source backed only)
6. DOJ (enforcement actions) — activate owner after related pages merge
7. IRS (tax guidance) — activate owner after related pages merge
8. Congress (legislation)
9. Consumer / banking (CFPB, FDIC, NCUA, OCC, FTC) as ingest hits warrant

## Threshold for creating PRs

- **Minimum**: At least 1 AUTO-INCLUDE or 2 EVALUATE items that survive challenge/arbiter
- Empty or low-signal days: **no PR**

## Primary news sources (leads only — never sole authority)

### Tier 1 (check with daily ingest)
- Wall Street Journal (wsj.com)
- CoinDesk (coindesk.com)
- The Block (theblock.co)

### Tier 2 (check when Tier 1 shows activity)
- New York Times (nytimes.com)
- Washington Post (washingtonpost.com)
- The Defiant (thedefiant.io)
- Decrypt (decrypt.co)
- Bloomberg (bloomberg.com)

### Tier 3 (deep dives)
- Law360 (law360.com) — may require subscription
- Reuters (reuters.com)
- Financial Times (ft.com)

**Primary monitors must still win:** Federal Register / agency.gov / CourtListener / Congress.gov / official dockets. News is a lead, not a citation.

## Enforcement action thresholds

- **Auto-Include**: ≥ $5,000,000 OR novel legal theory
- **Evaluate**: $1,000,000 - $4,999,999 AND (novel theory OR major defendant)
- **Skip**: < $1,000,000 (unless precedent-setting)

## Court decision priorities

### Must Include
- Supreme Court (any crypto relevance)
- Circuit Court (appeals in major cases)
- District Court (if novel legal issue or major case)

### Evaluate
- District Court (significant but not precedent-setting)
- Magistrate recommendations (if particularly detailed analysis)

### Skip
- Procedural orders (unless denying motion to dismiss in a major case)
- Discovery disputes
- Routine scheduling orders

## Regulatory developments

### Must Include
- Final rules (published in Federal Register)
- Proposed rules (if significantly different from existing)
- Framework documents (guidance, policy statements)
- No-action letters (if setting precedent)

### Evaluate
- Proposed rules (if similar to existing but with notable changes)
- Staff statements (if from Division heads)
- Investor alerts (if new scam/threat category)

### Skip
- Routine investor alerts
- Administrative announcements
- Staff letters on routine matters

## Legislative tracking

### Must Include
- Bills passed by either chamber
- Major committee hearings with agency testimony
- Bipartisan bills introduced

### Evaluate
- Single-party bills (if from key committees)
- Subcommittee hearings (if major witnesses)

### Skip
- Bills introduced with no cosponsors
- Routine oversight hearings
- Letters from members (unless significant)

## State-level developments

### Must Include
- New state laws passed (priority backlog per plan T2→T3; T1 open drafts via normal yes/no)
- State AG enforcement actions > $1M
- State Supreme Court decisions

### Evaluate
- State regulations proposed (if trend-setting state)
- State lower court decisions (if novel)

### Skip
- Local/municipal regulations
- State administrative updates with no material crypto effect

## PR mechanics

| Setting | Value |
|---------|-------|
| Branch format | `update/<focus>-YYYY-MM-DD` (focus = primary agency/state or `multi`) |
| Auto-merge | **false** (human-all) |
| Default reviewer context | Project coordinator → Gregory yes/no |
| Body shape | What → Why highest priority today → Primary sources → Challenge/arbiter → Risks/ambiguities |
| Attribution | `This update created by bots on [DATE] and approved by a human on [DATE].` (human date stamped on merge) |
| Force-push | Never |
| Second substantive treatise PR same day | Never |

## Report / artifact preferences

| Artifact | Path pattern |
|----------|--------------|
| Daily candidate ledger | `reports/candidates-YYYY-MM-DD.md` |
| Proposal package | `proposals/YYYY-MM-DD-<slug>/` |
| Challenge memo | `.../challenge.md` |
| Decision log | `decisions/YYYY-MM-DD.md` |
| Prune queue | `prune/queue.md` |
| Cost log | `reports/cost-YYYY-MM.md` |

**Current report detail setting**: Medium (paragraph per item with legal implications). Always include source URLs, date, significance tag, proposed page/section, and draft markdown when proposing.

## Out of scope

- Litigation Tracker (removed; never repatriate)
- Sibling repos (e.g. remote lawtoshi/book)
- Parallel fan-out across all agencies in one day

## Notes

- This file is the operational budget/tier source of truth for hosted agents; keep it in sync with `editorial-constitution.md`.
- Quiet days are successes under the spend lid.
- Open expansion PRs continue disposition with **no freeze** on new state drafts; if review lag grows, prompt to revisit human-gating — not to halt drafting.
