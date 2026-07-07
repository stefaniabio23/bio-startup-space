export type EntityType = "primitive" | "company" | "idea" | "prior_work"

export type SubstrateFamily = "A" | "B" | "C" | "D" | "E" | "F" | ""

export type RelationType =
  | "uses"
  | "references"
  | "closest"
  | "competes"
  | "complements"
  | "related"
  | "evidence"

/** Commercialization scan (papers + patents) written by primitive-scanner */
export interface Scan {
  bucket?: string
  paper_cagr_pct?: number
  mean_fwci?: number
  industry_share?: number
  patent_total?: number
  patent_cagr_pct?: number
  company_share?: number
  as_of?: string
}

/** Bibliometric momentum snapshot on a primitive */
export interface Momentum {
  papers?: number
  cagr_pct?: number
  fwci?: number
  industry_share_pct?: number
  citation_mass?: number
  on_topic_n?: number
  buildable_whitespace?: string
  confidence?: string
  status?: string
  as_of?: string
}

/** A node as stored in graph.json */
export interface GraphNode {
  id: string
  type: EntityType
  label: string
  substrate_family: SubstrateFamily
  substrate_tags: string[]
  trl: number | ""
  trl_min: number | ""
  trl_max: number | ""
  capability_count: number
  funding_stage: string
  total_funding_usd_m: number | ""
  commercialisation_status: string
  moat: string[]
  momentum?: Momentum
  scan?: Scan
  // populated at runtime by force-graph
  x?: number
  y?: number
  vx?: number
  vy?: number
}

export interface GraphEdge {
  source: string
  target: string
  relation: RelationType
}

export interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

/** A capability entry on a primitive */
export interface Capability {
  capability: string
  what_it_could_unlock?: string
  mechanism?: string
  technology_readiness_level?: number
  translational_gap?: string
  closest_companies?: string[]
  venture_shape?: string
}

/** Full detail record from index.json. Fields vary by type. */
export interface EntityDetail {
  id: string
  type: EntityType
  name?: string
  // idea uses `idea` as its title / description
  idea?: string
  // prior_work fields
  title?: string
  authors?: string[]
  year?: number
  venue?: string
  doi?: string
  url?: string
  citations?: number
  hypothesis?: string
  methods?: string
  what_it_proves?: string
  next_question?: string
  related_works?: string[]
  label?: string
  website?: string
  founded?: number
  area?: string
  aliases?: string[]
  substrate_family?: SubstrateFamily
  substrate_tags?: string[]

  // shared
  new_capability?: string
  technology_readiness_level?: number | ""
  commercialisation_status?: string
  translational_gap?: string
  notes?: string
  last_verified?: string
  moat?: string[]
  business_model?: string | string[]
  buyer?: string[]
  customer?: string[]
  tam_usd_m?: number
  closest_companies?: string[]
  closest_labs?: string[]

  // company
  funding_stage?: string
  total_funding_usd_m?: number | ""
  public?: boolean
  technology_platform_name?: string
  technology_platform_ids?: string[]
  primary_value_chain_layer?: string
  input?: string[]
  output?: string[]
  transformation_type?: string
  limiting_factor?: string
  barrier_to_entry?: string
  barrier_to_entry_logic?: string
  hardness?: string
  hardness_reason?: string
  data_centrality?: string
  data_ownership?: string[]
  buyer_urgency?: string
  buyer_wtp?: string
  sales_cycle?: string
  regulatory_burden?: string

  // primitive
  enabled_by?: string
  mechanism?: string
  what_it_could_unlock?: string
  what_needs_to_happen?: string
  capabilities?: Capability[]
  momentum?: Momentum
  scan?: Scan
  use_cases?: string[]
  evidence_level?: string
  regulatory_complexity?: string
  capex_intensity?: string
  defensibility?: string

  // idea
  target_user?: string
  first_use_case?: string
  why_now?: string
  prior_work?: string[]
  differentiation?: string
  unfair_advantage_needed?: string
  validation_plan?: string
  three_month_mvp?: string
  technical_risk?: string
  regulatory_risk?: string
  commercial_risk?: string
  founder_fit?: string
  cambridge_route_fit?: string
  ef_route_fit?: string
  overall_score?: number
  requires_hardware?: boolean
}

export interface Filters {
  search: string
  types: Set<EntityType>
  substrates: Set<string> // "A".."F" and "n/a"
  trl: Set<number>
  businessModels: Set<string>
  commercialisation: Set<string>
}

export const RELATION_TYPES: RelationType[] = [
  "uses",
  "references",
  "closest",
  "competes",
  "complements",
  "related",
  "evidence",
]
