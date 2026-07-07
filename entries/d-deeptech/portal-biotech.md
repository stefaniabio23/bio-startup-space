---
id: portal-biotech
name: Portal Biotech
website: portalbiotech.com
founded: 2021
area: nanopore protein sequencing
substrate_family: D
substrate_tags:
  - D.2
  - A.1
technology_platform_ids:
  - nanopore-sensing
technology_platform_name: Nanopore single-molecule protein sequencing
funding_stage: series-a
total_funding_usd_m: 40
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
tam_usd_m: 21000
new_capability: Full-length single-molecule protein sequencing on a nanopore device, reading intact proteins and post-translational modifications without mass spectrometry.
data_centrality: important-enabler
data_ownership:
  - proprietary
  - customer-generated
moat:
  - IP
  - wet-lab
  - model
primary_value_chain_layer: Protein sequencing instrument and consumables provider
input:
  - intact protein samples
  - peptides
transformation_type: measure
output:
  - full-length protein sequence
  - post-translational modification calls
  - single-molecule protein identifications
technology_readiness_level: 5
limiting_factor: Achieving robust single-amino-acid resolution and reproducible full-length translocation across diverse proteomes at scale.
commercialisation_status: pilot_deployment
barrier_to_entry: very-high
barrier_to_entry_logic: Controlling unidirectional translocation of intact proteins through a nanopore is an unsolved biophysics problem; Maglia-lab IP and AI readout create a deep moat.
hardness: moonshot
hardness_reason: Full-length single-molecule protein sequencing has been called the "holy grail" of proteomics and has never been delivered as a product.
last_verified: "2026-07-06"
---

## One-liner

Nanopore platform for full-length, single-molecule protein sequencing, reading intact proteins and modifications on-site at a fraction of mass-spec cost.

## Problem

Proteins cannot be amplified like DNA, and mass spectrometry misses low-abundance proteins, full-length isoforms, and the combinatorial detail of post-translational modifications. No portable, single-molecule protein sequencer exists.

## Workaround

Mass spectrometry proteomics, affinity-based assays (antibodies, Olink, SomaScan), and Edman degradation, all of which are indirect, low-throughput on modifications, or blind to full-length structure.

## Entry wedge

Full-length reads on a nanopore device positioned as the "world's first" single-molecule protein sequencer, targeting drug discovery, precision medicine, and biosecurity where PTM and isoform detail is decisive and mass spec is a bottleneck.

## Method

Engineered protein nanopores translocate intact proteins in single-file, unidirectional fashion; ionic current signatures are decoded by AI models into amino-acid sequence and post-translational modifications. Built on protein-pore control developed in Giovanni Maglia's lab at the University of Groningen.

## Validated by

USD 35M (EUR 30M) Series A closed June 2025, co-led by NATO Innovation Fund and Earlybird, one of Europe's largest life-science-tools rounds. University of Groningen spin-out founded by Prof. Giovanni Maglia. Underlying full-length protein translocation and PTM-reading work published in peer-reviewed venues.

## Competes with

UNOMR (nanopore protein modification analysis), Genopore (optical nanopore protein identification), Quantum-Si (single-molecule protein sequencing by fluorescence), Nautilus Biosciences (single-molecule proteomics), and mass-spec incumbents (Thermo, Bruker).

## Complements

Oxford Nanopore (platform and pore-chemistry lineage), proteomics sample-prep vendors, and pharma discovery and diagnostics teams needing PTM-resolved proteoforms.

## Value chain position

**Downstream of:** protein-pore and enzyme engineering, protein sample prep, ASIC sensor arrays
**Upstream of:** proteomics analysis, biomarker discovery, precision-medicine diagnostics, biosecurity screening

## Gaps

Product is pre-commercial; whether the platform reaches single-amino-acid accuracy and full-proteome coverage at throughput and cost that beats mass spec is unproven.

## Notes

One of two credible European nanopore-protein-sequencing spin-outs (with UNOMR). Deep-tech moonshot: the physics of threading a folded, charged, non-uniform polymer through a pore is far harder than DNA. London HQ with Groningen roots. Watch for first early-adopter data readouts from pharma partners.

## News signals
- 2025-06: Raised USD 35M Series A co-led by NATO Innovation Fund and Earlybird to build the first full-length single-molecule protein sequencer. (source: https://www.globenewswire.com/news-release/2025/06/30/3107673/0/en/Portal-Biotech-Raises-35-Million-Series-A-Leveraging-AI-to-Deliver-the-World-s-First-Full-Length-Single-Molecule-Protein-Sequencer.html)
