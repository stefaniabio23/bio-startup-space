---
id: scalebio
name: Scale Biosciences
website: scale.bio
founded: 2020
area: single-cell sequencing
substrate_family: A
substrate_tags:
  - A.1
funding_stage: unknown
total_funding_usd_m: 32
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
tam_usd_m: 4000
new_capability: "Quantum Barcoding consolidates split-pool combinatorial indexing so a single instrument-free workflow profiles from 84,000 to about 4 million single cells per run."
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - wet-lab
primary_value_chain_layer: single-cell library-prep kits and consumables for research
input:
  - dissociated cell and nuclei suspensions
  - quantum barcoding plates and barcoded beads
  - sequencing readouts
transformation_type: measure
output:
  - single-cell RNA, methylation, and multi-omic expression matrices
  - massively multiplexed single-cell libraries
technology_readiness_level: 9
limiting_factor: "N/A"
commercialisation_status: commercial_early
barrier_to_entry: medium
barrier_to_entry_logic: "Patented split-pool Quantum Barcoding chemistry is defensible, but the wider combinatorial-indexing single-cell field has several credible incumbents and academic methods."
hardness: hard
hardness_reason: "Pushing per-run cell counts into the millions while keeping data quality, low doublet rates, and a simple instrument-free workflow is a demanding chemistry and QC problem."
last_verified: "2026-07-13"
---

## One-liner

Single-cell library-prep company whose QuantumScale kits use split-pool combinatorial indexing to profile from tens of thousands to about 4 million cells per run, instrument-free.

## Problem

Droplet-based single-cell methods (the dominant workflow) cap out at tens of thousands of cells per run, need dedicated microfluidic instruments, and get expensive fast, so large-scale atlas, perturbation, and population studies are cost-prohibitive.

## Workaround

Droplet partitioning platforms (10x Genomics Chromium) run many separate reactions to reach scale, plus hash-tagging and sample multiplexing bolted on to stretch throughput, all tied to a capital instrument.

## Entry wedge

Sells the QuantumScale RNA kit and companion single-cell methylation, CRISPR guide-enrichment, and ScalePlex multiplexing kits. Quantum Barcoding plates and uniquely barcoded beads consolidate multiple levels of combinatorial indexing into one workflow, cutting hands-on time by a claimed 75% and scaling to roughly 4 million cells without a dedicated instrument.

## Method

Split-pool combinatorial indexing: cells or nuclei are distributed across barcoding plates over successive rounds so each cell picks up a unique combination of barcodes, making cell identity a function of barcode combinatorics rather than physical partitioning. Quantum Barcoding folds several barcode levels into consolidated plates and beads, reducing the split-and-pool steps other combinatorial methods require. Libraries sequence on standard NGS instruments; partnerships with Illumina (BaseSpace), NVIDIA, and Ultima Genomics support the downstream stack.

## Validated by

Kits are commercially shipping across RNA, methylation, and CRISPR guide-enrichment, with cell-count options from 84,000 to about 4 million. Backed by life-sciences-tools investors ARCH Venture Partners and Tao Capital; total disclosed funding roughly $32M. QuantumScale RNA supported in Illumina BaseSpace Sequence Hub, and public analysis documentation (ScaleRna pipeline) is available.

## Competes with

10x Genomics (Chromium droplet single-cell), Parse Biosciences (Evercode split-pool combinatorial indexing, the closest direct rival), Fluent BioSciences (PIPseq), BD Rhapsody, and Singleron.

## Complements

Sequencing platforms (Illumina, Ultima Genomics), GPU analysis infrastructure (NVIDIA), spatial and single-cell analysis software, and downstream atlas, perturbation-screen, and biomarker-discovery programs that consume the expression matrices.

## Value chain position

**Downstream of:** cell and nuclei sample prep, barcoding-chemistry IP, NGS sequencing hardware.
**Upstream of:** single-cell data analysis, cell atlases, perturbation screens, and target and biomarker discovery.

## Gaps

Total funding, exact founding year, and current funding stage are not cleanly disclosed (aggregators list ~$32M and a 2020 founding; no confirmed named round). Head-to-head data-quality benchmarks against droplet and Parse split-pool methods are not independently published. The ~4M-cell figure is a kit capacity claim, not a routine validated study output.

## Notes

Thin data on funding and stage: funding_stage set to unknown and total_funding_usd_m to 32 (best-effort aggregator figure, not a confirmed round). Classed research_tools (library-prep kit and consumables razor-and-blade) with substrate_family A because the company generates high-fidelity single-cell data, and data_centrality is important-enabler since the data belongs to customers while the moat is the barcoding chemistry IP. transformation_type is measure: this is single-cell data-generation tooling.

Primitive-link candidate: single-cell combinatorial-indexing (split-pool) library prep has no primitive in the spine yet. The closest existing primitives (spatial-omics, nanopore-sensing) describe different measurement modalities, so technology_platform_ids is omitted rather than forced. Propose a "single-cell combinatorial-indexing library prep" primitive covering Scale Biosciences and Parse Biosciences before the next batch.

## News signals
- 2024-01: Scale Biosciences reported progress across its single-cell omics portfolio, including RNA, methylation, and CRISPR guide-enrichment kits. (source: https://www.businesswire.com/news/home/20240108434005/en/Scale-Biosciences-Announces-Progress-Across-Growing-Portfolio-of-Single-Cell-Omics-Solutions)
- 2023-08: Scale Biosciences continued commercial expansion with new single-cell methylation and single-cell RNA sequencing solutions. (source: https://www.businesswire.com/news/home/20230829859490/en/Scale-Biosciences-Continues-Commercial-Expansion-with-Introduction-of-New-and-Differentiated-Single-Cell-Methylation-and-Single-Cell-RNA-Sequencing-Solutions)
