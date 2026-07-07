"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { SlidersHorizontal, RotateCcw } from "lucide-react"
import type { GraphData, GraphNode, RelationType } from "@/lib/types"
import { RELATION_COLORS, substrateColor } from "@/lib/constants"

// react-force-graph-2d is a heavy, canvas/DOM-only lib. We load it on the
// client only, storing the real (forwardRef) component so the ref works.
// TODO: swap this dynamic import for a static one if SSR is ever disabled globally.

interface ForceLink {
  source: string | GraphNode
  target: string | GraphNode
  relation: RelationType
}

interface GraphCanvasProps {
  graph: GraphData
  isVisible: (node: GraphNode) => boolean
  relations: Set<RelationType>
  selectedId: string | null
  onSelect: (id: string | null) => void
  relayoutKey: number
}

function nodeRadius(n: GraphNode): number {
  if (n.type === "company") {
    const f = typeof n.total_funding_usd_m === "number" ? n.total_funding_usd_m : 0
    return Math.min(26, Math.max(5, 5 + Math.sqrt(f) * 0.75))
  }
  if (n.type === "primitive") {
    // size by research momentum (log papers) when available, else TRL
    const papers = n.momentum?.papers
    if (typeof papers === "number" && papers > 0) {
      return 8 + Math.min(24, Math.log10(papers) * 6)
    }
    const trl = typeof n.trl === "number" ? n.trl : 3
    return 6 + trl * 1.5
  }
  // idea
  return 6
}

// Cluster the graph by substrate family: each family gets an anchor on a ring,
// and a custom d3 force pulls its nodes toward that anchor.
const FAMILY_ORDER = ["A", "B", "C", "D", "E", "F"]
const CLUSTER_R = 340

function familyAnchor(fam: string | undefined) {
  const idx = FAMILY_ORDER.indexOf(fam ?? "")
  if (idx < 0) return { x: 0, y: 0 }
  const a = (idx / FAMILY_ORDER.length) * 2 * Math.PI - Math.PI / 2
  return { x: Math.cos(a) * CLUSTER_R, y: Math.sin(a) * CLUSTER_R }
}

function clusterForce(strength: number) {
  let nodes: GraphNode[] = []
  const force = (alpha: number) => {
    for (const n of nodes) {
      const a = familyAnchor(n.substrate_family)
      n.vx = (n.vx ?? 0) + (a.x - (n.x ?? 0)) * strength * alpha
      n.vy = (n.vy ?? 0) + (a.y - (n.y ?? 0)) * strength * alpha
    }
  }
  ;(force as unknown as { initialize: (n: GraphNode[]) => void }).initialize = (
    n: GraphNode[],
  ) => {
    nodes = n
  }
  return force
}

