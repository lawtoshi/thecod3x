# Section draft (Sonnet)

Draft only the ranked winner for today. Match existing page voice.

## Rules

- Load `day/config/editorial-constitution.md` and obey it.
- Describe what agencies/courts did; no advocacy; no practice advice.
- Every material claim needs a primary-source URL.
- News is a lead only — never sole authority.
- Preserve Overview → subsections → Index of Sources (reverse chronological) → Authors.
- Add bot attribution line: `This update created by bots on [DATE] and approved by a human on [DATE].` using today's date for the bot half; leave human date as `[DATE]`.
- Do not touch Litigation Tracker, Terms, License, or Contribute.
- Keep the package reviewable in ~15 minutes.

## Output

Return:

1. Target path (`fedreg/sec.md` | `fedreg/cftc.md` | `fedreg/ofac.md`)
2. Full updated markdown body for that file
3. Bullet list of primary source URLs used
4. One-paragraph what/why for the PR brief
