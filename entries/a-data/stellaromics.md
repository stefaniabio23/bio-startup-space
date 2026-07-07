---
id: stellaromics
name: Stellaromics
website: stellaromics.com
founded: 2022
area: spatial omics
substrate_family: A
substrate_tags:
  - A.1
technology_platform_ids:
  - spatial-omics
technology_platform_name: Pyxa 3D spatial multi-omics platform (STARmap / RIBOmap)
funding_stage: series-b
total_funding_usd_m: 105
public: false
business_model: device_consumables
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
tam_usd_m: 5000
new_capability: The first true 3D spatial multi-omics profiling of gene expression at subcellular resolution in thick, intact tissue rather than thin 2D sections.
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - wet-lab
  - founder-brand
primary_value_chain_layer: 3D spatial multi-omics instruments and consumables for research
input:
  - thick intact tissue sections
  - gene-panel probe sets
  - imaging and sequencing readouts
transformation_type: measure
output:
  - 3D subcellular spatial expression maps
  - multi-omic tissue-architecture data
technology_readiness_level: 8
limiting_factor: Instruments and reagents are expensive and workflows are slow, and there is no reimbursed clinical assay, so use stays in discovery rather than routine diagnostics.
commercialisation_status: commercial_early
barrier_to_entry: high
barrier_to_entry_logic: The STARmap / RIBOmap in-situ chemistry for thick-tissue 3D profiling is patented lab IP from the Wang and Deisseroth groups and hard to replicate.
hardness: very-hard
hardness_reason: Reading the transcriptome in situ across 100-micron-plus tissue volumes at subcellular resolution is a demanding chemistry, imaging, and reconstruction problem.
last_verified: "2026-07-06"
---

## One-liner

Commercializes the Pyxa platform for true 3D spatial multi-omics, profiling gene expression at subcellular resolution in thick, intact tissue rather than thin 2D slices.

## Problem

Standard spatial transcriptomics reads thin 2D sections, so it loses the true three-dimensional architecture of tissue: which cells sit next to which across a real volume.

## Workaround

2D spatial transcriptomics (Visium, Xenium, MERFISH), serial sectioning with computational restacking, and single-cell dissociation that discards spatial context entirely.

## Entry wedge

3D thick-tissue profiling. Pyxa reads hundreds to thousands of genes at subcellular resolution in tissue slices 100 microns and thicker (a claimed 10 to 20x thickness gain over 2D methods), sold to discovery labs in neuroscience, oncology, and immunology through an early-access program.

## Method

Built on STARmap and RIBOmap in-situ barcoding chemistry: molecular probes tag transcripts in intact tissue, imaging reads each molecule's identity and 3D location, and software reconstructs a spatial map, with an automated workflow. Spun out of the labs of Xiao Wang (MIT / Broad) and Karl Deisseroth (Stanford); CEO Todd Dickinson.

## Validated by

Underlying STARmap / RIBOmap methods published by the Wang and Deisseroth labs in Science and Nature-family journals. Raised ~$105M total: a $25M Series A (November 2023) and an $80M Series B (February 2025, led by Catalyst4 with Stanford University Ventures). Pyxa debuted at AGBT in February 2025; early access reported fully subscribed.

## Competes with

10x Genomics (Xenium, Visium), Vizgen (MERFISH), NanoString / Bruker (CosMx, GeoMx), and Akoya, largely 2D incumbents that Stellaromics differentiates against on true 3D depth.

## Complements

Spatial-analysis software, single-cell sequencing platforms, digital-pathology pipelines, and pharma target-discovery and biomarker programs needing intact tissue architecture.

## Value chain position

**Downstream of:** in-situ barcoding chemistry, imaging hardware, probe-panel design
**Upstream of:** discovery biology, target and biomarker discovery, spatial-analysis and visualization software

## Gaps

No named peer-reviewed publication in the launch materials, and the "$105M" total is a sum of the A and B rounds rather than an officially stated cumulative figure. Commercial shipment timing and per-sample cost and throughput are still early.

## Notes

Founded ~2022 (exact incorporation year not cleanly disclosed; emerged from stealth with the Series A in November 2023). Joint Deisseroth and Xiao Wang spin-out, corrected from a sole-founder framing. Classed device_consumables (instrument plus consumables plus software razor-and-blade). data_centrality is important-enabler because the generated data belongs to customers; the company's moat is the chemistry IP.

## News signals
- 2025-02: Raised an $80M Series B and debuted the Pyxa 3D spatial-biology platform at AGBT. (source: https://www.prnewswire.com/news-releases/stellaromics-secures-significant-funding-to-advance-3d-spatial-biology-302373136.html)
- 2023-11: Secured a $25M Series A to advance 3D spatial multi-omic profiling. (source: https://www.prnewswire.com/news-releases/stellaromics-secures-25-million-in-series-a-funding-to-advance-3d-spatial-multi-omic-profiling-301975277.html)
