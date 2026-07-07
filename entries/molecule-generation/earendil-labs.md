---
id: earendil-labs
name: Earendil Labs
website: earendil.bio
founded: 2023
area: AI antibody and bispecific design
funding_stage: series-b
total_funding_usd_m: 787
public: false
business_model: hybrid
buyer:
 - pharma
 - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 40000
data_centrality: core-moat
data_ownership:
 - proprietary
 - generated-in-house
 - partner-supplied
moat:
 - model
 - IP
 - clinical-evidence
 - wet-lab
 - data
primary_value_chain_layer: discovery
input:
 - protein sequences
 - antibody-antigen interaction data
 - structural biology data
 - immune library screening outputs
 - single B cell screening data
transformation_type: generate
output:
 - de novo antibody sequences with optimized biophysical properties
 - bispecific and multispecific antibody candidates
 - ADC, TCE, and fusion protein designs
 - partnered programs (Sanofi licensing deals)
barrier_to_entry: high
barrier_to_entry_logic: Integrated AI+wet-lab closed loop generates proprietary training data with each iteration; early Sanofi deals create milestone-funded pipeline depth that pure-software competitors cannot match, and the founder (Jian Peng, ex-UIUC professor) brings a rare combination of foundational AI and structural biology credibility.
hardness: very-hard
hardness_reason: Demonstrating that AI-designed antibodies translate to clinical efficacy at a rate materially better than conventional discovery, the field has not yet produced an AI-native approved antibody.
substrate_family: C
substrate_tags:
- C.1
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "Closed-loop protein AI plus wet-lab designs bispecific and multispecific antibodies, feeding an owned clinical-stage immunology and oncology pipeline."
technology_readiness_level: 7
commercialisation_status: regulatory_review
customer:
  - pharma
  - biotech
limiting_factor: "No approved drug; clinical efficacy of AI-designed antibodies is still unproven in humans."
last_verified: "2026-07-07"
---

## One-liner

Earendil Labs builds AI platforms for antibody and bispecific design and applies them to discover and develop its own drugs, with an initial focus on immunology and oncology.

## Problem

Conventional antibody discovery is slow and hit-rate-limited: immune library screening and hybridoma campaigns test a small fraction of the theoretically accessible sequence space. Bispecific and multispecific antibodies add combinatorial complexity that manual processes cannot efficiently navigate. The most valuable disease targets often require multispecific engagement to achieve selectivity or dual-pathway blockade.

## Workaround

CRO-based antibody discovery (Abzena, WuXi Biologics), in-house hybridoma platforms, phage display, yeast display. Bispecific design relies on structural reasoning by expert teams and iterative experimental cycles, typically taking 2-4 years to reach a clinical candidate.

## Entry wedge

Foundational Protein AI Platform covering sequence, structure, and interaction modeling, combined with a high-throughput biology lab for closed-loop validation. First external signal: April 2025 worldwide exclusive license agreement with Sanofi covering HXN-1002 (TL1A/a4b7 bsAb) and HXN-1003 (TL1A/IL23p19 bsAb) for IBD; $125M upfront + up to $1.72B milestones. January 2026 broader Sanofi collaboration: $160M upfront + up to $2.56B milestones.

## Method

Three-layer platform: (1) Foundational Protein AI, property prediction across biophysics, immunogenicity, half-life, and binding affinity; (2) Structure Modeling, CDR prediction, mutational modeling, de novo library design; (3) High-Throughput Biology, human naive and immune libraries, AI-designed library screening, AI-guided optimization with closed-loop retraining. Ambrosia-equivalent design cycle produces candidates that feed directly into experimental validation.

## TAM logic

Biologics drug discovery market is $15B+ annually; the multispecific antibody market for oncology and autoimmune alone is projected at $25B+ by 2030. Earendil captures value through both platform partnerships (discovery fees + milestones) and its own pipeline programs. (Source: earendil.bio/pipeline; Sanofi press releases)

## Validated by

$787M total financing closed March 2026 (Dimension Capital, DST Global, INCE Capital, Sanofi, Pfizer/Hillhouse Biotech Development Fund). Sanofi deal April 2025: $125M upfront. Sanofi broader collaboration January 2026: $160M upfront. Phase 1 initiated July 2025 for HXN-1001 (anti-TL1A, IBD). Pipeline spans 12+ programs across IBD, asthma, atopic dermatitis, and oncology (colorectal cancer, SCLC). Preclinical data presented at Pulmonary Fibrosis Foundation Summit for HXN-1041 (IL-11 blocking).

## Competes with

Absci (AI antibody design), Generate:Biomedicines (generative protein design), BigHat Biosciences, Xaira Therapeutics, Isomorphic Labs (AlphaFold-based design). In the bispecific space: AstraZeneca, Roche (own internal bispecific platforms), Merus, MacroGenics. In the TL1A specifically: Sanofi/AnaptysBio (ANB020), Roivant/Prometheus (PRA023, now Sanofi asset).

## Complements

CROs for scale-up manufacturing, structural biology facilities for cryo-EM validation, pharma partners for late-stage development and commercialization (Sanofi as primary example).

## Value chain position

**Downstream of:** Disease biology and target identification, genomics and proteomics data generation
**Upstream of:** IND-enabling studies, clinical development, CMC/manufacturing scale-up

## Gaps

No approved drug. All programs in discovery or early clinical stage. Platform commercial validation depends on clinical outcomes for partnered Sanofi programs (likely 3-5+ years away). Competition from well-funded AI biology platforms intensifying rapidly.

## Notes

Founded by Jian Peng (ex-UIUC professor, ISCB Overton Prize, RECOMB 2021 Program Chair) and Dr. Zhenping Zhu (ex-VP Global Head Protein Science Novartis, discoverer of cetuximab, ramucirumab, necitumumab). Company appears to be China-originated or China-connected based on investor base (DST Global, INCE Capital, Miracle Capital) and program naming (HXN prefix). $787M financing includes strategic investment from Pfizer (via Hillhouse Biotech Development Fund) and Sanofi, both of whom are also licensing programs, a dual financial-and-commercial relationship.

## News signals

- 2026-01: Strategic collaboration with Sanofi for bispecific antibodies in autoimmune disease, $160M upfront/near-term and up to $2.56B in total milestones plus tiered royalties. (source: https://www.prnewswire.com/news-releases/earendil-labs-announces-strategic-collaboration-with-sanofi-to-discover-bispecific-antibodies-for-autoimmune-diseases-302652305.html)
- 2026-03: Announced $787M in total financing from Dimension Capital, DST Global, INCE Capital, Luminous Ventures, Miracle Capital, Sanofi, and the Hillhouse/Pfizer Biotech Development Fund. (source: https://www.prnewswire.com/news-releases/earendil-labs-announces-787-million-in-financing-to-scale-ai-driven-biologics-discovery-and-development-302719748.html)
