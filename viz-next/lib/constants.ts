import type { EntityType, RelationType, SubstrateFamily } from "./types"

/** Substrate family metadata: id, label, and hex color used in the graph canvas. */
export const SUBSTRATES: {
  id: string
  label: string
  color: string
}[] = [
  { id: "A", label: "A Data", color: "#3b82f6" }, // blue
  { id: "B", label: "B Automation", color: "#22c55e" }, // green
  { id: "C", label: "C Model", color: "#ef4444" }, // red
  { id: "D", label: "D Deeptech", color: "#f59e0b" }, // orange
  { id: "E", label: "E Biological", color: "#c084fc" }, // purple
  { id: "F", label: "F Clinical", color: "#2dd4bf" }, // teal
  { id: "n/a", label: "n/a", color: "#8b8f98" }, // grey
]

export const SUBSTRATE_COLORS: Record<string, string> = Object.fromEntries(
  SUBSTRATES.map((s) => [s.id, s.color]),
)

export function substrateColor(family: SubstrateFamily | string | undefined): string {
  if (!family) return SUBSTRATE_COLORS["n/a"]
  return SUBSTRATE_COLORS[family] ?? SUBSTRATE_COLORS["n/a"]
}

export function substrateLabel(family: SubstrateFamily | string | undefined): string {
  if (!family) return "n/a"
  const found = SUBSTRATES.find((s) => s.id === family)
  return found ? found.label : "n/a"
}

export const ENTITY_TYPES: { id: EntityType; label: string }[] = [
  { id: "primitive", label: "Primitive" },
  { id: "company", label: "Company" },
  { id: "idea", label: "Idea" },
]

export const RELATIONS: {
  id: RelationType
  label: string
  color: string
  dashed?: boolean
}[] = [
  { id: "uses", label: "uses", color: "#e0a458" },
  { id: "references", label: "references", color: "#6b7280", dashed: true },
  { id: "closest", label: "closest", color: "#7c8794", dashed: true },
  { id: "competes", label: "competes", color: "#ef4444", dashed: true },
  { id: "complements", label: "complements", color: "#e0a458" },
  { id: "related", label: "related", color: "#8b95a3" },
]

export const RELATION_COLORS: Record<string, string> = Object.fromEntries(
  RELATIONS.map((r) => [r.id, r.color]),
)

/** TRL badge color bucket per spec: 1-3 red, 4-5 orange, 6-7 yellow, 8-9 green. */
export function trlBucket(
  trl: number | "" | undefined | null,
): "unknown" | "low" | "mid" | "high" | "ready" {
  if (trl === "" || trl == null || Number.isNaN(Number(trl))) return "unknown"
  const n = Number(trl)
  if (n <= 3) return "low"
  if (n <= 5) return "mid"
  if (n <= 7) return "high"
  return "ready"
}

export const TRL_BADGE_CLASSES: Record<string, string> = {
  low: "bg-red-500/15 text-red-400 border-red-500/30",
  mid: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  high: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  ready: "bg-green-500/15 text-green-400 border-green-500/30",
  unknown: "bg-muted text-muted-foreground border-border",
}

export const FUNDING_STAGES = [
  "pre-seed",
  "seed",
  "series-a",
  "series-b",
  "series-c",
  "series-d-plus",
  "public",
  "acquired",
  "bootstrapped",
]

export const COMMERCIALISATION_STATUSES = [
  "research_only",
  "preclinical",
  "pilot_deployment",
  "commercial_early",
  "commercial_scaled",
  "acquired",
]

export const BUSINESS_MODELS = [
  "saas",
  "device_consumables",
  "manufacturing_cdmo",
  "platform_partnership",
  "platform_to_pipeline_hybrid",
  "fee_for_service_research",
  "partnerships",
]

export function prettyLabel(value: string | undefined | null): string {
  if (!value) return "n/a"
  return value
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function formatFunding(m: number | "" | undefined | null): string {
  if (m === "" || m == null || Number(m) === 0) return "n/a"
  const n = Number(m)
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}B`
  return `$${n}M`
}

/** entity display name works across companies (name), primitives (name) and ideas (idea). */
export function entityName(e: {
  name?: string
  idea?: string
  label?: string
  id: string
}): string {
  return e.name ?? e.label ?? e.idea ?? e.id
}
