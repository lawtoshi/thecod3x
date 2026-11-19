# treatise-daily

Cursor-hosted Agent SDK orchestrator for [lawtoshi/thecod3x](https://github.com/lawtoshi/thecod3x).

Pipeline: **ingest → rank → draft → challenge/arbiter → cite-verify → ≤1 PR/day** (or clean no-op).

Phase 1 rotation: **SEC → CFTC → OFAC**.

## Layout

| Path | Role |
|------|------|
| `bot/agent.ts` | Haiku orchestrator + hosting egress |
| `bot/schedules/daily.ts` | Cron `0 14 * * *` UTC |
| `bot/channels/daily.ts` | Manual `POST /run` + schedule receive |
| `bot/channels/github.ts` | `cursorAccount` contents-write on `lawtoshi/thecod3x` |
| `bot/tools/*` | Budget, scoop, cite-verify, ship, cost log |
| `bot/subagents/ingest` | Haiku triage |
| `bot/subagents/draft` | Sonnet prose |
| `bot/subagents/challenge` | Opus challenge + arbiter |

Repo constitution/config loaded from `.automation/` at collect time.

## Local commands

```bash
cd agents/treatise-daily
npx --yes "@grok/agent-sdk@0.6.0" validate --dir .
npx tsc --noEmit
npx --yes "@grok/agent-sdk@0.6.0" tool call check_budget --dir . --input '{}' --json
npx --yes "@grok/agent-sdk@0.6.0" tool call verify_citations --dir . --input '{"urls":["https://www.federalregister.gov/"]}' --json
```

Manual daily fire (dev; schedules do not auto-fire under `--dev`):

```bash
npx --yes "@grok/agent-sdk@0.6.0" serve --dir . --dev
# then:
curl -X POST http://127.0.0.1:3000/treatise-daily/v1/channels/daily/run
# or:
curl -X POST http://127.0.0.1:3000/treatise-daily/v1/dev/schedules/daily
```

## Deploy (Cursor-hosted)

Requires an attached Cursor service account and a pushed git ref:

```bash
npx --yes "@grok/agent-sdk@0.6.0" validate --dir .
npx --yes "@grok/agent-sdk@0.6.0" deploy --dir . --dry-run --json
npx --yes "@grok/agent-sdk@0.6.0" deploy --dir .
```

Pass `--cursor-events-repo lawtoshi/thecod3x` when preserving GitHub event wiring.

## Human gate

PRs never auto-merge. Coordinator asks Gregory: **Are you ready to merge today’s treatise PR?**
