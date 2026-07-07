"use client"

import { useState } from "react"
import { mutate } from "swr"
import {
  X,
  ExternalLink,
  Beaker,
  Building2,
  Lightbulb,
  ArrowUpRight,
  Pencil,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  entityName,
  formatFunding,
  prettyLabel,
  RELATION_COLORS,
  substrateColor,
  substrateLabel,
  TRL_BADGE_CLASSES,
  trlBucket,
} from "@/lib/constants"
import type {
  Capability,
  EntityDetail,
  GraphNode,
  Momentum,
  Scan,
  RelationType,
} from "@/lib/types"

export interface LinkedNode {
  id: string
  label: string
  type: GraphNode["type"]
  relation: RelationType
}

interface DetailPanelProps {
  detail: EntityDetail | null
  node: GraphNode | null
  links: LinkedNode[]
  onSelect: (id: string) => void
  onClose: () => void
}

const TYPE_ICON = {
  primitive: Beaker,
  company: Building2,
  idea: Lightbulb,
  prior_work: FileText,
}

function TrlBadge({ trl }: { trl: number | "" | undefined }) {
  const bucket = trlBucket(trl)
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11px] font-semibold",
        TRL_BADGE_CLASSES[bucket],
      )}
    >
      TRL {trl === "" || trl == null ? "n/a" : trl}
    </span>
  )
}

function Field({
  label,
  value,
}: {
  label: string
  value?: React.ReactNode
}) {
  if (value == null || value === "" || value === "n/a") return null
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="text-[13px] leading-relaxed text-foreground">
        {value}
      </span>
    </div>
  )
}

function Prose({ label, text }: { label: string; text?: string }) {
  if (!text) return null
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <p className="text-[13px] leading-relaxed text-foreground/90">{text}</p>
    </div>
  )
}

