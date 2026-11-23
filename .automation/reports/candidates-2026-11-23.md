# Candidate ledger — 2026-11-23

Lookback: 14 days (since ~2026-11-09). Phase 1 sections: SEC → CFTC → OFAC.

Scoop: `agents/treatise-daily` `scoopPhase1()` — **2** items. Supplemental paced probes: FR SEC/CFTC/sanctions APIs, sec.gov press + litigation releases, cftc.gov press room + speeches, ofac.treasury.gov recent-actions.

**Preconditions:** `main` @ `e9a4232` (includes merged PR #25 / LR-26690). No open `update/*-2026-11-23` PR. Open GitHub PRs are older state/federal drafts only (#10–#19).

## Scoop items

### 1. [SEC] SEC: Eight Entities Used Fake Crypto Asset Trading Platforms to Steal More Than $37 Million From U.S. Investors

- Date: 2026-11-19
- Source: sec.gov/press
- URL: https://www.sec.gov/newsroom/press-releases/2026-115-sec-eight-entities-used-fake-crypto-asset-trading-platforms-steal-more-37-million-us-investors
- Orchestrator tag: **AUTO-INCLUDE** (≥$5M) — **already on main via PR #25**
- Disposition today: **Do not duplicate**

### 2. [OFAC bucket / FinCEN substance] Imposition of Special Measure Prohibiting the Transmittal of Funds Involving MEXC Global

- Date: 2026-11-10
- Source: federalregister:Rule (Doc. 2026-22962)
- URL: https://www.federalregister.gov/documents/2026/11/10/2026-22962/imposition-of-special-measure-prohibiting-the-transmittal-of-funds-involving-mexc-global
- Cite-verify: agencies = **Treasury Department** + **Financial Crimes Enforcement Network** (not OFAC)
- Orchestrator tag: **HOLD** — FinCEN/Treasury-family catch-up; continuity with 11-19 / 11-21 / 11-22

## Supplemental probes

### 3. [CFTC] TLD Markets DCM + TLD Clearing (Backpack) DCO + Selig blockchain infrastructure statement (2026-11-13 / 11-16)

- Chair statement: https://www.cftc.gov/PressRoom/SpeechesTestimony/seligstatement111626
- DCO order: https://www.cftc.gov/media/14926/TLD%20Clearing%2C%20Inc.%20-%20DCO%20Registration%20Order%20%2811-13-2026%29/download
- DCM order: https://www.cftc.gov/filings/documents/2026/orgdcmtldbackpackord261116.pdf
- Filings: DCM 60617; DCO 60669
- Tag: **AUTO-INCLUDE** — Commission DCM/DCO orders for crypto-native Backpack entities; Chair statement articulates regulated blockchain market-infrastructure pathway under existing CEA core principles; DCO order authorizes margined futures (not fully collateralized-only)
- Disposition: **DAY’S WINNER — draft**

### 4. [SEC] PR 2026-116 — Backward Hat Capital / $560M offering fraud (2026-11-20)

- URL: https://www.sec.gov/newsroom/press-releases/2026-116-sec-charges-indianapolis-based-backward-hat-capital-its-co-founders-560-million-dollar-offering
- Complaint: https://www.sec.gov/files/litigation/complaints/2026/comp-pr2026-116.pdf
- Crypto in primary text: solicitation promised conversion to crypto assets / bitcoin via Coinbase before FX arbitrage; ~$109M through Coinbase in earlier period
- Tag: **EVALUATE → SKIP** — core product theory remains FX / securities antifraud; crypto is intermediate liquidity step; prefer no thin stretch vs CFTC blockchain winner; continuity with 11-22 SKIP of parallel CFTC forex action

### 5. [CFTC] PR 9328-26 — Backward Hat / $550M forex Ponzi (2026-11-20)

- URL: https://www.cftc.gov/PressRoom/PressReleases/9328-26
- Tag: **SKIP** — forex CPO/Ponzi; press has no crypto product theory (same as 11-21 / 11-22)

### 6. [CFTC] PR 9327-26 — 24/7 trading roundtable agenda (2026-11-17)

- URL: https://www.cftc.gov/PressRoom/PressReleases/9327-26
- Tag: **SKIP** — administrative agenda; tokenization mentioned as discussion topic only

### 7. [OFAC] Recent actions 2026-11-18 / 11-19 / 11-20; no 11-21 / 11-22 pages

- 11-18: Counter-terrorism / Hizballah gold network — **SKIP** (no crypto)
- 11-19: Counter Narcotics / Cyber; 1× TRX address (VARELA VILLAR) — **SKIP** (routine single-address)
- 11-20: Iran designations; Cuba FAQs — **SKIP** (no crypto)

### 8. [SEC] LR-26691 / LR-26692 (2026-11-20); PR 2026-117 CAT proposal

- Insider trading / elderly-client misappropriation / CAT governance — **SKIP** (no crypto substance)

## Empty / quiet monitors

- FR SEC crypto-term window (≥2026-11-09): **0**
- FR CFTC crypto-term window (≥2026-11-09): **0**
- FR sanctions+crypto window: only MEXC FinCEN order (item 2)

## Ranking outcome

| Item | Tag | Disposition |
|------|-----|-------------|
| CFTC TLD/Backpack DCM+DCO + Selig statement | AUTO-INCLUDE | **Ship** |
| SEC LR-26690 / PR 2026-115 | AUTO-INCLUDE (merged) | Do not duplicate PR #25 |
| FinCEN MEXC FR 2026-22962 | HOLD | Keep for FinCEN/Treasury-family day |
| SEC Backward Hat PR 2026-116 | EVALUATE → SKIP | Thin FX antifraud; crypto incidental |
| CFTC Backward Hat PR 9328-26 | SKIP | Forex; no crypto theory |
| OFAC 11-18/19/20 | SKIP | No treatise-grade crypto doctrine |
| CFTC 24/7 agenda | SKIP | Administrative |

Eligible Phase 1 survivors after challenge: **1** (CFTC blockchain DCM/DCO) → meets ≥1 AUTO-INCLUDE threshold.
