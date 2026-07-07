"use client"

import { useMemo, useState } from "react"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  formatFunding,
  prettyLabel,
  substrateColor,
  substrateLabel,
  TRL_BADGE_CLASSES,
  trlBucket,
} from "@/lib/constants"
import type { GraphNode } from "@/lib/types"

type SortKey =
  | "type"
  | "name"
  | "substrate"
  | "trl"
  | "stage"
  | "funding"
  | "status"
  | "primitives"

interface DataTableProps {
  rows: GraphNode[]
  primitivesFor: (id: string) => string[]
  selectedId: string | null
  onSelect: (id: string) => void
}

const COLUMNS: { key: SortKey; label: string; className?: string }[] = [
  { key: "type", label: "Type", className: "w-24" },
  { key: "name", label: "Name" },
  { key: "substrate", label: "Substrate", className: "w-32" },
  { key: "trl", label: "TRL", className: "w-16 text-right" },
  { key: "stage", label: "Stage", className: "w-28" },
  { key: "funding", label: "Funding", className: "w-24 text-right" },
  { key: "status", label: "Commercialisation", className: "w-40" },
  { key: "primitives", label: "Primitives", className: "w-56" },
]

function sortValue(n: GraphNode, key: SortKey, primitivesFor: (id: string) => string[]) {
  switch (key) {
    case "type":
      return n.type
    case "name":
      return n.label.toLowerCase()
    case "substrate":
      return n.substrate_family || "zzz"
    case "trl":
      return typeof n.trl === "number" ? n.trl : -1
    case "stage":
      return n.funding_stage || ""
    case "funding":
      return typeof n.total_funding_usd_m === "number"
        ? n.total_funding_usd_m
        : -1
    case "status":
      return n.commercialisation_status || ""
    case "primitives":
      return primitivesFor(n.id).length
  }
}

export function DataTable({
  rows,
  primitivesFor,
  selectedId,
  onSelect,
}: DataTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("funding")
  const [dir, setDir] = useState<"asc" | "desc">("desc")

  const sorted = useMemo(() => {
    const copy = [...rows]
    copy.sort((a, b) => {
      const va = sortValue(a, sortKey, primitivesFor)
      const vb = sortValue(b, sortKey, primitivesFor)
      let cmp = 0
      if (typeof va === "number" && typeof vb === "number") cmp = va - vb
      else cmp = String(va).localeCompare(String(vb))
      return dir === "asc" ? cmp : -cmp
    })
    return copy
  }, [rows, sortKey, dir, primitivesFor])

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setDir(key === "name" || key === "type" ? "asc" : "desc")
    }
  }

  return (
    <div className="h-full w-full overflow-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead className="sticky top-0 z-10 bg-background">
          <tr className="border-b border-border">
            {COLUMNS.map((col) => {
              const active = sortKey === col.key
              return (
                <th
                  key={col.key}
                  className={cn(
                    "px-3 py-2 text-left font-medium text-muted-foreground",
                    col.className,
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleSort(col.key)}
                    className={cn(
                      "inline-flex items-center gap-1 hover:text-foreground",
                      active && "text-foreground",
                      col.className?.includes("text-right") &&
                        "flex-row-reverse",
                    )}
                  >
                    {col.label}
                    {active ? (
                      dir === "asc" ? (
                        <ArrowUp className="size-3" />
                      ) : (
                        <ArrowDown className="size-3" />
                      )
                    ) : (
                      <ChevronsUpDown className="size-3 opacity-40" />
                    )}
                  </button>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((n) => {
            const prims = primitivesFor(n.id)
            return (
              <tr
                key={n.id}
                onClick={() => onSelect(n.id)}
                className={cn(
                  "cursor-pointer border-b border-border/60 transition-colors hover:bg-muted/60",
                  selectedId === n.id && "bg-muted",
                )}
              >
                <td className="px-3 py-2">
                  <span className="text-[12px] capitalize text-muted-foreground">
                    {n.type}
                  </span>
                </td>
                <td className="px-3 py-2 font-medium text-foreground">
                  {n.label}
                </td>
                <td className="px-3 py-2">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-[3px]"
                      style={{
                        backgroundColor: substrateColor(n.substrate_family),
                      }}
                    />
                    <span className="text-[12px] text-muted-foreground">
                      {n.substrate_family || "n/a"}
                    </span>
                  </span>
                </td>
                <td className="px-3 py-2 text-right">
                  {n.trl === "" || n.trl == null ? (
                    <span className="text-muted-foreground">n/a</span>
                  ) : (
                    <span
                      className={cn(
                        "inline-flex rounded border px-1.5 py-0.5 text-[11px] font-semibold",
                        TRL_BADGE_CLASSES[trlBucket(n.trl)],
                      )}
                    >
                      {n.trl}
                    </span>
                  )}
                </td>
                <td className="px-3 py-2 text-[12px] text-muted-foreground">
                  {n.funding_stage ? prettyLabel(n.funding_stage) : "n/a"}
                </td>
                <td className="px-3 py-2 text-right tabular-nums text-foreground">
                  {formatFunding(n.total_funding_usd_m)}
                </td>
                <td className="px-3 py-2 text-[12px] text-muted-foreground">
                  {n.commercialisation_status
                    ? prettyLabel(n.commercialisation_status)
                    : "n/a"}
                </td>
                <td className="px-3 py-2">
                  {prims.length === 0 ? (
                    <span className="text-muted-foreground">n/a</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {prims.slice(0, 3).map((p) => (
                        <Badge key={p}>{p}</Badge>
                      ))}
                      {prims.length > 3 ? (
                        <Badge>+{prims.length - 3}</Badge>
                      ) : null}
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
          {sorted.length === 0 ? (
            <tr>
              <td
                colSpan={COLUMNS.length}
                className="px-3 py-12 text-center text-muted-foreground"
              >
                No entities match the current filters.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  )
}
