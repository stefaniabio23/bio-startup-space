---
id: nabla-bio
name: Nabla Bio
website: nabla.bio
founded: 2021
area: generative biology
funding_stage: series-a
total_funding_usd_m: 37
public: false
business_model: partnerships
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 285000
data_centrality: important-enabler
data_ownership:
  - proprietary
  - public
  - generated-in-house
moat:
  - model
  - IP
  - founder-brand
primary_value_chain_layer: discovery
input:
  - protein target sequences and structures
  - epitope and specificity constraints
  - antibody and multispecific format specifications
transformation_type: generate
output:
  - de novo antibody and multispecific sequences
  - binding affinity and developability predictions
  - protein therapeutic candidates
barrier_to_entry: high
barrier_to_entry_logic: The JAM model's zero-shot design of picomolar binders to hard targets like GPCRs, plus repeat Takeda validation, is a technical and credibility lead that is expensive to reproduce.
hardness: very-hard
hardness_reason: Designing developable, low-immunogenicity biologics computationally is hard, and no Nabla-designed candidate has yet reached the clinic to prove it in humans.
substrate_family: C
substrate_tags:
- C.1
- C.2
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "Joint Atomic Model designs de novo antibodies and multispecifics zero-shot against hard targets like GPCRs, validated with PK/PD and low immunogenicity in primates."
technology_readiness_level: 5
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "No candidate has reached the clinic, and the small capital base makes scaling dependent on partnership revenue."
last_verified: "2026-07-07"
---

## One-liner

Generative biology company whose Joint Atomic Model designs de novo antibodies and protein therapeutics against hard targets, fast and zero-shot.

## Problem

Antibody discovery for difficult targets (GPCRs, ion channels, multispecifics) is slow, experimentally intensive, and often fails to yield developable, low-immunogenicity molecules.

## Workaround

Display libraries, hybridoma discovery, immunisation, directed evolution, and structure-guided antibody engineering.

## Entry wedge

Built the Joint Atomic Model (JAM), a generative model that designs de novo binders zero-shot, and demonstrated firsts such as computationally designed binders to Claudin-4 and CXCR7, then converted the credibility into repeat pharma collaborations (Takeda, AstraZeneca, BMS).

## Method

JAM is a multimodal generative model ("molecular auto-complete") trained on protein sequence and structure that designs antibodies and multispecifics zero-shot. JAM-2 produced drug-like antibodies across 28 targets with validated PK/PD and low immunogenicity in non-human primates. The design-to-lab loop is fast, with wet-lab validation feeding back in.

## TAM logic

Targets the biologics discovery market; antibodies account for a large and growing share of new drug approvals, so a faster, more reliable design engine addresses much of the therapeutic-antibody value chain. Monetised through upfront and milestone-bearing pharma partnerships.

## Validated by

Second Takeda collaboration signed Oct 2025 (double-digit-millions upfront plus research costs and success-based payments that may exceed $1bn); first Takeda relationship dates to 2022. AstraZeneca and Bristol Myers Squibb collaborations disclosed May 2024. $26M Series A (May 2024, led by Radical Ventures, with Khosla Ventures and Zetta). JAM-2 model validation in NHPs.

## Competes with

Chai Discovery, Generate Biomedicines, Latent Labs, AbSci, Absci, EvolutionaryScale, and other generative protein and antibody design platforms.

## Complements

Pharma partners that develop and commercialise designed biologics, wet-lab CROs, CDMOs for manufacturing, and target-discovery companies upstream.

## Value chain position

**Downstream of:** Target identification, disease biology, protein structure databases (PDB).
**Upstream of:** Developability optimisation, IND-enabling studies, and clinical trials at partners.

## Gaps

No disclosed clinical-stage program; all preclinical. Small capital base (~$37M) relative to peers, so scaling depends heavily on partnership revenue. No quantified design-to-lab turnaround figure disclosed.

## Notes

Founded Dec 2021 by Frances Anastassacos and Surge Biswas; technology traces to George Church's lab at Harvard. Cambridge, MA; Y Combinator alum. Total equity funding ~$37M; no confirmed Series B and no public valuation. A stray "$107M" aggregator figure appears to conflate it with the unrelated French health company Nabla.

## News signals
- 2025-10: Nabla Bio signed a second Takeda collaboration to advance AI-driven protein therapeutics, with potential payments exceeding $1bn. (source: https://www.businesswire.com/news/home/20251014934240/en/Nabla-Bio-Signs-Second-Takeda-Collaboration-to-Advance-AI-Driven-Design-of-Protein-Therapeutics)
- 2024-05: Nabla Bio raised a $26M Series A led by Radical Ventures to scale its generative antibody design platform. (source: https://www.nabla.bio/news/denovo)
