import { PHASE1_SECTIONS, type SectionId } from "./config.js";

export type ScoopItem = {
  section: SectionId;
  title: string;
  date: string;
  url: string;
  source: string;
  summary: string;
};

export type ScoopResult = {
  date: string;
  lookbackDays: number;
  items: ScoopItem[];
  errors: string[];
};

/** Daily run; look back two weeks so quiet FR weeks still surface late-week items. */
const LOOKBACK_DAYS = 14;

export async function scoopPhase1(now = new Date()): Promise<ScoopResult> {
  const since = new Date(now.getTime() - LOOKBACK_DAYS * 86_400_000);
  const date = now.toISOString().slice(0, 10);
  const items: ScoopItem[] = [];
  const errors: string[] = [];
  const seen = new Set<string>();

  const pushAll = (rows: ScoopItem[]) => {
    for (const row of rows) {
      const key = row.url.toLowerCase();
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      items.push(row);
    }
  };

  for (const section of PHASE1_SECTIONS) {
    try {
      pushAll(await scoopFederalRegister(section.id, section.frAgency, section.terms, since));
    } catch (error) {
      errors.push(`${section.id}:fr:${errorMessage(error)}`);
    }
  }

  try {
    pushAll(await scoopBroadCryptoFr(since));
  } catch (error) {
    errors.push(`broad:fr:${errorMessage(error)}`);
  }

  try {
    pushAll(await scoopSecPress(since));
  } catch (error) {
    errors.push(`sec:press:${errorMessage(error)}`);
  }

  // CFTC public RSS paths are unstable; Federal Register is the primary CFTC scoop.
  // Keep a soft probe so a restored feed lights up without failing the day.
  try {
    pushAll(await scoopCftcPress(since));
  } catch (error) {
    errors.push(`cftc:press:${errorMessage(error)}`);
  }

  items.sort((a, b) => b.date.localeCompare(a.date));
  return { date, lookbackDays: LOOKBACK_DAYS, items, errors };
}

export function formatCandidatesMarkdown(scoop: ScoopResult): string {
  const lines = [
    `# Candidate ledger — ${scoop.date}`,
    "",
    `Lookback: ${scoop.lookbackDays} days. Phase 1 sections: SEC → CFTC → OFAC.`,
    "",
  ];
  if (scoop.errors.length > 0) {
    lines.push("## Scoop errors", "");
    for (const error of scoop.errors) {
      lines.push(`- ${error}`);
    }
    lines.push("");
  }
  if (scoop.items.length === 0) {
    lines.push("## Items", "", "_No candidates returned._", "");
    return lines.join("\n");
  }
  lines.push("## Items", "");
  for (const [index, item] of scoop.items.entries()) {
    lines.push(
      `### ${index + 1}. [${item.section.toUpperCase()}] ${item.title}`,
      "",
      `- Date: ${item.date}`,
      `- Source: ${item.source}`,
      `- URL: ${item.url}`,
      `- Summary: ${item.summary}`,
      `- Suggested tag: EVALUATE (orchestrator / ingest must apply AUTO-INCLUDE / EVALUATE / SKIP)`,
      "",
    );
  }
  return lines.join("\n");
}

async function scoopFederalRegister(
  section: SectionId,
  agency: string,
  terms: readonly string[],
  since: Date,
): Promise<ScoopItem[]> {
  const term = terms.slice(0, 3).join(" OR ");
  const url = new URL("https://www.federalregister.gov/api/v1/documents.json");
  url.searchParams.set("per_page", "15");
  url.searchParams.set("order", "newest");
  url.searchParams.set("conditions[agencies][]", agency);
  url.searchParams.set("conditions[term]", term);
  url.searchParams.set("conditions[publication_date][gte]", isoDate(since));

  const data = (await fetchJson(url)) as {
    results?: Array<{
      title?: string;
      abstract?: string;
      html_url?: string;
      publication_date?: string;
      type?: string;
    }>;
  };
  const items: ScoopItem[] = [];
  for (const row of data.results ?? []) {
    if (!row.html_url || !row.title) {
      continue;
    }
    items.push({
      section,
      title: row.title,
      date: row.publication_date ?? isoDate(since),
      url: row.html_url,
      source: `federalregister:${row.type ?? "document"}`,
      summary: clip(row.abstract ?? row.title, 400),
    });
  }
  return items;
}

async function scoopSecPress(since: Date): Promise<ScoopItem[]> {
  // SEC press releases Atom-ish listing page as HTML fallback via recent litigation RSS.
  const url = "https://www.sec.gov/news/pressreleases.rss";
  return scoopRss("sec", url, since, "sec.gov/press");
}

