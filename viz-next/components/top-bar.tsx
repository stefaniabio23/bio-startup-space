"use client"

import { useState } from "react"
import { PanelLeft, Share2, Table2, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type View = "graph" | "table"

// The GitHub Pages build has no write API, so edit/commit controls are hidden there.
const STATIC = process.env.NEXT_PUBLIC_STATIC === "1"

function CommitButton() {
  const [working, setWorking] = useState(false)
  const [msg, setMsg] = useState("")
  const [err, setErr] = useState(false)
  async function commit() {
    setWorking(true)
    setMsg("")
    setErr(false)
    try {
      const res = await fetch("/api/git", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Edit via tech-bio-map viz" }),
      })
      const d = await res.json()
      if (!res.ok) {
        setErr(true)
        setMsg(d.error ?? "git failed")
      } else if (!d.committed) {
        setMsg("nothing to commit")
      } else if (d.pushed) {
        setMsg(`pushed ${d.commit}`)
      } else {
        setErr(true)
        setMsg(`committed ${d.commit}, push failed`)
      }
    } catch (e) {
      setErr(true)
      setMsg(String(e).slice(0, 60))
    } finally {
      setWorking(false)
      setTimeout(() => setMsg(""), 5000)
    }
  }
  return (
    <div className="flex items-center gap-2">
      {msg ? (
        <span className={cn("font-mono text-[11px]", err ? "text-red-400" : "text-emerald-400")}>
          {msg}
        </span>
      ) : null}
      <Button variant="outline" size="sm" onClick={commit} disabled={working} title="git add + commit + push">
        <GitBranch className="size-3.5" />
        {working ? "Committing..." : "Commit + push"}
      </Button>
    </div>
  )
}

interface TopBarProps {
  view: View
  onViewChange: (v: View) => void
  nodeCount: number
  edgeCount: number
  visibleCount: number
  railOpen: boolean
  onToggleRail: () => void
}

export function TopBar({
  view,
  onViewChange,
  nodeCount,
  edgeCount,
  visibleCount,
  railOpen,
  onToggleRail,
}: TopBarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border bg-background px-3">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleRail}
          aria-label={railOpen ? "Collapse filters" : "Expand filters"}
          aria-pressed={railOpen}
        >
          <PanelLeft className="size-4" />
        </Button>
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-[15px] font-semibold tracking-tight text-foreground">
            tech-bio-map
          </span>
          <span className="rounded bg-muted px-1 py-0.5 font-mono text-[10px] text-muted-foreground">
            v2
          </span>
        </div>
      </div>

      <div className="flex items-center rounded-lg border border-border bg-card p-0.5">
        <button
          type="button"
          onClick={() => onViewChange("graph")}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-3 py-1 text-[13px] font-medium transition-colors",
            view === "graph"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Share2 className="size-3.5" />
          Graph
        </button>
        <button
          type="button"
          onClick={() => onViewChange("table")}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-3 py-1 text-[13px] font-medium transition-colors",
            view === "table"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Table2 className="size-3.5" />
          Table
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 font-mono text-[12px] text-muted-foreground">
          <span>
            <span className="text-foreground">{visibleCount}</span>
            <span className="text-muted-foreground">/{nodeCount}</span> nodes
          </span>
          <span className="text-border">·</span>
          <span>
            <span className="text-foreground">{edgeCount}</span> edges
          </span>
        </div>
        {STATIC ? null : <CommitButton />}
      </div>
    </header>
  )
}
