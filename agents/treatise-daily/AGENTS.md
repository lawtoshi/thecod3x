# treatise-daily — coding notes

Loop: edit `bot/` → `npx --yes "@grok/agent-sdk@0.6.0" validate --dir .` → `npx tsc --noEmit` → `tool call` / `run` / `eval`.

- Pin `@grok/agent-sdk@0.6.0`.
- Node 22+, never Bun.
- Evals live in project-root `evals/`.
- Durable state: `ctx.host.kv` / `ctx.host.files` (not module `Map`s).
- Phase 1 sections: SEC → CFTC → OFAC only.
- Ship gate is `ship_daily_result` (≤1 PR/day).
