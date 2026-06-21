---
id: recursion
name: Recursion / Valence Labs
website: recursion.com
founded: 2013
area: ai simulated biology
funding_stage: public
total_funding_usd_m: 950.7
public: true
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 200000
last_verified: "2026-06-21"
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - wet-lab
  - model
  - capital
  - IP
input:
  - high-content microscopy images of perturbed cells
  - transcriptomic profiles (gene expression after perturbation)
  - proteomic data
  - ADME chemical property data
  - de-identified patient data
transformation_type: predict
output:
  - drug target identifications
  - lead small molecule candidates
  - phenomaps (biological maps of perturbation space)
  - clinical program nominations
barrier_to_entry: very-high
barrier_to_entry_logic: $950M+ deployed to build 2.2M samples/week robotics, 36 petabytes of proprietary data, and BioHive-2 supercomputer; this cannot be replicated without equivalent capital and time.
hardness: moonshot
hardness_reason: No approved drug yet; industrialised perturbation biology has not proven it raises clinical success rates above the historical 10% baseline.
---

## One-liner

Industrialises perturbation biology using imaging, phenomics, chemistry, robotics, and ML to predict cellular responses and discover drugs.

## Problem

Biology is too complex to reason about manually, and perturbation-response data are sparse, fragmented, and expensive.

## Workaround

Manual cell assays, CRO screening, pharma high-throughput screening, academic perturbation datasets, medicinal chemistry cycles.

## Entry wedge

Rare disease and oncology programs discovered via phenotypic screening, with REC-4881 (MEK1/2 inhibitor for familial adenomatous polyposis, FAP) as the first clinical candidate to reach Phase 2. The entry logic was that rare diseases have defined patient populations, measurable phenotypic readouts, and Orphan Drug designation pathways that create faster routes to validation. Recursion entered pharma as a platform licensor (Roche/Genentech, Bayer partnerships) while advancing wholly-owned programs in parallel.

## Method

Recursion OS: automated wet labs process up to 2.2 million samples per week using high-content microscopy; cell images are embedded into mathematical space via multimodal ML foundation models; embeddings map perturbation-response relationships at scale (>36 petabytes of phenomics, transcriptomics, proteomics, ADME data); synthesis-aware generative AI designs molecules within those maps; active learning closes the loop between experimental data and model refinement. Valence Labs (research arm) develops foundation models including TxPert (transcriptional perturbation prediction) and virtual cell frameworks.

## TAM logic

The company targets the full drug discovery market ($250B+ global pharma R&D) with the argument that industrialising biology at scale reduces the cost and time of early discovery by an order of magnitude; BioHive-2 supercomputer (built with NVIDIA) provides compute infrastructure for pharmaceutical-scale modelling (recursion.com/platform).

## Validated by

Five clinical-stage programs (REC-4881 Phase 2, REC-617 Phase 1/2, REC-1245 Phase 1, REC-3565 Phase 1, REC-4539 Phase 1); Roche/Genentech partnership producing 6 Phenomaps with 1 GI oncology program initiated; Bayer partnership advancing to lead series; Valence Labs published TxPert (May 2025) and Virtual Cells framework (May 2025); 68+ publications from Valence Labs spanning 2019-2025; REC-4881 holds FDA Fast Track and US/EU Orphan Drug designation.

## Competes with

insitro (ML-driven cellular biology, private), Exscientia (acquired by Recursion 2024, now integrated), Insilico Medicine (generative biology + chemistry), Schrödinger (physics-based ML), Relay Therapeutics, and pharma AI groups (Roche, Novartis, AstraZeneca).

## Complements

NVIDIA (compute infrastructure, BioHive-2), genomic biobank providers, clinical CROs for late-stage validation, EHR data aggregators for patient data integration, and academic perturbation biology labs generating ground-truth datasets.

## Value chain position

**Downstream of:** Perturbation biology data generation
**Upstream of:** Drug development programs, clinical trials

## Gaps

Advanced technical stack; clinical translation remains the bottleneck — large-scale perturbation response does not automatically translate to clinical programs.

## Notes

Recursion acquired Exscientia in 2024, adding generative chemistry and AI-designed small molecule capability to the phenomics platform. Valence Labs is the research and foundation-model arm (not a separate company) publishing open-science AI tools (TxPert, GFlowNets, ET-Flow) to build scientific credibility and attract ML talent. The combined entity is the most vertically integrated AI drug discovery company that is publicly traded, making it a useful public market benchmark for the sector.