async function scoopCftcPress(since: Date): Promise<ScoopItem[]> {
  const url = "https://www.cftc.gov/PressRoom/PressReleases/rss.xml";
  return scoopRss("cftc", url, since, "cftc.gov/press");
}

async function scoopBroadCryptoFr(since: Date): Promise<ScoopItem[]> {
  const url = new URL("https://www.federalregister.gov/api/v1/documents.json");
  url.searchParams.set("per_page", "20");
  url.searchParams.set("order", "newest");
  url.searchParams.set(
    "conditions[term]",
    "cryptocurrency OR \"digital asset\" OR bitcoin OR \"virtual currency\" OR OFAC mixer",
  );
  url.searchParams.set("conditions[publication_date][gte]", isoDate(since));
  const data = (await fetchJson(url)) as {
    results?: Array<{
      title?: string;
      abstract?: string;
      html_url?: string;
      publication_date?: string;
      type?: string;
      agencies?: Array<{ name?: string; slug?: string }>;
    }>;
  };
  const items: ScoopItem[] = [];
  for (const row of data.results ?? []) {
    if (!row.html_url || !row.title) {
      continue;
    }
    items.push({
      section: mapAgenciesToSection(row.agencies ?? []),
      title: row.title,
      date: row.publication_date ?? isoDate(since),
      url: row.html_url,
      source: `federalregister:broad:${row.type ?? "document"}`,
      summary: clip(row.abstract ?? row.title, 400),
    });
  }
  return items;
}

function mapAgenciesToSection(
  agencies: Array<{ name?: string; slug?: string }>,
): SectionId {
  const blob = agencies.map((a) => `${a.name ?? ""} ${a.slug ?? ""}`).join(" ").toLowerCase();
  if (blob.includes("securities") || blob.includes("sec")) {
    return "sec";
  }
  if (blob.includes("commodity") || blob.includes("cftc")) {
    return "cftc";
  }
  // Treasury / FinCEN / OFAC family → OFAC page owns Phase-1 sanctions-adjacent hits.
  return "ofac";
}

async function scoopRss(
  section: SectionId,
  feedUrl: string,
  since: Date,
  source: string,
): Promise<ScoopItem[]> {
  const xml = await fetchText(feedUrl);
  const items: ScoopItem[] = [];
  const blocks = xml.split(/<item[\s>]/i).slice(1);
  for (const block of blocks.slice(0, 20)) {
    const title = textBetween(block, "title");
    const link = textBetween(block, "link") || hrefFromGuid(block);
    const pub = textBetween(block, "pubDate") || textBetween(block, "published");
    const desc = stripTags(textBetween(block, "description") || textBetween(block, "summary") || "");
    if (!title || !link) {
      continue;
    }
    const when = pub ? new Date(pub) : undefined;
    if (when && !Number.isNaN(when.getTime()) && when < since) {
      continue;
    }
    if (!isCryptoRelevant(`${title} ${desc}`)) {
      continue;
    }
    items.push({
      section,
      title: stripTags(title),
      date: when && !Number.isNaN(when.getTime()) ? isoDate(when) : isoDate(since),
      url: link.trim(),
      source,
      summary: clip(desc || title, 400),
    });
  }
  return items;
}

function isCryptoRelevant(text: string): boolean {
  return /crypto|bitcoin|ether|digital\s+asset|virtual\s+currenc|stablecoin|mixer|ofac|sanction|blockchain|token|defi|nft/i.test(
    text,
  );
}

async function fetchJson(url: URL | string): Promise<unknown> {
  const response = await fetch(String(url), {
    headers: { accept: "application/json", "user-agent": "thecod3x-treatise-daily/0.1" },
  });
  if (!response.ok) {
    throw new Error(`http_${response.status}`);
  }
  return response.json();
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { accept: "application/rss+xml, application/xml, text/xml, */*", "user-agent": "thecod3x-treatise-daily/0.1" },
  });
  if (!response.ok) {
    throw new Error(`http_${response.status}`);
  }
  return response.text();
}

function textBetween(block: string, tag: string): string {
  const match = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`, "i").exec(
    block,
  );
  return match?.[1]?.trim() ?? "";
}

function hrefFromGuid(block: string): string {
  const match = /<guid[^>]*>([^<]+)<\/guid>/i.exec(block);
  return match?.[1]?.trim() ?? "";
}

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function clip(value: string, max: number): string {
  if (value.length <= max) {
    return value;
  }
  return `${value.slice(0, max - 1)}…`;
}

function isoDate(value: Date): string {
  return value.toISOString().slice(0, 10);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
