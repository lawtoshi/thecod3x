/** Treatise repo the daily loop updates. */
export const REPO = "lawtoshi/thecod3x";

/** Phase 1 section rotation (locked). */
export const PHASE1_SECTIONS = [
  {
    id: "sec",
    label: "SEC",
    page: "fedreg/sec.md",
    frAgency: "securities-and-exchange-commission",
    terms: ["crypto", "bitcoin", "digital asset", "securities", "ether"],
  },
  {
    id: "cftc",
    label: "CFTC",
    page: "fedreg/cftc.md",
    frAgency: "commodity-futures-trading-commission",
    terms: ["crypto", "bitcoin", "digital asset", "event contract", "prediction market"],
  },
  {
    id: "ofac",
    label: "OFAC",
    page: "fedreg/ofac.md",
    frAgency: "treasury-department",
    terms: ["OFAC", "sanctions", "virtual currency", "mixer", "cryptocurrency"],
  },
] as const;

export type SectionId = (typeof PHASE1_SECTIONS)[number]["id"];

export const SPEND_CEILING_PCT = 75;

/** Attribution line template (human date stamped on merge). */
export const ATTRIBUTION_TEMPLATE =
  "This update created by bots on [DATE] and approved by a human on [DATE].";

export function attributionLine(botDate: string): string {
  return `This update created by bots on ${botDate} and approved by a human on [DATE].`;
}

export function todayUtc(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

export function monthUtc(now = new Date()): string {
  return now.toISOString().slice(0, 7);
}

export function shipKvKey(date: string): string {
  return `treatise:shipped:${date}`;
}

export function spendKvKey(month: string): string {
  return `treatise:spend:${month}`;
}
