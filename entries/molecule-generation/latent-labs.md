---
id: latent-labs
name: Latent Labs
website: latentlabs.com
founded: 2024
area: generative biology
funding_stage: series-a
total_funding_usd_m: 50
public: false
business_model: partnerships
buyer:
  - pharma
  - biotech
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 24260
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - model
  - founder-brand
  - wet-lab
primary_value_chain_layer: discovery
input:
  - natural language design prompts
  - protein target sequences and structures
  - epitope specifications
  - scientific publications (for Latent-Y agent mode)
transformation_type: generate
output:
  - antibody sequences (VHH nanobodies, scFvs, full mAbs)
  - macrocyclic peptide candidates
  - miniprotein binders
barrier_to_entry: high
barrier_to_entry_logic: Ex-DeepMind founders with AlphaFold lineage and frontier protein-design model expertise that took years to develop; Jeff Dean and Dario Amodei as angel investors signals access to talent and compute networks.
hardness: very-hard
hardness_reason: Translating high in vitro hit rates (91-100% macrocycles) to clinical-stage programs with commercial economics and partner-funded development.
last_verified: "2026-06-21"
---

## One-liner

Builds AI foundation models and tooling for de novo protein, antibody, enzyme, and genetic-engineering design.

## Problem

Most biotech and pharma teams cannot build or maintain frontier protein-design models internally.

## Workaround

Internal computational biology teams, academic tools, CRO protein-engineering services, manual wet-lab screening.

## Entry wedge

Latent-X (July 2025): an atom-level generative model for de novo protein binder design, released via a no-code platform. First model to achieve 91-100% hit rates for macrocycles and 10-64% for mini-binders across 7 targets, generating picomolar binders in seconds. Entry was a public model release targeting research teams who could not access AlphaFold-level protein design.

## Method

All-atom generative models that jointly sample protein sequence and structure while modeling atomic-level chemistry (hydrogen bonds, pi-stacking); three model tiers: Latent-X (binder design), Latent-X2 (drug-like antibodies with developability and low immunogenicity), Latent-Y (autonomous agent operating from natural language prompts to design and plan full discovery campaigns 56x faster than expert estimates).

## TAM logic

No explicit market size claim on website. Implicit positioning: the protein therapeutics market ($24B+ biologics discovery segment) plus any pharma team that runs antibody or protein engineering programs. AWS partnership (May 2025) and NVIDIA DGX Cloud access (June 2025) suggest infrastructure-level ambitions beyond niche tooling.

## Validated by

Latent-X: 91-100% macrocycle hit rates, 10-64% mini-binder hit rates across 7 targets (lab-confirmed); Latent-X2: first AI-generated VHH antibodies with low immunogenicity in 10-donor human ex vivo T-cell and cytokine assays; developability on par with approved therapeutics without optimization; Latent-Y: 67% hit rate (6/9 targets), single-digit nanomolar binding affinities, 56x speed increase vs. expert estimates. $50M seed (Feb 2025, Radical Ventures + Sofinnova Partners lead). Angel investors include Jeff Dean (Google) and Dario Amodei (Anthropic).

## Competes with

Chai Discovery (antibody design, Chai-2 overlaps directly), Isomorphic Labs (biologics generation side), AbSci (generative antibody platform), ProteinMPNN/RFdiffusion-based academic tools, Evozyne, Generate Biomedicines.

## Complements

CROs for wet-lab validation (Charles River, WuXi), CDMOs for manufacturing, target identification companies upstream, clinical-stage biotechs who need fast antibody lead generation.

## Value chain position

**Downstream of:** Target identification and disease biology, structural biology databases (PDB), protein sequence databases, public antibody repertoires.
**Upstream of:** Developability optimization, ADMET profiling, IND-enabling preclinical studies, clinical development.

## Gaps

Strong technical layer but less clear downstream capture unless it owns programs, data, or partner economics.

## Notes

Founders co-developed AlphaFold at DeepMind and also "invented latent diffusion" (per company description) and built high-throughput protein screening platforms. CEO Simon Kohl (ex-DeepMind) named to Observer's 2025 AI Power Index. Based in London with SF presence. Latent-X uses Chai-1 and Boltz-2 for structure prediction consistency checking, indicating complementary rather than competing relationship with Chai Discovery at the infrastructure level.
