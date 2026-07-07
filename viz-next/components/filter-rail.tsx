"use client"

import { Search, X, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  BUSINESS_MODELS,
  COMMERCIALISATION_STATUSES,
  ENTITY_TYPES,
  prettyLabel,
  RELATIONS,
  SUBSTRATES,
} from "@/lib/constants"
import type { EntityType, Filters, RelationType } from "@/lib/types"

interface FilterRailProps {
  filters: Filters
  onToggleType: (t: EntityType) => void
  onToggleSubstrate: (s: string) => void
  onToggleTrl: (t: number) => void
  onToggleBusinessModel: (b: string) => void
  onToggleCommercialisation: (c: string) => void
  onSearch: (v: string) => void
  onReset: () => void
  relations: Set<RelationType>
  onToggleRelation: (r: RelationType) => void
  onRelayout: () => void
  showGraphControls: boolean
}

function SwatchDot({ color }: { color: string }) {
  return (
    <span
      className="size-2.5 shrink-0 rounded-[3px]"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  )
}

function CheckItem({
  checked,
  onChange,
  children,
}: {
  checked: boolean
  onChange: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-[13px] transition-colors hover:bg-muted",
        checked ? "text-foreground" : "text-muted-foreground",
      )}
    >
      <span
        className={cn(
          "flex size-3.5 shrink-0 items-center justify-center rounded-[4px] border",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-transparent",
        )}
      >
        {checked ? (
          <svg viewBox="0 0 12 12" className="size-3" fill="none">
            <path
              d="M2.5 6.2l2.2 2.2 4.8-4.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
      <span className="flex flex-1 items-center gap-2 truncate">{children}</span>
    </button>
  )
}

function Section({
  title,
  children,
  action,
}: {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className="border-b border-border px-3 py-3">
      <div className="mb-1.5 flex items-center justify-between px-2">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
        {action}
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  )
}

export function FilterRail({
  filters,
  onToggleType,
  onToggleSubstrate,
  onToggleTrl,
  onToggleBusinessModel,
  onToggleCommercialisation,
  onSearch,
  onReset,
  relations,
  onToggleRelation,
  onRelayout,
  showGraphControls,
}: FilterRailProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-sidebar">
      {/* Search */}
      <div className="border-b border-border p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={filters.search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search name…"
            className="h-8 w-full rounded-md border border-border bg-background pl-8 pr-8 text-[13px] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
          />
          {filters.search ? (
            <button
              type="button"
              onClick={() => onSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="size-3.5" />
            </button>
          ) : null}
        </div>
        <div className="mt-2 flex justify-end">
          <Button variant="ghost" size="xs" onClick={onReset}>
            <RotateCcw className="size-3" />
            Reset filters
          </Button>
        </div>
      </div>

      <Section title="Type">
        {ENTITY_TYPES.map((t) => (
          <CheckItem
            key={t.id}
            checked={filters.types.has(t.id)}
            onChange={() => onToggleType(t.id)}
          >
            {t.label}
          </CheckItem>
        ))}
      </Section>

      <Section title="Substrate family">
        {SUBSTRATES.map((s) => (
          <CheckItem
            key={s.id}
            checked={filters.substrates.has(s.id)}
            onChange={() => onToggleSubstrate(s.id)}
          >
            <SwatchDot color={s.color} />
            {s.label}
          </CheckItem>
        ))}
      </Section>

      <Section title="TRL">
        <div className="grid grid-cols-3 gap-1 px-1">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => {
            const active = filters.trl.has(n)
            return (
              <button
                key={n}
                type="button"
                aria-pressed={active}
                onClick={() => onToggleTrl(n)}
                className={cn(
                  "h-7 rounded-md border text-[12px] font-medium transition-colors",
                  active
                    ? "border-primary/60 bg-primary/15 text-foreground"
                    : "border-border text-muted-foreground hover:bg-muted",
                )}
              >
                {n}
              </button>
            )
          })}
        </div>
      </Section>

      <Section title="Business model">
        {BUSINESS_MODELS.map((b) => (
          <CheckItem
            key={b}
            checked={filters.businessModels.has(b)}
            onChange={() => onToggleBusinessModel(b)}
          >
            {prettyLabel(b)}
          </CheckItem>
        ))}
      </Section>

      <Section title="Commercialisation">
        {COMMERCIALISATION_STATUSES.map((c) => (
          <CheckItem
            key={c}
            checked={filters.commercialisation.has(c)}
            onChange={() => onToggleCommercialisation(c)}
          >
            {prettyLabel(c)}
          </CheckItem>
        ))}
      </Section>

      {showGraphControls ? (
        <Section
          title="Relationships"
          action={
            <Button variant="outline" size="xs" onClick={onRelayout}>
              Re-layout
            </Button>
          }
        >
          {RELATIONS.map((r) => (
            <CheckItem
              key={r.id}
              checked={relations.has(r.id)}
              onChange={() => onToggleRelation(r.id)}
            >
              <span
                className="h-0.5 w-4 shrink-0 rounded"
                style={{
                  backgroundColor: r.color,
                  opacity: r.dashed ? 0.7 : 1,
                }}
                aria-hidden
              />
              {r.label}
            </CheckItem>
          ))}
        </Section>
      ) : null}
    </div>
  )
}
