---
id: atlasxomics
name: AtlasXomics
website: atlasxomics.com
founded: 2020
area: spatial epigenomics
substrate_family: A
substrate_tags:
  - A.1
technology_platform_ids:
  - spatial-omics
technology_platform_name: "DBiT-seq deterministic barcoding in tissue (spatial ATAC-seq and CUT&Tag)"
funding_stage: unknown
total_funding_usd_m: 0
public: false
business_model: research_tools
buyer:
  - academic_lab
  - biotech
  - pharma
customer:
  - academic_lab
  - biotech
  - pharma
buyer_urgency: medium
buyer_wtp: high
sales_cycle: medium
regulatory_burden: light
tam_usd_m: 2000
new_capability: "Spatially resolved chromatin accessibility and histone-modification maps in intact tissue via deterministic microfluidic barcoding, extending spatial omics beyond RNA into the epigenome."
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - wet-lab
primary_value_chain_layer: spatial epigenomics assays, services, and consumables for research
input:
  - tissue sections
  - microfluidic barcoding chips
  - ATAC-seq and CUT&Tag reagents and antibodies
  - sequencing readouts
transformation_type: measure
output:
  - spatial chromatin-accessibility maps
  - spatial histone-modification and multi-omic tissue maps
technology_readiness_level: 8
limiting_factor: "Cost, ex vivo workflow complexity, and data-analysis burden keep spatial epigenomics in discovery rather than routine or clinical use."
commercialisation_status: commercial_early
barrier_to_entry: high
barrier_to_entry_logic: "The DBiT-seq deterministic-barcoding chemistry is exclusively licensed Yale IP from the Rong Fan lab, and few competitors offer spatial epigenomics rather than spatial RNA."
hardness: very-hard
hardness_reason: "Reading chromatin accessibility and histone marks in situ while preserving spatial coordinates, at usable resolution and reproducibility, is a harder assay than spatial transcriptomics."
last_verified: "2026-07-13"
---

## One-liner

Spatial epigenomics company commercialising Yale's DBiT-seq deterministic microfluidic barcoding to map chromatin accessibility and histone modifications in intact tissue.

## Problem

Spatial omics has focused on RNA, so the epigenome (which genes are switched on or accessible, and where) has been invisible in tissue context, and bulk or single-cell ATAC-seq discards spatial location.

## Workaround

Bulk and single-cell ATAC-seq and CUT&Tag that lose spatial context through dissociation, plus spatial transcriptomics platforms that read RNA but not chromatin state, leaving the spatial epigenome unmeasured.

## Entry wedge

Sells spatial epigenomics as the differentiated wedge: spatial ATAC-seq for chromatin accessibility and spatial CUT&Tag for histone modifications, delivered via DBiT-seq microfluidic barcoding chips, an assay service, and an analysis pipeline (with the Latch.bio platform). Starts where competitors are thin, the epigenome, rather than competing head-on in spatial RNA.

## Method

DBiT-seq (Deterministic Barcoding in Tissue) flows two orthogonal sets of DNA barcodes across a tissue section through perpendicular microfluidic channels, so each spatial pixel receives a unique barcode pair encoding its x-y position. Combined with ATAC-seq, this maps open chromatin spatially; combined with CUT&Tag antibodies, it maps histone modifications; it also extends to transcriptomics and proteomics for multi-omic tissue atlases. The method was developed in Rong Fan's lab at Yale and is exclusively licensed to AtlasXomics.

## Validated by

DBiT-seq and its spatial ATAC-seq and CUT&Tag extensions are peer-reviewed methods from the Rong Fan lab at Yale (published in Cell and Nature-family journals). 2020 Yale spin-out; technology exclusively licensed from Yale. Partnership with EpiCypher (January 2024) to co-develop ultra-efficient antibodies for spatial and single-cell CUT&Tag. Analysis pipelines and documentation are public (GitHub, Latch.bio).

## Competes with

10x Genomics (Visium, Xenium) and Vizgen (MERFISH) on the broad spatial-omics market, though those are RNA-focused; on spatial epigenomics specifically the field is thin, with academic methods and emerging players rather than a scaled incumbent. NanoString / Bruker and Stellaromics compete on adjacent spatial multi-omics.

## Complements

Antibody suppliers (EpiCypher for CUT&Tag), sequencing platforms, spatial and epigenomics analysis software (Latch.bio), spatial transcriptomics platforms (complementary RNA layer), and pharma target-discovery and biomarker programs needing epigenetic tissue context.

## Value chain position

**Downstream of:** microfluidic-barcoding chemistry, Yale DBiT-seq method IP, ATAC-seq and CUT&Tag reagents, NGS sequencing hardware.
**Upstream of:** spatial-epigenomics data analysis, multi-omic tissue atlases, and epigenetic target and biomarker discovery.

## Gaps

Funding is thin and not cleanly disclosed (aggregators show roughly $1.8M over small rounds), so total_funding_usd_m is set to 0 and funding_stage to unknown. Founding year is reported as 2020 (one source says 2019). Per-sample cost, resolution, and throughput versus spatial RNA platforms are not independently benchmarked in public materials, and the spatial-epigenomics market is early and small.

## Notes

Thin data on funding and stage: total_funding_usd_m set to 0 (only ~$1.8M in small disclosed rounds, no named priced round) and funding_stage set to unknown. Founded 2020 (Yale spin-out, New Haven), flagged uncertain against a 2019 alternative. Classed research_tools (assay, service, and consumables) with substrate_family A because it generates high-fidelity spatial epigenomic data; data_centrality is important-enabler since the data belongs to customers while the moat is the licensed DBiT-seq chemistry. Linked to the spatial-omics primitive: DBiT-seq is in-situ deterministic barcoding that reads molecular signal while preserving x-y tissue coordinates, matching the primitive's mechanism, extended here from RNA to chromatin and histone marks.

## News signals
- 2024-01: AtlasXomics and EpiCypher announced a partnership to commercialise spatial epigenomics assays, developing antibodies for spatial and single-cell CUT&Tag. (source: https://www.prnewswire.com/news-releases/atlasxomics-and-epicypher-announce-partnership-to-commercialize-spatial-epigenomics-assays-302042349.html)
