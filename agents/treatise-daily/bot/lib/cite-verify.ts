export type CiteResult = {
  url: string;
  ok: boolean;
  status?: number;
  error?: string;
};

const MAX_URLS = 40;
const TIMEOUT_MS = 12_000;

/** Fail-closed URL verification: claim stays out of prose if fetch fails. */
export async function verifyUrls(urls: string[]): Promise<{
  results: CiteResult[];
  allOk: boolean;
  failed: string[];
}> {
  const unique = [...new Set(urls.map((u) => u.trim()).filter(Boolean))].slice(0, MAX_URLS);
  const results: CiteResult[] = [];
  for (const url of unique) {
    results.push(await verifyOne(url));
  }
  const failed = results.filter((r) => !r.ok).map((r) => r.url);
  return { results, allOk: failed.length === 0, failed };
}

async function verifyOne(url: string): Promise<CiteResult> {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return { url, ok: false, error: "invalid_url" };
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { url, ok: false, error: "unsupported_protocol" };
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "thecod3x-treatise-daily/0.1" },
    });
    if (response.status === 405 || response.status === 403 || response.status === 501) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "thecod3x-treatise-daily/0.1" },
      });
    }
    const ok = response.status >= 200 && response.status < 400;
    return { url, ok, status: response.status, error: ok ? undefined : `http_${response.status}` };
  } catch (error) {
    return {
      url,
      ok: false,
      error: error instanceof Error ? error.message : "fetch_failed",
    };
  } finally {
    clearTimeout(timer);
  }
}
