---
id: spatial-omics
name: Spatial omics
aliases:
  - spatial transcriptomics
  - spatial biology
  - 3D spatial omics
  - in-situ sequencing
substrate_family: A
substrate_tags:
  - A.1
  - D.2
enabled_by: In-situ barcoding chemistry (STARmap/RIBOmap, MERFISH, in-situ sequencing) plus imaging and probe hybridisation that read RNA and protein while preserving x-y-z tissue coordinates
mechanism: Molecular probes tag transcripts and proteins in intact tissue, then imaging or sequencing reads each molecule's identity and physical location, reconstructing a spatial map of cell state and architecture
new_capability: Reads the transcriptome or proteome of every cell without dissociating the tissue, keeping the wiring diagram of who sits next to whom, now extending into thick 3D volumes
what_it_could_unlock: Routine spatial diagnostics that map tumour response and immune microenvironment structure directly from a biopsy
capabilities:
- capability: High-plex tissue profiling
  what_it_could_unlock: Tumour immune maps, response prediction, target discovery
  mechanism: RNA and protein are measured while retaining tissue coordinates
  technology_readiness_level: 9
  translational_gap: Cost, data complexity, ex vivo workflow
  closest_companies:
  - Stellaromics
- capability: Clinical companion diagnostics
  what_it_could_unlock: Spatial pathology tests for oncology and inflammation
  mechanism: Spatial molecular signatures are turned into diagnostic classifiers
  technology_readiness_level: 6
  translational_gap: Standardisation, reimbursement, clinical evidence
- capability: AI tissue atlas generation
  what_it_could_unlock: Foundation models for pathology and drug discovery
  mechanism: Spatial datasets train models linking morphology, cell state and outcome
  technology_readiness_level: 5
  translational_gap: Dataset scale, annotation, privacy, generalisation
use_cases:
  - Tumour-response and resistance maps
  - Immune microenvironment and tumour-architecture diagnostics
  - Target and biomarker discovery in intact tissue
  - Neuroscience atlases of cell-type organisation
technology_readiness_level: 8
evidence_level: real_world_proven
translational_gap: Instruments and reagents are expensive, workflows are ex vivo and slow, and there is no reimbursed clinical assay, so the data stays in discovery rather than routine diagnostics; 3D thick-tissue multi-omics is still early access
what_needs_to_happen: Lower per-sample cost, faster turnaround, standardised panels, and a regulatory-cleared clinical assay with a reimbursement pathway
closest_companies:
  - Stellaromics
  - 10x Genomics
  - Vizgen
  - NanoString (Bruker)
related_primitives:
- multimodal-clinical-data-platform
- ai-medical-imaging
- nanopore-sensing
- biology-foundation-models
closest_labs:
  - Xiao Wang Lab (MIT/Broad)
  - Karl Deisseroth Lab (Stanford)
commercialisation_status: commercial_scaled
regulatory_complexity: medium
capex_intensity: high
defensibility: high
notes: 2D platforms (10x Xenium/Visium, Vizgen MERSCOPE) are commercially scaled research tools; Stellaromics Pyxa pushes to true 3D multi-omics in thick tissue, initial commercial shipments late 2025, ~$105M raised.
momentum:
  papers: 17194
  cagr_pct: 107.1
  fwci: 20.54
  industry_share_pct: 8.1
  citation_mass: 4458.0
  on_topic_n: 111
  buildable_whitespace: 8/25
  confidence: high
  status: commercialized
  as_of: 2026-07
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 89.0
  mean_fwci: 20.24
  industry_share: 0.059
  patent_total: 1481
  patent_cagr_pct: 70.6
  company_share: 0.2
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Spatial omics keeps the tissue intact and reads molecules where they sit. Probe-based methods (MERFISH, in-situ sequencing, STARmap/RIBOmap) hybridise barcoded probes to RNA or protein, then imaging cycles decode each molecule's identity and x-y-z position. The output is a map: each cell's expression profile tagged with its physical coordinates and its neighbours. The frontier is moving from 2D sections to reading whole thick tissue volumes in 3D, which captures architecture that a single thin slice loses.

## What it unlocks

Dissociating tissue for single-cell sequencing throws away the spatial wiring diagram. Spatial omics recovers it, so you can see how immune cells arrange around a tumour, where a therapy is acting, and which cell neighbourhoods drive resistance. Applications span tumour-response and immune-microenvironment maps, biomarker and target discovery, and large cell-type atlases in neuroscience. 3D multi-omics adds the ability to trace structures (vasculature, invasion fronts) through a volume rather than inferring them from serial 2D sections.

## Translational gap

The honest TRL is 8: 2D platforms are commercial and heavily used, so as a research tool the primitive is real-world proven, but 3D thick-tissue multi-omics is only reaching early-access shipments. The block to clinical use is economics and workflow: instruments and reagents are expensive, runs are ex vivo and slow, panels are not standardised, and there is no reimbursed clinical assay. Productising into routine diagnostics needs cheaper, faster, standardised assays plus regulatory clearance and a reimbursement path.

## Notes

Stellaromics (Pyxa, STARmap/RIBOmap lineage from the Wang and Deisseroth labs) is the clearest 3D play; 10x Genomics and Vizgen dominate scaled 2D. substrate_family A (data) with a D.2 diagnostic tag because the near-term product wedge is diagnostic instrumentation.
