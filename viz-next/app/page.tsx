"use client"

import { useCallback, useMemo, useState } from "react"
import { useGraphData } from "@/lib/use-data"
import { TopBar } from "@/components/top-bar"
import { FilterRail } from "@/components/filter-rail"
import { GraphCanvas } from "@/components/graph-canvas"
import { DataTable } from "@/components/data-table"
import { DetailPanel, type LinkedNode } from "@/components/detail-panel"
import { Legend } from "@/components/legend"
import { cn } from "@/lib/utils"
import { RELATION_TYPES } from "@/lib/types"
import type {
  EntityType,
  Filters,
  GraphNode,
  RelationType,
} from "@/lib/types"

type View = "graph" | "table"

const ALL_TYPES: EntityType[] = ["primitive", "company", "idea"]

function initialFilters(): Filters {
  return {
    search: "",
    types: new Set<EntityType>(ALL_TYPES),
    substrates: new Set<string>(),
    trl: new Set<number>(),
    businessModels: new Set<string>(),
    commercialisation: new Set<string>(),
  }
}

function toggleInSet<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set)
  if (next.has(value)) next.delete(value)
  else next.add(value)
  return next
}

export default function Page() {
  const { graph, detailById, isLoading } = useGraphData()

  const [view, setView] = useState<View>("graph")
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [relations, setRelations] = useState<Set<RelationType>>(
    () => new Set(RELATION_TYPES),
  )
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [railOpen, setRailOpen] = useState(true)
  const [relayoutKey, setRelayoutKey] = useState(0)

  // ---- filter predicate --------------------------------------------------
  const isVisible = useCallback(
    (n: GraphNode): boolean => {
      const f = filters
      if (!f.types.has(n.type)) return false

      if (f.search.trim()) {
        const q = f.search.trim().toLowerCase()
        if (!n.label.toLowerCase().includes(q)) return false
      }

      if (f.substrates.size > 0) {
        const fam = n.substrate_family || "n/a"
        if (!f.substrates.has(fam)) return false
      }

      if (f.trl.size > 0) {
        if (typeof n.trl !== "number" || !f.trl.has(n.trl)) return false
      }

      if (f.businessModels.size > 0) {
        // business model lives on the detail record
        const d = detailById.get(n.id)
        const bm = d?.business_model
        const models = Array.isArray(bm) ? bm : bm ? [bm] : []
        if (!models.some((m) => f.businessModels.has(m))) return false
      }

      if (f.commercialisation.size > 0) {
        if (!f.commercialisation.has(n.commercialisation_status)) return false
      }

      return true
    },
    [filters, detailById],
  )

  // ---- derived data ------------------------------------------------------
  const nodes = graph?.nodes ?? []
  const edges = useMemo(() => graph?.edges ?? [], [graph])

  const visibleNodes = useMemo(
    () => nodes.filter(isVisible),
    [nodes, isVisible],
  )

  const visibleEdgeCount = useMemo(() => {
    const visibleIds = new Set(visibleNodes.map((n) => n.id))
    return edges.filter(
      (e) =>
        relations.has(e.relation) &&
        visibleIds.has(e.source) &&
        visibleIds.has(e.target),
    ).length
  }, [edges, visibleNodes, relations])

  // primitives connected to a given node (for the table's Primitives column)
  const nodeMap = useMemo(() => {
    const m = new Map<string, GraphNode>()
    nodes.forEach((n) => m.set(n.id, n))
    return m
  }, [nodes])

  const primitivesFor = useCallback(
    (id: string): string[] => {
      const labels: string[] = []
      const seen = new Set<string>()
      for (const e of edges) {
        let otherId: string | null = null
        if (e.source === id) otherId = e.target
        else if (e.target === id) otherId = e.source
        if (!otherId || seen.has(otherId)) continue
        const other = nodeMap.get(otherId)
        if (other?.type === "primitive") {
          seen.add(otherId)
          labels.push(other.label)
        }
      }
      return labels
    },
    [edges, nodeMap],
  )

  // detail-panel connections for the selected node
  const selectedLinks = useMemo<LinkedNode[]>(() => {
    if (!selectedId) return []
    const out: LinkedNode[] = []
    for (const e of edges) {
      let otherId: string | null = null
      if (e.source === selectedId) otherId = e.target
      else if (e.target === selectedId) otherId = e.source
      if (!otherId) continue
      const other = nodeMap.get(otherId)
      if (!other) continue
      out.push({
        id: other.id,
        label: other.label,
        type: other.type,
        relation: e.relation,
      })
    }
    return out
  }, [selectedId, edges, nodeMap])

  const selectedDetail = selectedId ? detailById.get(selectedId) ?? null : null
  const selectedNode = selectedId ? nodeMap.get(selectedId) ?? null : null

  // ---- handlers ----------------------------------------------------------
  const patch = useCallback((update: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...update }))
  }, [])

  const handlers = useMemo(
    () => ({
      onToggleType: (t: EntityType) =>
        setFilters((p) => ({ ...p, types: toggleInSet(p.types, t) })),
      onToggleSubstrate: (s: string) =>
        setFilters((p) => ({ ...p, substrates: toggleInSet(p.substrates, s) })),
      onToggleTrl: (t: number) =>
        setFilters((p) => ({ ...p, trl: toggleInSet(p.trl, t) })),
      onToggleBusinessModel: (b: string) =>
        setFilters((p) => ({
          ...p,
          businessModels: toggleInSet(p.businessModels, b),
        })),
      onToggleCommercialisation: (c: string) =>
        setFilters((p) => ({
          ...p,
          commercialisation: toggleInSet(p.commercialisation, c),
        })),
    }),
    [],
  )

  const onToggleRelation = useCallback((r: RelationType) => {
    setRelations((prev) => toggleInSet(prev, r))
  }, [])

  const onReset = useCallback(() => {
    setFilters(initialFilters())
    setRelations(new Set(RELATION_TYPES))
  }, [])

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background text-foreground">
      <TopBar
        view={view}
        onViewChange={setView}
        nodeCount={nodes.length}
        edgeCount={visibleEdgeCount}
        visibleCount={visibleNodes.length}
        railOpen={railOpen}
        onToggleRail={() => setRailOpen((o) => !o)}
      />

      <div className="flex min-h-0 flex-1">
        {/* Filter rail */}
        <div
          className={cn(
            "shrink-0 border-r border-border transition-[width] duration-200",
            railOpen ? "w-64" : "w-0 overflow-hidden",
          )}
        >
          <FilterRail
            filters={filters}
            onSearch={(v) => patch({ search: v })}
            onReset={onReset}
            relations={relations}
            onToggleRelation={onToggleRelation}
            onRelayout={() => setRelayoutKey((k) => k + 1)}
            showGraphControls={view === "graph"}
            {...handlers}
          />
        </div>

        {/* Main area */}
        <div className="relative min-w-0 flex-1">
          {isLoading || !graph ? (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Loading data…
            </div>
          ) : view === "graph" ? (
            <>
              <GraphCanvas
                graph={graph}
                isVisible={isVisible}
                relations={relations}
                selectedId={selectedId}
                onSelect={setSelectedId}
                relayoutKey={relayoutKey}
              />
              <Legend />
            </>
          ) : (
            <DataTable
              rows={visibleNodes}
              primitivesFor={primitivesFor}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          )}

          <DetailPanel
            detail={selectedDetail}
            node={selectedNode}
            links={selectedLinks}
            onSelect={setSelectedId}
            onClose={() => setSelectedId(null)}
          />
        </div>
      </div>
    </div>
  )
}
