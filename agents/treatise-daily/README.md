# treatise-daily

Agent SDK orchestrator for [lawtoshi/thecod3x](https://github.com/lawtoshi/thecod3x).

Pipeline: **ingest → rank → draft → challenge/arbiter → cite-verify → ≤1 PR/day** (or clean no-op).

Phase 1 rotation: **SEC → CFTC → OFAC**.

**Hosting:** Without Enterprise service accounts, managed deploy from cloud workers is blocked. **Interim daily path:** Project cloud worker playbook `.automation/daily-cloud-run.md`. See **[HOSTING.md](./HOSTING.md)** for options and private-terminal deploy commands.

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

Cloud workers cannot deploy without an Enterprise **service account**. Prefer the interim cloud-worker path (`.automation/daily-cloud-run.md`) unless Gregory confirms team agent hosting and runs deploy from a **private terminal** — commands in [HOSTING.md](./HOSTING.md).

## Human gate

PRs never auto-merge. Coordinator asks Gregory: **Are you ready to merge today’s treatise PR?**
