"use client"

import useSWR from "swr"
import { useMemo } from "react"
import type { EntityDetail, GraphData } from "./types"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

// On GitHub Pages the app is served under /bio-startup-space, so static data
// fetches must carry that prefix. Empty in local dev.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function useGraphData() {
  const { data: graph, isLoading: graphLoading } = useSWR<GraphData>(
    `${BASE}/data/graph.json`,
    fetcher,
  )
  const { data: index, isLoading: indexLoading } = useSWR<EntityDetail[]>(
    `${BASE}/data/index.json`,
    fetcher,
  )

  const detailById = useMemo(() => {
    const map = new Map<string, EntityDetail>()
    index?.forEach((e) => map.set(e.id, e))
    return map
  }, [index])

  const nodeById = useMemo(() => {
    const map = new Map<string, GraphData["nodes"][number]>()
    graph?.nodes.forEach((n) => map.set(n.id, n))
    return map
  }, [graph])

  return {
    graph,
    index,
    detailById,
    nodeById,
    isLoading: graphLoading || indexLoading,
  }
}
