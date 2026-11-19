# Hosting options (non-Enterprise reality)

Gregory has **no Enterprise plan**, so Cursor **service accounts are unavailable**. Cloud workers cannot attach `CURSOR_SERVICE_ACCOUNT_KEY`, and the Agent SDK deploy skill refuses SA-less deploy from those workers.

## Evaluation (Agent SDK 0.6.0)

| # | Path | Laptop-free? | Works without Enterprise SA? | Notes |
|---|------|--------------|------------------------------|-------|
| **3** | **Project coordinator → daily Cursor cloud worker** running `.automation/daily-cloud-run.md` | **Yes** | **Yes (recommended interim)** | Same Project already used for Phase 0/1. Human-all PRs unchanged. |
| 1 | Gregory `agent-sdk login` + `deploy` from a **private terminal** | Yes *after* first deploy | **Maybe** — needs a **team with agent hosting**; personal-only deploys are not supported; CLI/docs emphasize team + often SA | Use only if Teams hosting is confirmed. Save alias token privately. |
| 2 | GitHub Actions cron | Yes | Yes, with secrets | Extra secret surface (`CURSOR_API_KEY` / tokens). Deferred unless Option 3 is rejected. |
| 4 | Self-host `agent-sdk serve` on a VPS | Yes | Yes (user API key) | Ops burden; not preferred. |

**Recommendation:** use **Option 3** now. Keep this Agent SDK project ready for Option 1 when team hosting exists.

## Option 3 — daily cloud worker (do this)

See `.automation/daily-cloud-run.md`. Coordinator spawns one worker/day; worker scoops → ranks → drafts → cite-verifies → challenges → opens ≤1 PR or no-ops.

## Option 1 — private-terminal deploy (only if Teams hosting works)

Run on Gregory’s machine (or any trusted private terminal). **Do not** paste the alias token into chat.

```bash
# 0) One-time: ensure Privacy Mode is not Legacy; team has agent hosting on.
cd /path/to/thecod3x
git fetch origin main && git checkout main && git pull origin main

cd agents/treatise-daily
npm ci
npx --yes "@grok/agent-sdk@0.6.0" login
npx --yes "@grok/agent-sdk@0.6.0" whoami --json   # expect a personal/team login, not blank
npx --yes "@grok/agent-sdk@0.6.0" validate --dir .

# Dry-run (no change)
npx --yes "@grok/agent-sdk@0.6.0" deploy \
  --dir . \
  --ref "$(git -C ../.. rev-parse origin/main)" \
  --cursor-events-repo lawtoshi/thecod3x \
  --dry-run --json

# Real deploy — save the one-time alias token to a password manager (0600 file OK)
npx --yes "@grok/agent-sdk@0.6.0" deploy \
  --dir . \
  --ref "$(git -C ../.. rev-parse origin/main)" \
  --cursor-events-repo lawtoshi/thecod3x

npx --yes "@grok/agent-sdk@0.6.0" deployment get treatise-daily --json --fields status,lastError
```

If `deploy` errors with team/hosting/service-account entitlement: stay on Option 3.

After deploy is `running`, ask the Project coordinator before the first manual/schedule fire.

## Option 2 — GHA (deferred)

Not implemented. Would add `.github/workflows/` + repository secrets. Prefer Option 3 to avoid duplicating the pipeline and parking a Cursor API key in Actions.

## Secrets

- **Option 3:** none beyond existing Cursor Project / GitHub access the cloud agent already has.
- **Option 1:** Cursor login on the deploy terminal; GitHub via `cursorAccount` on the deployment. No `GITHUB_TOKEN` secret unless the channel is changed.
- Never put secrets in chat.
