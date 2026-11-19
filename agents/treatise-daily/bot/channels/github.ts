import { githubChannel } from "@grok/agent-sdk/channels/github";
import { REPO } from "../lib/config.js";

/**
 * Cursor-account GitHub access for branch/PR writes on the treatise repo.
 * Deploy with an attached Cursor service account that can reach this repo.
 * Local `tool call` / serve need `agent-sdk login` or CURSOR_* credentials
 * because cursorAccount enables the SCM event lane.
 */
export default githubChannel({
  botName: "treatise-daily",
  cursorAccount: {
    repos: [REPO],
    permissions: "contents-write",
  },
  // Daily loop is schedule-driven; ignore GitHub wake noise in Phase 1.
  onPullRequest: () => null,
});
