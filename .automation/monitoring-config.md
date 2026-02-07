# Monitoring Configuration

This file allows you to customize the monitoring behavior without editing the main monitoring script.

## Monitoring Settings

### Frequency
- **Current**: Weekly (7 days)
- **Options**: Daily (1 day), Bi-weekly (14 days), Monthly (30 days)

### Threshold for Creating PRs
- **Minimum Items**: At least 1 AUTO-INCLUDE or 2 EVALUATE items
- **Override**: Set to 'true' to create PR for any findings, 'false' for stricter filtering

## Priority Agencies (checked first)

1. SEC (Securities and Exchange Commission)
2. CFTC (Commodity Futures Trading Commission)
3. Federal Courts (major crypto cases)
4. Treasury Department / FinCEN
5. Federal Reserve
6. DOJ (enforcement actions)
7. IRS (tax guidance)
8. Congress (legislation)

## Primary News Sources

### Tier 1 (Check Every Week)
- Wall Street Journal (wsj.com)
- CoinDesk (coindesk.com)
- The Block (theblock.co)

### Tier 2 (Check When Tier 1 Shows Activity)
- New York Times (nytimes.com)
- Washington Post (washingtonpost.com)
- The Defiant (thedefiant.io)
- Decrypt (decrypt.co)
- Bloomberg (bloomberg.com)

### Tier 3 (Check for Deep Dives)
- Law360 (law360.com) - requires subscription
- Reuters (reuters.com)
- Financial Times (ft.com)

## Enforcement Action Thresholds

- **Auto-Include**: ≥ $5,000,000 OR novel legal theory
- **Evaluate**: $1,000,000 - $4,999,999 AND (novel theory OR major defendant)
- **Skip**: < $1,000,000 (unless precedent-setting)

## Court Decision Priorities

### Must Include
- Supreme Court (any crypto relevance)
- Circuit Court (appeals in major cases)
- District Court (if novel legal issue or major case)

### Evaluate
- District Court (significant but not precedent-setting)
- Magistrate recommendations (if particularly detailed analysis)

### Skip
- Procedural orders (unless denying motion to dismiss in major case)
- Discovery disputes
- Routine scheduling orders

## Regulatory Developments

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

## Legislative Tracking

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

## State-Level Developments

### Must Include (After Federal Pages Complete)
- New state laws passed (Wyoming, Texas, NY, Colorado priority)
- State AG enforcement actions > $1M
- State Supreme Court decisions

### Evaluate
- State regulations proposed (if trend-setting state)
- State lower court decisions (if novel)

### Skip
- Local/municipal regulations
- State administrative updates

## Report Format Preferences

### Level of Detail in Reports
- **Summary**: Brief (2-3 sentences per item)
- **Analysis**: Medium (paragraph per item with legal implications)
- **Comprehensive**: Detailed (multiple paragraphs with full context)

**Current Setting**: Medium

### Include in Reports
- [x] Source URLs
- [x] Date of development
- [x] Significance evaluation
- [x] Proposed page/section for update
- [x] Draft markdown text
- [ ] Full text of press releases (can be verbose)
- [ ] Related developments (good for context but can clutter)

## PR Creation Settings

### Auto-Create PR
- **Setting**: false (require explicit approval)
- **Alternative**: true (auto-create for AUTO-INCLUDE items)

### PR Review Assignment
- **Default Reviewer**: @lawtoshi
- **Auto-request review**: true

### Branch Naming
- **Format**: update/[agency]-[type]-YYYY-MM-DD
- **Examples**: update/sec-enforcement-2026-02-10

## Custom Search Queries

Add your own search queries here if you want to monitor specific topics:

### Example: Stablecoins
- "stablecoin regulation" past week
- "USDC compliance" past week
- "algorithmic stablecoin" past week

### Example: DeFi
- "DeFi enforcement" past week
- "decentralized exchange regulation" past week
- "smart contract securities" past week

### Example: Specific Companies
- "Coinbase SEC" past week
- "Binance enforcement" past week
- "Kraken regulation" past week

## Notes

- This file is for reference only - actual configuration requires editing the main monitoring script
- As we test the system, we'll refine these settings based on results
- Goal is to find the sweet spot: comprehensive coverage without noise
