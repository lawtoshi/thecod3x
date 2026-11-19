const PATH = /^[A-Za-z0-9._/-]+$/;
const REF = /^[A-Za-z0-9._/-]+$/;

const ALLOWED_PREFIXES = [
  "fedreg/",
  ".automation/reports/",
  ".automation/proposals/",
  ".automation/decisions/",
  ".automation/prune/",
] as const;

export function parseRepo(raw: string): { owner: string; repo: string } | undefined {
  const match = /^([A-Za-z0-9._-]+)\/([A-Za-z0-9._-]+)$/.exec(raw.trim());
  if (match === null || match[1] === undefined || match[2] === undefined) {
    return undefined;
  }
  return { owner: match[1], repo: match[2] };
}

export function treatisePath(raw: string): string | undefined {
  const path = raw.replace(/^\/+/, "");
  if (path.includes("..") || path.includes("\\") || !PATH.test(path)) {
    return undefined;
  }
  if (!ALLOWED_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return undefined;
  }
  return path;
}

export function updateBranch(focus: string, date: string): string | undefined {
  if (!REF.test(focus) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return undefined;
  }
  return `update/${focus}-${date}`;
}
