---
id: curio-bioscience
name: Curio Bioscience
website: curiobioscience.com
founded: 2021
area: spatial transcriptomics
substrate_family: A
substrate_tags:
  - A.1
technology_platform_ids:
  - spatial-omics
technology_platform_name: "Curio Seeker (Slide-seq) and Curio Trekker (Slide-tags)"
funding_stage: acquired
total_funding_usd_m: 0
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
tam_usd_m: 4000
new_capability: "Whole-transcriptome spatial mapping at near-single-cell bead resolution from Slide-seq, plus Slide-tags that adds spatial coordinates to standard single-cell and single-nucleus data."
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - wet-lab
primary_value_chain_layer: spatial transcriptomics kits and consumables for research
input:
  - fresh-frozen tissue sections
  - barcoded bead arrays and probe sets
  - single-cell and single-nucleus suspensions
  - sequencing readouts
transformation_type: measure
output:
  - whole-transcriptome spatial expression maps
  - spatially resolved single-cell and single-nucleus data
technology_readiness_level: 9
limiting_factor: "N/A"
commercialisation_status: acquired
barrier_to_entry: medium
barrier_to_entry_logic: "Broad-licensed Slide-seq and Slide-tags chemistry is defensible IP, but well-funded 2D spatial incumbents (10x, Vizgen, NanoString) hold the scaled research market."
hardness: hard
hardness_reason: "Delivering whole-transcriptome capture at near-single-cell resolution on bead arrays, with clean tissue permeabilisation and reproducible capture efficiency, is a demanding wet-lab problem."
last_verified: "2026-07-13"
---

## One-liner

Spatial transcriptomics company commercialising Broad-developed Slide-seq (Curio Seeker) and Slide-tags (Curio Trekker) as kits, now part of Takara Bio.

## Problem

Dissociating tissue for single-cell sequencing discards where each cell sat, and early array-based spatial methods read too coarse a spot to resolve individual cells across the whole transcriptome.

## Workaround

Spot-based spatial arrays (10x Visium) at multi-cell resolution, imaging-based targeted-panel methods (Xenium, MERFISH) that read hundreds to thousands of genes rather than the whole transcriptome, and single-cell dissociation that throws away spatial context.

## Entry wedge

Sells Curio Seeker, a Slide-seq-based kit that captures the whole transcriptome on barcoded bead arrays at near-single-cell resolution (a 10x10 kit captures nearly one million spatial transcriptomes), then added Curio Trekker, a Slide-tags kit that stamps spatial coordinates onto conventional single-cell and single-nucleus workflows. Both are licensed from the Broad Institute where the methods were developed.

## Method

Curio Seeker uses Slide-seq: a densely packed array of spatially barcoded beads captures mRNA released from an overlaid fresh-frozen tissue section, so each transcript inherits the bead's known x-y position, reconstructing a whole-transcriptome spatial map. Curio Trekker uses Slide-tags: spatial barcodes are transferred into nuclei within an intact section, so cells or nuclei carry their tissue coordinates through a standard single-cell or single-nucleus sequencing run. Slide-tags was published in Nature (December 2023) from the Fei Chen and Evan Macosko labs at the Broad.

## Validated by

Slide-seq and Slide-tags are peer-reviewed Broad methods, Slide-tags in Nature (2023). Academic co-founders Evan Macosko (MGH), Fei Chen (Harvard), and Samuel Rodriques (Francis Crick Institute). Curio Seeker adopted across neuroscience, developmental biology, immunology, and oncology, and offered through core facilities (for example the University of Minnesota Genomics Center). Acquired by Takara Bio USA Holdings in January 2025.

## Competes with

10x Genomics (Visium, Xenium), Vizgen (MERFISH), NanoString / Bruker (CosMx, GeoMx), and Stellaromics (3D spatial multi-omics), with Slide-seq differentiating on whole-transcriptome, near-single-cell bead resolution.

## Complements

Single-cell library-prep platforms (Slide-tags rides on standard single-cell workflows), sequencing platforms, spatial-analysis software, digital-pathology pipelines, and pharma target and biomarker programs needing tissue context. As a Takara Bio unit it complements Takara's single-cell omics portfolio.

## Value chain position

**Downstream of:** barcoded-bead and Slide-tags chemistry, Broad Institute method IP, NGS sequencing hardware.
**Upstream of:** spatial data analysis, cell atlases, tissue-architecture and microenvironment studies, and target and biomarker discovery.

## Gaps

Standalone funding history is not cleanly disclosed (aggregators show undisclosed rounds; acquisition price undisclosed), so total_funding_usd_m is set to 0. Per-sample cost, capture efficiency, and throughput versus imaging-based competitors are not independently benchmarked in the public materials. Post-acquisition product roadmap under Takara is not yet detailed.

## Notes

Thin data on funding: total_funding_usd_m set to 0 (undisclosed) and funding_stage set to acquired following the January 2025 Takara Bio USA acquisition (price undisclosed), commercialisation_status acquired. Founded 2021 (Palo Alto); founder set includes academic co-founders Macosko, Chen, and Rodriques plus business founders. Classed device_consumables (kit and consumables model) with substrate_family A because it generates high-fidelity spatial data; data_centrality is important-enabler since the data belongs to customers while the moat is the licensed chemistry. Linked to the spatial-omics primitive: Slide-seq is in-situ barcoding chemistry that reads RNA while preserving x-y tissue coordinates, matching the primitive's mechanism.

## News signals
- 2025-01: Takara Bio USA Holdings acquired Curio Bioscience, adding spatial biology to its single-cell omics portfolio. (source: https://www.businesswire.com/news/home/20250114931952/en/Takara-Bio-USA-Holdings-Inc.-Announces-the-Acquisition-of-Curio-Bioscience-Adding-Spatial-Biology-to-Its-Broad-Portfolio-of-Single-Cell-Omics-Solutions)
- 2024-10: Curio Bioscience launched the Curio Trekker single-cell spatial mapping kit based on the Broad-developed Slide-tags method. (source: https://www.businesswire.com/news/home/20241008842253/en/Curio-Bioscience-Launches-Trekker-Single-Cell-Spatial-Mapping-Kit)
- 2023-09: Curio Bioscience launched the Curio Seeker 10x10 kit to capture nearly one million spatial transcriptomes simultaneously. (source: https://www.businesswire.com/news/home/20230926700430/en/Curio-Bioscience-Launches-New-Curio-Seeker-10x10-Kit-to-Enable-the-Simultaneous-Capture-of-Nearly-One-Million-Spatial-Transcriptomes)
