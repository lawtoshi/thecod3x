import type { JsonObject, JsonValue } from "@grok/agent-sdk";

export function asObject(value: JsonValue | undefined): JsonObject {
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  return {};
}

export function asNumber(value: JsonValue | undefined, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

export function asString(value: JsonValue | undefined): string | undefined {
  return typeof value === "string" ? value : undefined;
}
