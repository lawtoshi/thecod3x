# Candidate ledger — 2026-11-24

Lookback: 14 days (since ~2026-11-10). Phase 1 sections: SEC → CFTC → OFAC.

Scoop: `agents/treatise-daily` `scoopPhase1()` — **2** items. Supplemental paced probes: FR SEC/CFTC/sanctions APIs, sec.gov press + litigation releases, cftc.gov press room + staff letters, ofac.treasury.gov recent-actions (incl. 2026-11-23).

**Preconditions:** `main` @ `30f0489` (includes merged PR #25 / LR-26690 and PR #26 / Backpack-TLD). No open `update/*-2026-11-24` PR. Open GitHub PRs are older state/federal drafts only (#10–#19).

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
- Orchestrator tag: **HOLD** — FinCEN/Treasury-family catch-up; continuity with 11-19 / 11-21 / 11-22 / 11-23

## Supplemental probes

### 3. [CFTC] Staff Letter No. 26-31 / PR 9331-26 — crypto assets as SEF/DCM/DCO operating-cost financial resources (2026-11-23)

- Press: https://www.cftc.gov/PressRoom/PressReleases/9331-26
- Letter PDF: https://www.cftc.gov/csl/26-31/download
- Divisions: DMO + DCR (Acting Directors Duncan Hennes / Richard Haynes)
- Scope: Regs 37.1301, 38.1101(a), 39.11(a)(2); BTC/ETH/payment stablecoins may count toward 1-year operating-cost resources subject to haircuts (20% / 2%); crypto does **not** satisfy cash/highly-liquid-securities liquidity floors; does **not** address DCO default resources under 39.11(a)(1); staff views only (not Commission; not no-action)
- Tag: **AUTO-INCLUDE** — new staff framework/guidance document on crypto treatment for registered-entity financial resources
- Disposition: **DAY’S WINNER — draft**

### 4. [CFTC] PR 9330-26 — Final Rule on data reporting for certain event contracts (2026-11-23)

- URL: https://www.cftc.gov/PressRoom/PressReleases/9330-26
- Tag: **SKIP** — prediction-market reporting perimeter; no crypto/digital-asset doctrine in press framing; not Phase 1 crypto substance for `fedreg/cftc.md`

### 5. [CFTC] PR 9329-26 — whistleblower awards (2026-11-23)

- Tag: **SKIP** — administrative awards; no crypto doctrine

### 6. [SEC] LR-26694 — Backward Hat Capital (2026-11-23 litigation release for PR 2026-116)

- URL: https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26694
- Tag: **EVALUATE → SKIP** — primary theory FX / securities antifraud; crypto conversion incidental; continuity with 11-22 / 11-23 SKIP

### 7. [SEC] LR-26693 — Three Brothers Trading / Reg SHO (2026-11-23)

- URL: https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26693
- Tag: **SKIP** — short-sale locate; no crypto

### 8. [OFAC] Iran-related designations (2026-11-23)

- URL: https://ofac.treasury.gov/recent-actions/20261123
- Tag: **SKIP** — shadow-banking / exchange networks; no crypto-asset designations or treatise-grade crypto doctrine in the action text

### 9. [CFTC] Prior-cycle items already disposed

- TLD/Backpack DCM+DCO + Selig statement — **already on main via PR #26**
- Backward Hat CFTC PR 9328-26 — **SKIP** retained (forex; no crypto product theory)
- CFTC PR 9327-26 24/7 agenda — **SKIP** retained

## Empty / quiet monitors

- FR SEC crypto-term window (≥2026-11-10): **0**
- FR CFTC crypto-term window (≥2026-11-10): no crypto-titled FR docs in window (impartial-access rule + routine notices only)
- FR sanctions+crypto window: only MEXC FinCEN order (item 2)
- SEC press since 11-22: none newer than 2026-117 (CAT) / 2026-116 (Backward Hat)

## Ranking outcome

| Item | Tag | Disposition |
|------|-----|-------------|
| CFTC Staff Letter 26-31 / PR 9331-26 | AUTO-INCLUDE | **Ship** |
| SEC LR-26690 / PR 2026-115 | AUTO-INCLUDE (on main) | Do not duplicate |
| CFTC Backpack/TLD package | AUTO-INCLUDE (on main via #26) | Do not duplicate |
| FinCEN MEXC FR 2026-22962 | HOLD | Skip today — not OFAC |
| SEC Backward Hat LR-26694 / PR 2026-116 | EVALUATE → SKIP | FX antifraud; crypto incidental |
| CFTC event-contract reporting PR 9330-26 | SKIP | Non-crypto doctrine |
| OFAC 2026-11-23 Iran | SKIP | No crypto |
| SEC LR-26693 Reg SHO | SKIP | No crypto |
