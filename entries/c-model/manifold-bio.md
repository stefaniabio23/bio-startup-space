---
id: manifold-bio
name: Manifold Bio
website: manifold.bio
founded: 2020
area: in vivo biologics design
funding_stage: series-a
total_funding_usd_m: 45
public: false
business_model: platform_partnership
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 200000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - model
  - IP
primary_value_chain_layer: in vivo biologics discovery and optimization
input:
  - protein target and epitope specifications
  - tissue-targeting and multispecific format requirements
  - multiplexed in vivo tissue distribution and PK readouts
transformation_type: generate
output:
  - de novo antibody and multispecific candidate sequences
  - blood-brain-barrier and tissue-targeting shuttle designs
  - quantitative in vivo biodistribution data per candidate
barrier_to_entry: high
barrier_to_entry_logic: The protein-barcode readout lets hundreds of candidates be measured in one animal, a proprietary in vivo data flywheel that is expensive and slow for a competitor to reproduce.
hardness: very-hard
hardness_reason: Turning multiplexed in vivo distribution data into reliably developable, translatable tissue-targeted biologics is unproven at any clinical endpoint.
substrate_family: C
substrate_tags:
  - C.1
  - C.2
  - A.1
technology_platform_ids:
  - protein-design-diffusion-models
  - biology-foundation-models
technology_platform_name: "mDesign (protein-barcode multiplexed in vivo screening plus mBER AI antibody design)"
new_capability: "Protein barcodes (mCodes) let hundreds of candidate biologics be measured across tissues in a single animal, feeding an AI engine that designs tissue-targeted multispecifics in vivo-first."
technology_readiness_level: 5
commercialisation_status: preclinical
customer:
  - pharma
  - biotech
limiting_factor: "No candidate has reached the clinic; the in vivo design-to-translation loop is validated preclinically but not yet in humans."
last_verified: "2026-07-13"
---

## One-liner

In vivo biologics design company whose protein barcodes measure hundreds of therapeutic candidates in a single animal, feeding an AI engine that designs tissue-targeted multispecifics.

## Problem

Protein therapeutics fail late because in vivo behaviour (biodistribution, tissue targeting, PK) can only be tested a few candidates at a time in animals, so design models see too little real in vivo data and translation stays a bottleneck.

## Workaround

Serial single-candidate animal studies, in vitro binding and developability assays used as weak proxies for in vivo behaviour, and hand-engineered shuttle formats optimised one at a time.

## Entry wedge

Built mCodes, inert peptide barcodes attached to each therapeutic molecule and read out by high-affinity detectors plus DNA sequencing, so up to hundreds of candidates can be quantified across tissues in one mouse. Turned that multiplexed in vivo readout into a design flywheel and focused it on blood-brain-barrier shuttles (TfR, CD98) for CNS programs.

## Method

The mDesign engine pairs AI-guided protein design with multiplexed in vivo data in a closed loop. mBER designs millions of epitope-specific binders with structural priors, then all candidates are tested directly in vivo via barcoding rather than screened in vitro first. The measured tissue-distribution and PK data feed back to train the design models, an in vivo-first discovery approach aimed at tissue-targeted multispecifics and brain shuttles.

## Validated by

$40M Series A (July 2022) led by Triatomic Capital, with Section 32, FPV Ventures, Horizons Ventures, Tencent, plus seed backers Playground Global and Fifty Years; $5.4M seed (2020). November 2025 strategic collaboration and license with Roche for BBB shuttles: $55M upfront and potential for over $2bn in milestones. Founding team from Harvard Medical School and the Wyss Institute (Gleb Kuznetsov, Pierce Ogden, George Church).

## Competes with

Nabla Bio, Generate Biomedicines, Chai Discovery, AbSci, and other generative antibody and multispecific design platforms on the design leg. On brain-shuttle biology specifically, Denali Therapeutics and other TfR-based BBB-transport programs at large pharma.

## Complements

Pharma partners that develop and commercialise the designed biologics (Roche), CDMOs for manufacturing, and upstream target-discovery and disease-biology sources that feed the design step.

## Value chain position

**Downstream of:** Target identification, CNS disease biology, protein structure databases, generative-design model infrastructure.
**Upstream of:** Developability optimisation, IND-enabling studies, and clinical development at partners.

## Gaps

No disclosed clinical-stage program; all preclinical. The in vivo multiplexing throughput (stated up to hundreds per animal) and its translational advantage are largely self- and partner-reported, with no third-party clinical readout yet. Total disclosed equity is modest (~$45M) relative to the scale of the Roche deal, so scaling leans on partnership revenue.

## Notes

Founded 2020 in the Boston area; Wyss Institute spinout. Total disclosed equity funding ~$45M ($5.4M seed + $40M Series A); the $55M Roche upfront is collaboration revenue, not equity, so it is not added to total_funding_usd_m. substrate_tags cover the generative-design model (C.1), the modelled binding interface (C.2), and the proprietary in vivo data asset (A.1) that is the real moat. Linked to protein-design-diffusion-models (mBER designs epitope-specific binders with structural priors) and biology-foundation-models (the proprietary in vivo data flywheel feeding design priors). TAM is a best-effort placeholder for the biologics discovery market, not a company figure.

## News signals
- 2025-11: Manifold Bio announced a strategic collaboration with Roche to develop next-generation brain shuttles, receiving $55M upfront with potential for over $2bn in milestones. (source: https://www.businesswire.com/news/home/20251101912697/en/Manifold-Bio-Announces-Strategic-Collaboration-with-Roche-to-Develop-Multiple-Next-Generation-Brain-Shuttles-for-Neurological-Diseases)
- 2022-07: Manifold Bio raised a $40M Series A led by Triatomic Capital to expand its in vivo biologics design platform. (source: https://www.businesswire.com/news/home/20220714005054/en/Manifold-Bio-Raises-%2440-Million-Series-A-to-Expand-In-Vivo-Biologics-Design-Platform)