export function GraphCanvas({
  graph,
  isVisible,
  relations,
  selectedId,
  onSelect,
  relayoutKey,
}: GraphCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const fgRef = useRef<any>(null)
  const [FG, setFG] = useState<any>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [hoverId, setHoverId] = useState<string | null>(null)
  const didFit = useRef(false)

  // Live-tunable forces (Obsidian-style controls).
  const [forces, setForces] = useState({
    cluster: 0.34, // pull toward substrate anchor
    repel: 38, // charge strength (shown positive, applied negative)
    linkDistance: 24,
    linkStrength: 0.12,
  })
  const [showForces, setShowForces] = useState(false)

  useEffect(() => {
    let mounted = true
    import("react-force-graph-2d").then((m) => {
      if (mounted) setFG(() => m.default)
    })
    return () => {
      mounted = false
    }
  }, [])

  // size observer
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect
      setSize({ width: r.width, height: r.height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Stable graph data object for the simulation (force-graph mutates it).
  const data = useMemo(() => {
    return {
      nodes: graph.nodes.map((n) => ({ ...n })),
      links: graph.edges.map(
        (e): ForceLink => ({
          source: e.source,
          target: e.target,
          relation: e.relation,
        }),
      ),
    }
    // Re-create on relayoutKey so the "Re-layout" button reheats from scratch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph, relayoutKey])

  // adjacency for highlight
  const neighbors = useMemo(() => {
    const map = new Map<string, Set<string>>()
    graph.edges.forEach((e) => {
      if (!map.has(e.source)) map.set(e.source, new Set())
      if (!map.has(e.target)) map.set(e.target, new Set())
      map.get(e.source)!.add(e.target)
      map.get(e.target)!.add(e.source)
    })
    return map
  }, [graph])

  const focusId = hoverId ?? selectedId
  const focusNeighbors = focusId ? neighbors.get(focusId) : undefined

  useEffect(() => {
    didFit.current = false
  }, [relayoutKey])

  // Configure d3 forces to cluster nodes by substrate family. Re-applies when
  // the graph mounts, on Re-layout, and whenever a force slider changes.
  useEffect(() => {
    const fg = fgRef.current
    if (!fg || !FG) return
    fg.d3Force("cluster", clusterForce(forces.cluster))
    const charge = fg.d3Force("charge")
    if (charge) charge.strength(-forces.repel)
    const link = fg.d3Force("link")
    if (link) link.distance(forces.linkDistance).strength(forces.linkStrength)
    fg.d3ReheatSimulation()
  }, [FG, data, relayoutKey, forces])

  const getId = (n: string | GraphNode) => (typeof n === "string" ? n : n.id)

  if (!FG) {
    return (
      <div
        ref={containerRef}
        className="flex h-full w-full items-center justify-center bg-background text-sm text-muted-foreground"
      >
        Loading graph…
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-full w-full bg-background">
      <FG
        ref={fgRef}
        width={size.width || undefined}
        height={size.height || undefined}
        graphData={data}
        backgroundColor="rgba(0,0,0,0)"
        onRenderFramePre={(ctx: CanvasRenderingContext2D, globalScale: number) => {
          const labels: Record<string, string> = {
            A: "A · Data", B: "B · Automation", C: "C · Model",
            D: "D · Deeptech", E: "E · Biological", F: "F · Clinical",
          }
          ctx.save()
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.font = `600 ${Math.max(13, 20 / globalScale)}px ui-sans-serif, system-ui, sans-serif`
          for (const fam of FAMILY_ORDER) {
            const a = familyAnchor(fam)
            ctx.fillStyle = substrateColor(fam) + "33"
            ctx.fillText(labels[fam] ?? fam, a.x * 1.28, a.y * 1.28)
          }
          ctx.restore()
        }}
        nodeRelSize={1}
        cooldownTicks={120}
        d3VelocityDecay={0.3}
        onEngineStop={() => {
          if (!didFit.current && fgRef.current) {
            fgRef.current.zoomToFit(400, 60, (n: GraphNode) => isVisible(n))
            didFit.current = true
          }
        }}
        nodeVisibility={(n: GraphNode) => isVisible(n)}
        linkVisibility={(l: ForceLink) => {
          if (!relations.has(l.relation)) return false
          const s = data.nodes.find((x) => x.id === getId(l.source))
          const t = data.nodes.find((x) => x.id === getId(l.target))
          return !!s && !!t && isVisible(s) && isVisible(t)
        }}
        linkColor={(l: ForceLink) => {
          const base = RELATION_COLORS[l.relation] ?? "#6b7280"
          if (!focusId) return base + "55"
          const active =
            getId(l.source) === focusId || getId(l.target) === focusId
          return active ? base : base + "22"
        }}
        linkWidth={(l: ForceLink) => {
          if (!focusId) return 1
          const active =
            getId(l.source) === focusId || getId(l.target) === focusId
          return active ? 2 : 0.6
        }}
        linkLineDash={(l: ForceLink) =>
          l.relation === "references" ||
          l.relation === "closest" ||
          l.relation === "competes"
            ? [3, 3]
            : null
        }
        onNodeClick={(n: GraphNode) => {
          onSelect(n.id === selectedId ? null : n.id)
        }}
        onBackgroundClick={() => onSelect(null)}
        onNodeHover={(n: GraphNode | null) => setHoverId(n ? n.id : null)}
        nodePointerAreaPaint={(
          n: GraphNode,
          color: string,
          ctx: CanvasRenderingContext2D,
        ) => {
          const r = nodeRadius(n)
          ctx.fillStyle = color
          drawShape(ctx, n, r)
        }}
        nodeCanvasObject={(
          n: GraphNode,
          ctx: CanvasRenderingContext2D,
          globalScale: number,
        ) => {
          const r = nodeRadius(n)
          const color = substrateColor(n.substrate_family)
          const isFocus = focusId === n.id
          const isNeighbor = focusNeighbors?.has(n.id)
          const dim = focusId ? !isFocus && !isNeighbor : false

          ctx.globalAlpha = dim ? 0.18 : 1
          ctx.fillStyle = color
          drawShape(ctx, n, r)

          if (isFocus) {
            ctx.lineWidth = 2 / globalScale
            ctx.strokeStyle = "#ffffff"
            ctx.stroke()
          } else if (!dim) {
            ctx.lineWidth = 0.5 / globalScale
            ctx.strokeStyle = "rgba(0,0,0,0.35)"
            ctx.stroke()
          }

          // labels: draw for larger nodes, focus, or when zoomed in
          const showLabel =
            isFocus ||
            isNeighbor ||
            r * globalScale > 9 ||
            globalScale > 2.2
          if (showLabel && !dim && n.label) {
            const fontSize = Math.max(9, 11 / globalScale)
            ctx.font = `${fontSize}px ui-sans-serif, system-ui, sans-serif`
            ctx.textAlign = "center"
            ctx.textBaseline = "top"
            ctx.fillStyle = isFocus
              ? "rgba(255,255,255,0.95)"
              : "rgba(226,228,232,0.72)"
            const label =
              n.label.length > 26 ? n.label.slice(0, 24) + "…" : n.label
            ctx.fillText(label, n.x ?? 0, (n.y ?? 0) + r + 2 / globalScale)
          }
          ctx.globalAlpha = 1
        }}
      />

      {/* Obsidian-style force controls */}
      <div className="absolute right-3 top-3 z-10">
        {showForces ? (
          <div className="w-56 rounded-lg border border-border bg-card/95 p-3 shadow-lg backdrop-blur">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Forces
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    setForces({ cluster: 0.34, repel: 38, linkDistance: 24, linkStrength: 0.12 })
                  }
                  className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                  title="Reset forces"
                >
                  <RotateCcw className="size-3.5" />
                </button>
                <button
                  onClick={() => setShowForces(false)}
                  className="rounded px-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Done
                </button>
              </div>
            </div>
            <ForceSlider
              label="Cluster by substrate" value={forces.cluster} min={0} max={1} step={0.02}
              onChange={(v) => setForces((f) => ({ ...f, cluster: v }))}
            />
            <ForceSlider
              label="Repel" value={forces.repel} min={5} max={140} step={1}
              onChange={(v) => setForces((f) => ({ ...f, repel: v }))}
            />
            <ForceSlider
              label="Link distance" value={forces.linkDistance} min={6} max={140} step={1}
              onChange={(v) => setForces((f) => ({ ...f, linkDistance: v }))}
            />
            <ForceSlider
              label="Link strength" value={forces.linkStrength} min={0} max={1} step={0.02}
              onChange={(v) => setForces((f) => ({ ...f, linkStrength: v }))}
            />
          </div>
        ) : (
          <button
            onClick={() => setShowForces(true)}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card/95 px-2.5 py-1.5 text-xs text-muted-foreground shadow-lg backdrop-blur hover:text-foreground"
            title="Force controls"
          >
            <SlidersHorizontal className="size-3.5" />
            Forces
          </button>
        )}
      </div>
    </div>
  )
}

function ForceSlider({
  label, value, min, max, step, onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <label className="mb-2.5 block">
      <div className="mb-1 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">{label}</span>
        <span className="tabular-nums text-foreground/70">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-muted accent-foreground"
      />
    </label>
  )
}

/** Draw the type-specific shape centered on the node's position. Path only. */
function drawShape(
  ctx: CanvasRenderingContext2D,
  n: GraphNode,
  r: number,
) {
  const x = n.x ?? 0
  const y = n.y ?? 0
  ctx.beginPath()
  if (n.type === "company") {
    ctx.arc(x, y, r, 0, 2 * Math.PI)
  } else if (n.type === "primitive") {
    // diamond
    ctx.moveTo(x, y - r)
    ctx.lineTo(x + r, y)
    ctx.lineTo(x, y + r)
    ctx.lineTo(x - r, y)
    ctx.closePath()
  } else {
    // idea → square
    const s = r * 1.7
    ctx.rect(x - s / 2, y - s / 2, s, s)
  }
  ctx.fill()
}