function Chips({
  label,
  items,
}: {
  label: string
  items?: string[]
}) {
  if (!items || items.length === 0) return null
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1">
        {items.map((it, i) => (
          <Badge key={`${it}-${i}`}>{prettyLabel(it)}</Badge>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </h3>
  )
}

function RouteFit({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  const tone =
    value === "strong"
      ? "bg-green-500/15 text-green-400 border-green-500/30"
      : value === "plausible"
        ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
        : "bg-muted text-muted-foreground border-border"
  return (
    <div className="flex items-center justify-between rounded-md border border-border bg-background px-2.5 py-1.5">
      <span className="text-[12px] text-muted-foreground">{label}</span>
      <span
        className={cn(
          "rounded-md border px-1.5 py-0.5 text-[11px] font-semibold",
          tone,
        )}
      >
        {prettyLabel(value)}
      </span>
    </div>
  )
}

function CapabilityCard({ cap }: { cap: Capability }) {
  const ventureShape =
    cap.venture_shape ?? cap.mechanism ?? undefined
  return (
    <Card className="flex flex-col gap-2 p-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[13px] font-semibold leading-snug text-foreground">
          {cap.capability}
        </p>
        <TrlBadge trl={cap.technology_readiness_level as number} />
      </div>
      {cap.what_it_could_unlock ? (
        <div className="text-[12px] leading-relaxed">
          <span className="font-medium text-green-400">Unlocks: </span>
          <span className="text-foreground/85">{cap.what_it_could_unlock}</span>
        </div>
      ) : null}
      {cap.translational_gap ? (
        <div className="text-[12px] leading-relaxed">
          <span className="font-medium text-orange-400">Gap: </span>
          <span className="text-foreground/85">{cap.translational_gap}</span>
        </div>
      ) : null}
      {ventureShape ? (
        <div className="text-[12px] leading-relaxed">
          <span className="font-medium text-muted-foreground">
            Venture shape:{" "}
          </span>
          <span className="text-foreground/75">{ventureShape}</span>
        </div>
      ) : null}
      {cap.closest_companies && cap.closest_companies.length > 0 ? (
        <div className="flex flex-wrap gap-1 pt-0.5">
          {cap.closest_companies.map((c) => (
            <Badge key={c} className="bg-background">
              {c}
            </Badge>
          ))}
        </div>
      ) : null}
    </Card>
  )
}

function LinkedNodes({
  links,
  onSelect,
}: {
  links: LinkedNode[]
  onSelect: (id: string) => void
}) {
  if (links.length === 0) return null
  return (
    <div className="flex flex-col gap-1.5">
      <SectionTitle>Connections ({links.length})</SectionTitle>
      <div className="flex flex-col gap-1">
        {links.map((l) => {
          const Icon = TYPE_ICON[l.type]
          return (
            <button
              key={`${l.id}-${l.relation}`}
              type="button"
              onClick={() => onSelect(l.id)}
              className="group flex items-center justify-between gap-2 rounded-md border border-border bg-background px-2 py-1.5 text-left transition-colors hover:bg-muted"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Icon className="size-3.5 shrink-0 text-muted-foreground" />
                <span className="truncate text-[12.5px] text-foreground">
                  {l.label}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span
                  className="rounded px-1 py-0.5 text-[10px] font-medium"
                  style={{
                    color: RELATION_COLORS[l.relation],
                    backgroundColor: RELATION_COLORS[l.relation] + "1f",
                  }}
                >
                  {l.relation}
                </span>
                <ArrowUpRight className="size-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function DetailPanel({
  detail,
  node,
  links,
  onSelect,
  onClose,
}: DetailPanelProps) {
  const open = !!detail
  const type = detail?.type ?? node?.type
  const Icon = type ? TYPE_ICON[type] : Beaker
  const title = detail
    ? entityName(detail)
    : node
      ? node.label
      : ""
  const family = detail?.substrate_family ?? node?.substrate_family
  const tags = detail?.substrate_tags ?? node?.substrate_tags ?? []
  const trl =
    (detail?.technology_readiness_level as number | "" | undefined) ??
    node?.trl
  const [editing, setEditing] = useState(false)

  return (
    <aside
      aria-hidden={!open}
      className={cn(
        "absolute right-0 top-0 z-20 flex h-full w-[380px] max-w-[92vw] flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300",
        open ? "translate-x-0" : "translate-x-full",
      )}
    >
      {detail ? (
        <>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-border p-4">
            <div className="flex min-w-0 flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="flex size-6 items-center justify-center rounded-md"
                  style={{ backgroundColor: substrateColor(family) + "26" }}
                >
                  <Icon
                    className="size-3.5"
                    style={{ color: substrateColor(family) }}
                  />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {type}
                </span>
              </div>
              <h2 className="text-pretty text-[17px] font-semibold leading-tight text-foreground">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge
                  style={{
                    borderColor: substrateColor(family) + "55",
                    color: substrateColor(family),
                    backgroundColor: substrateColor(family) + "14",
                  }}
                >
                  {substrateLabel(family)}
                </Badge>
                {tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
                <TrlBadge trl={trl} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant={editing ? "secondary" : "ghost"}
                size="icon-sm"
                onClick={() => setEditing((v) => !v)}
                aria-label="Edit entry"
                title="Edit this entry"
              >
                <Pencil className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={onClose}
                aria-label="Close panel"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
            {editing ? (
              <EditForm detail={detail} onClose={() => setEditing(false)} />
            ) : null}

            {detail.website ? (
              <a
                href={`https://${detail.website.replace(/^https?:\/\//, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1 text-[12px] text-muted-foreground hover:text-foreground"
              >
                {detail.website}
                <ExternalLink className="size-3" />
              </a>
            ) : null}

            {type === "primitive" ? (
              <PrimitiveBody detail={detail} />
            ) : type === "company" ? (
              <CompanyBody detail={detail} />
            ) : type === "prior_work" ? (
              <PriorWorkBody detail={detail} />
            ) : (
              <IdeaBody detail={detail} />
            )}

            <LinkedNodes links={links} onSelect={onSelect} />

            {detail.notes ? <Prose label="Notes" text={detail.notes} /> : null}
            {detail.last_verified ? (
              <p className="text-[11px] text-muted-foreground">
                Last verified {detail.last_verified}
              </p>
            ) : null}
          </div>
        </>
      ) : null}
    </aside>
  )
}

const COMMERCIAL_STATUSES = [
  "research_only", "preclinical", "pilot_deployment", "regulatory_review",
  "commercial_early", "commercial_scaled", "acquired", "defunct",
]
const FUNDING_STAGES = [
  "pre-seed", "seed", "series-a", "series-b", "series-c", "series-d-plus",
  "public", "acquired", "bootstrapped", "unknown",
]
const BUSINESS_MODELS = [
  "saas", "data_licensing", "api_model_as_a_service", "fee_for_service_research",
  "platform_partnership", "owned_pipeline", "platform_to_pipeline_hybrid",
  "diagnostic_per_test", "device_consumables", "monitoring_subscription",
  "consumer_subscription", "care_delivery", "pharmacy_prescribing_access",
  "manufacturing_cdmo", "research_tools", "ip_licensing",
  "outcome_based_value_based_care", "marketplace_network",
  "regulatory_evidence_generation", "newco_asset_creation",
]
const LEVEL = ["high", "medium", "low"]
const FIT = ["strong", "plausible", "weak", "none"]

type EditKind = "scalar" | "number" | "enum" | "list" | "prose" | "section"
type EditField = {
  key: string
  label: string
  kind: EditKind
  options?: string[]
  section?: string
  hint?: string
}

const EDITABLE: Record<string, EditField[]> = {
  company: [
    { key: "name", label: "Name", kind: "scalar" },
    { key: "website", label: "Website", kind: "scalar" },
    { key: "founded", label: "Founded", kind: "number" },
    { key: "area", label: "Area", kind: "scalar" },
    { key: "one_liner", label: "One-liner", kind: "section", section: "One-liner" },
    { key: "new_capability", label: "New capability", kind: "prose" },
    { key: "funding_stage", label: "Funding stage", kind: "enum", options: FUNDING_STAGES },
    { key: "total_funding_usd_m", label: "Total funding $M", kind: "number" },
    { key: "commercialisation_status", label: "Commercialisation", kind: "enum", options: COMMERCIAL_STATUSES },
    { key: "technology_readiness_level", label: "TRL (1-9)", kind: "number" },
    { key: "business_model", label: "Business model", kind: "enum", options: BUSINESS_MODELS },
    { key: "technology_platform_name", label: "Platform", kind: "scalar" },
    { key: "technology_platform_ids", label: "Primitive links", kind: "list", hint: "one primitive slug per line" },
    { key: "buyer", label: "Buyers", kind: "list", hint: "pharma, biotech, provider, payer, consumer, academic_lab, cro, cdmo, employer" },
    { key: "customer", label: "Customers (who pays)", kind: "list" },
    { key: "data_centrality", label: "Data centrality", kind: "enum", options: ["core-moat", "important-enabler", "supporting-evidence", "product", "not-central"] },
    { key: "data_ownership", label: "Data ownership", kind: "list", hint: "proprietary, public, licensed, partner-supplied, generated-in-house, customer-generated" },
    { key: "moat", label: "Moat", kind: "list", hint: "data, model, wet-lab, clinical-evidence, IP, distribution, regulatory-trust, founder-brand, capital" },
    { key: "primary_value_chain_layer", label: "Value chain layer", kind: "scalar" },
    { key: "input", label: "Inputs", kind: "list", hint: "one per line" },
    { key: "output", label: "Outputs", kind: "list", hint: "one per line" },
    { key: "buyer_urgency", label: "Buyer urgency", kind: "enum", options: LEVEL },
    { key: "buyer_wtp", label: "Buyer WTP", kind: "enum", options: LEVEL },
    { key: "sales_cycle", label: "Sales cycle", kind: "enum", options: ["short", "medium", "long"] },
    { key: "regulatory_burden", label: "Regulatory burden", kind: "enum", options: ["none", "light", "medium", "heavy"] },
    { key: "barrier_to_entry", label: "Barrier to entry", kind: "enum", options: ["low", "medium", "high", "very-high", "nearly-impossible"] },
    { key: "barrier_to_entry_logic", label: "Barrier logic", kind: "prose" },
    { key: "hardness", label: "Hardness", kind: "enum", options: ["moderate", "hard", "very-hard", "moonshot"] },
    { key: "hardness_reason", label: "Why it is hard", kind: "prose" },
    { key: "limiting_factor", label: "Limiting factor", kind: "prose" },
    { key: "notes", label: "Notes", kind: "section", section: "Notes" },
  ],
  primitive: [
    { key: "name", label: "Name", kind: "scalar" },
    { key: "new_capability", label: "New capability", kind: "prose" },
    { key: "technology_readiness_level", label: "Lead TRL (1-9)", kind: "number" },
    { key: "commercialisation_status", label: "Commercialisation", kind: "enum", options: COMMERCIAL_STATUSES },
    { key: "mechanism", label: "Mechanism", kind: "prose" },
    { key: "translational_gap", label: "Translational gap", kind: "prose" },
    { key: "defensibility", label: "Defensibility", kind: "enum", options: ["low", "medium", "high", "very-high"] },
    { key: "related_primitives", label: "Related primitives", kind: "list", hint: "one primitive slug per line" },
    { key: "closest_companies", label: "Closest companies", kind: "list" },
    { key: "notes", label: "Notes", kind: "prose" },
  ],
  idea: [
    { key: "idea", label: "Idea", kind: "prose" },
    { key: "overall_score", label: "Score (0-10)", kind: "number" },
    { key: "ef_route_fit", label: "EF fit", kind: "enum", options: FIT },
    { key: "cambridge_route_fit", label: "Cambridge fit", kind: "enum", options: FIT },
    { key: "new_capability", label: "New capability", kind: "prose" },
    { key: "technology_platform_ids", label: "Primitive links", kind: "list", hint: "one slug per line" },
    { key: "three_month_mvp", label: "3-month MVP", kind: "prose" },
    { key: "why_now", label: "Why now", kind: "prose" },
  ],
  prior_work: [
    { key: "title", label: "Title", kind: "prose" },
    { key: "authors", label: "Authors", kind: "list", hint: "one per line" },
    { key: "year", label: "Year", kind: "number" },
    { key: "venue", label: "Venue", kind: "scalar" },
    { key: "doi", label: "DOI", kind: "scalar" },
    { key: "technology_platform_ids", label: "Grounds primitives", kind: "list", hint: "one primitive slug per line" },
    { key: "hypothesis", label: "Hypothesis", kind: "prose" },
    { key: "methods", label: "Methods", kind: "prose" },
    { key: "what_it_proves", label: "What it proves", kind: "prose" },
    { key: "next_question", label: "Next question", kind: "prose" },
    { key: "related_works", label: "Related works", kind: "list", hint: "one per line" },
    { key: "notes", label: "Notes", kind: "prose" },
  ],
}

function currentString(rec: Record<string, unknown>, f: EditField): string {
  const v = rec[f.key]
  if (f.kind === "list") return (Array.isArray(v) ? (v as string[]) : []).join("\n")
  return String(v ?? "")
}

function EditForm({ detail, onClose }: { detail: EntityDetail; onClose: () => void }) {
  const fields = EDITABLE[detail.type] ?? []
  const rec = detail as unknown as Record<string, unknown>
  const [vals, setVals] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.key, currentString(rec, f)])),
  )
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const set = (k: string, v: string) => setVals((s) => ({ ...s, [k]: v }))

  async function save() {
    setSaving(true)
    setError(null)
    const updates: Record<string, string> = {}
    const lists: Record<string, string[]> = {}
    const sections: Record<string, string> = {}
    for (const f of fields) {
      if (vals[f.key] === currentString(rec, f)) continue
      if (f.kind === "list") {
        lists[f.key] = vals[f.key].split("\n").map((s) => s.trim()).filter(Boolean)
      } else if (f.kind === "section" && f.section) {
        sections[f.section] = vals[f.key]
      } else {
        updates[f.key] = vals[f.key]
      }
    }
    if (!Object.keys(updates).length && !Object.keys(lists).length && !Object.keys(sections).length) {
      setSaving(false)
      onClose()
      return
    }
    try {
      const res = await fetch("/api/entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: detail.id, updates, lists, sections }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "save failed")
        setSaving(false)
        return
      }
      await mutate("/data/index.json")
      await mutate("/data/graph.json")
      setSaving(false)
      onClose()
    } catch (e) {
      setError(String(e))
      setSaving(false)
    }
  }

  const inputCls = "rounded border border-border bg-background px-2 py-1 text-sm"
  return (
    <div className="rounded-md border border-primary/40 bg-background/60 p-3">
      <div className="mb-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        Edit {detail.type}
      </div>
      <div className="flex flex-col gap-2.5">
        {fields.map((f) => (
          <label key={f.key} className="flex flex-col gap-1">
            <span className="text-[11px] text-muted-foreground">{f.label}</span>
            {f.kind === "enum" ? (
              <select value={vals[f.key]} onChange={(e) => set(f.key, e.target.value)} className={inputCls}>
                <option value="">(unset)</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            ) : f.kind === "list" || f.kind === "prose" || f.kind === "section" ? (
              <textarea
                value={vals[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                rows={f.kind === "list" ? 3 : 2}
                className={cn(inputCls, "resize-y font-normal leading-snug")}
              />
            ) : (
              <input
                type={f.kind === "number" ? "number" : "text"}
                value={vals[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                className={inputCls}
              />
            )}
            {f.hint ? <span className="text-[9.5px] text-muted-foreground/70">{f.hint}</span> : null}
          </label>
        ))}
      </div>
      {error ? <div className="mt-2 text-[11px] text-red-400">{error}</div> : null}
      <div className="sticky bottom-0 mt-3 flex items-center gap-2 bg-card/90 py-1">
        <Button size="sm" onClick={save} disabled={saving}>
          {saving ? "Saving..." : "Save to repo"}
        </Button>
        <Button size="sm" variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </div>
      <div className="mt-1 text-[10px] text-muted-foreground">
        Writes the markdown, validates (reverts on error), regenerates. Commit with git when ready.
      </div>
    </div>
  )
}

const BUCKET_STYLE: Record<string, { label: string; cls: string }> = {
  "commercialising-now": { label: "Commercialising now", cls: "bg-sky-500/15 text-sky-300 border-sky-500/40" },
  "patented-not-company-led": { label: "Patented, not company-led", cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40" },
  "hot-but-under-patented": { label: "Hot, under-patented", cls: "bg-amber-500/15 text-amber-300 border-amber-500/40" },
  "over-patented-crowded": { label: "Over-patented / crowded", cls: "bg-red-500/15 text-red-300 border-red-500/40" },
  "emerging": { label: "Emerging", cls: "bg-muted text-muted-foreground border-border" },
}

function ScanCard({ s }: { s: Scan }) {
  const b = BUCKET_STYLE[s.bucket ?? ""] ?? BUCKET_STYLE["emerging"]
  const pct = (v?: number) => (v == null ? "n/a" : `${v}%`)
  const share = (v?: number) => (v == null ? "n/a" : `${Math.round(v * 100)}%`)
  return (
    <div className="rounded-md border border-border bg-card/60 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          Commercialization scan
        </span>
        <span className={cn("rounded-md border px-1.5 py-0.5 text-[10.5px] font-semibold", b.cls)}>
          {b.label}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[12px]">
        <div><span className="text-muted-foreground">paper CAGR</span> <span className="tabular-nums text-foreground">{pct(s.paper_cagr_pct)}</span></div>
        <div><span className="text-muted-foreground">mean FWCI</span> <span className="tabular-nums text-foreground">{s.mean_fwci ?? "n/a"}</span></div>
        <div><span className="text-muted-foreground">patents</span> <span className="tabular-nums text-foreground">{s.patent_total ?? "n/a"}</span></div>
        <div><span className="text-muted-foreground">patent CAGR</span> <span className="tabular-nums text-foreground">{pct(s.patent_cagr_pct)}</span></div>
        <div><span className="text-muted-foreground">industry authors</span> <span className="tabular-nums text-foreground">{share(s.industry_share)}</span></div>
        <div><span className="text-muted-foreground">company assignees</span> <span className="tabular-nums text-foreground">{share(s.company_share)}</span></div>
      </div>
      {s.as_of ? <div className="mt-2 text-[10px] text-muted-foreground">primitive-scanner, {s.as_of}</div> : null}
    </div>
  )
}

function MomentumCard({ m }: { m: Momentum }) {
  const stat = (label: string, value: string | number | undefined) =>
    value === undefined || value === "" ? null : (
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</span>
        <span className="text-sm tabular-nums text-foreground">{value}</span>
      </div>
    )
  const statusColor =
    m.status === "uncommercialized"
      ? "text-emerald-400"
      : m.status === "early-startups"
        ? "text-amber-400"
        : "text-sky-400"
  return (
    <div className="rounded-md border border-border bg-card/60 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          Research momentum
        </span>
        <span className={cn("text-[11px] font-medium", statusColor)}>{m.status}</span>
      </div>
      <div className="grid grid-cols-3 gap-y-2 gap-x-2">
        {stat("Papers 21-25", m.papers?.toLocaleString())}
        {stat("CAGR", m.cagr_pct != null ? `${m.cagr_pct}%` : undefined)}
        {stat("FWCI", m.fwci)}
        {stat("Industry", m.industry_share_pct != null ? `${m.industry_share_pct}%` : undefined)}
        {stat("White space", m.buildable_whitespace)}
        {stat("Confidence", m.confidence)}
      </div>
      {m.as_of ? (
        <div className="mt-2 text-[10px] text-muted-foreground">
          bibliometric study, {m.as_of} (n={m.on_topic_n})
        </div>
      ) : null}
    </div>
  )
}

function PriorWorkBody({ detail }: { detail: EntityDetail }) {
  return (
    <>
      <Prose label="Hypothesis" text={detail.hypothesis} />
      <Prose label="Methods" text={detail.methods} />
      <Prose label="What it proves" text={detail.what_it_proves} />
      <Prose label="Next question" text={detail.next_question} />
      <div className="grid grid-cols-2 gap-3">
        <Field label="Year" value={detail.year} />
        <Field label="Venue" value={detail.venue} />
      </div>
      {detail.doi ? (
        <a
          href={`https://doi.org/${detail.doi}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-1 text-[12px] text-[#a78bfa] hover:underline"
        >
          doi:{detail.doi}
          <ExternalLink className="size-3" />
        </a>
      ) : null}
      <Chips label="Authors" items={detail.authors} />
      <Chips label="Grounds primitives" items={detail.technology_platform_ids} />
      <Chips label="Related works" items={detail.related_works} />
    </>
  )
}

function PrimitiveBody({ detail }: { detail: EntityDetail }) {
  return (
    <>
      <Prose label="New capability" text={detail.new_capability} />
      <Prose label="What it could unlock" text={detail.what_it_could_unlock} />

      {detail.capabilities && detail.capabilities.length > 0 ? (
        <div className="flex flex-col gap-2">
          <SectionTitle>Capabilities ({detail.capabilities.length})</SectionTitle>
          <div className="flex flex-col gap-2">
            {detail.capabilities.map((c, i) => (
              <CapabilityCard key={`${c.capability}-${i}`} cap={c} />
            ))}
          </div>
        </div>
      ) : null}

      {detail.scan && detail.scan.bucket ? <ScanCard s={detail.scan} /> : null}

      {detail.momentum && detail.momentum.papers ? (
        <MomentumCard m={detail.momentum} />
      ) : null}

      <Prose label="Mechanism" text={detail.mechanism} />
      <Prose label="Enabled by" text={detail.enabled_by} />
      <Prose label="Translational gap" text={detail.translational_gap} />
      <Prose label="What needs to happen" text={detail.what_needs_to_happen} />
      <Chips label="Use cases" items={detail.use_cases} />
      <Chips label="Closest companies" items={detail.closest_companies} />
      <Chips label="Closest labs" items={detail.closest_labs} />

      <div className="grid grid-cols-2 gap-3">
        <Field label="Evidence" value={prettyLabel(detail.evidence_level)} />
        <Field
          label="Defensibility"
          value={prettyLabel(detail.defensibility)}
        />
        <Field
          label="Regulatory"
          value={prettyLabel(detail.regulatory_complexity)}
        />
        <Field label="Capex" value={prettyLabel(detail.capex_intensity)} />
      </div>
    </>
  )
}

function CompanyBody({ detail }: { detail: EntityDetail }) {
  return (
    <>
      <Prose label="One-liner" text={detail.new_capability} />

      <div className="grid grid-cols-2 gap-3">
        <Field label="Funding stage" value={prettyLabel(detail.funding_stage)} />
        <Field
          label="Total funding"
          value={formatFunding(detail.total_funding_usd_m)}
        />
        <Field
          label="Commercialisation"
          value={prettyLabel(detail.commercialisation_status)}
        />
        <Field
          label="Business model"
          value={prettyLabel(
            Array.isArray(detail.business_model)
              ? detail.business_model.join(", ")
              : detail.business_model,
          )}
        />
      </div>

      {detail.technology_platform_name ? (
        <Prose label="Platform" text={detail.technology_platform_name} />
      ) : null}

      <Chips label="Moat" items={detail.moat} />

      <Prose label="Value chain layer" text={detail.primary_value_chain_layer} />
      <Chips label="Inputs" items={detail.input} />
      <Chips label="Outputs" items={detail.output} />
      <Chips label="Buyers" items={detail.buyer} />

      <Prose label="Limiting factor" text={detail.limiting_factor} />
      <Prose
        label="Barrier to entry"
        text={detail.barrier_to_entry_logic}
      />
      <Prose label="Why it is hard" text={detail.hardness_reason} />

      <div className="grid grid-cols-2 gap-3">
        <Field label="Barrier" value={prettyLabel(detail.barrier_to_entry)} />
        <Field label="Hardness" value={prettyLabel(detail.hardness)} />
        <Field
          label="Data centrality"
          value={prettyLabel(detail.data_centrality)}
        />
        <Field label="Buyer WTP" value={prettyLabel(detail.buyer_wtp)} />
      </div>
    </>
  )
}

function IdeaBody({ detail }: { detail: EntityDetail }) {
  return (
    <>
      {typeof detail.overall_score === "number" ? (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-3">
          <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Overall score
          </span>
          <span className="ml-auto text-[20px] font-semibold tabular-nums text-foreground">
            {detail.overall_score.toFixed(1)}
          </span>
          <span className="text-[12px] text-muted-foreground">/ 10</span>
        </div>
      ) : null}

      <Prose label="New capability" text={detail.new_capability} />

      <Card className="flex flex-col gap-1.5 border-primary/25 bg-primary/5 p-3">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-primary/90">
          3-month MVP
        </span>
        <p className="text-[13px] leading-relaxed text-foreground/90">
          {detail.three_month_mvp ?? "n/a"}
        </p>
      </Card>

      <Prose label="Why now" text={detail.why_now} />
      <Prose label="First use case" text={detail.first_use_case} />
      <Prose label="Target user" text={detail.target_user} />
      <Prose label="Differentiation" text={detail.differentiation} />
      <Prose
        label="Unfair advantage needed"
        text={detail.unfair_advantage_needed}
      />
      <Prose label="Validation plan" text={detail.validation_plan} />

      <div className="flex flex-col gap-1.5">
        <SectionTitle>Founder route fit</SectionTitle>
        <div className="flex flex-col gap-1.5">
          <RouteFit label="EF route" value={detail.ef_route_fit} />
          <RouteFit label="Cambridge route" value={detail.cambridge_route_fit} />
          <RouteFit label="Founder fit" value={detail.founder_fit} />
        </div>
      </div>

      <Prose label="Technical risk" text={detail.technical_risk} />
      <Prose label="Regulatory risk" text={detail.regulatory_risk} />
      <Prose label="Commercial risk" text={detail.commercial_risk} />
      <Chips label="Prior work" items={detail.prior_work} />
      <Chips label="Closest companies" items={detail.closest_companies} />
    </>
  )
}
