"use client"

import useSWR from "swr"
import { useMemo } from "react"
import type { EntityDetail, GraphData } from "./types"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useGraphData() {
  const { data: graph, isLoading: graphLoading } = useSWR<GraphData>(
    "/data/graph.json",
    fetcher,
  )
  const { data: index, isLoading: indexLoading } = useSWR<EntityDetail[]>(
    "/data/index.json",
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
