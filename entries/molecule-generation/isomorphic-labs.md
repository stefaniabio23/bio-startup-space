---
id: isomorphic-labs
name: Isomorphic Labs
website: isomorphiclabs.com
founded: 2021
area: ai drug design
funding_stage: series-b
total_funding_usd_m: 2700
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 200000
data_centrality: important-enabler
data_ownership:
  - proprietary
  - public
  - partner-supplied
moat:
  - model
  - founder-brand
  - capital
  - IP
primary_value_chain_layer: discovery
input:
  - protein sequences and structures
  - small molecule chemical data
  - antibody sequences and antigen data
transformation_type: generate
output:
  - drug candidate structures (small molecules and biologics)
  - binding affinity predictions
  - ligandable pocket identifications
barrier_to_entry: very-high
barrier_to_entry_logic: DeepMind lineage, AlphaFold IP, $2.7B capital, and an exclusive frontier AI-biology talent pool mean no startup can assemble comparable infrastructure.
hardness: moonshot
hardness_reason: Generalising biomolecular prediction across all target classes, modalities, and binding contexts without overfitting to known chemistry.
last_verified: "2026-06-22"
---

## One-liner

Builds frontier AI models for biomolecular prediction and drug design across small molecules and biologics.

## Problem

Drug discovery is slow, empirical, expensive, and often fails because molecule-target interactions are hard to predict.

## Workaround

Traditional medicinal chemistry, structure-based design, wet-lab screening, CRO discovery services, pharma internal R&D.

## Entry wedge

AlphaFold 3 (released May 2024), extending DeepMind's Nobel-winning protein structure prediction to model interactions between all biological molecule classes. This gave Isomorphic a credibility and capability foundation to build toward drug design proper.

## Method

End-to-end unified drug design engine (IsoDDE) combining predictive structure modeling (building on AlphaFold 3) with generative molecule design, operating across small molecules, antibodies, peptides, and molecular glues from sequence/structure inputs to drug candidate outputs.

## TAM logic

Positions against the full global drug discovery R&D spend; Demis Hassabis has framed the mission as solving "all disease." No specific market size cited publicly, but implied addressable market is the $200B+ annual pharma R&D budget (internal estimate basis).

## Validated by

Three pharma research collaborations (Novartis Jan 2024 expanded Feb 2025, Eli Lilly undisclosed, J&J Jan 2026). $2.1B Series B (Feb 2025, Thrive Capital lead, with Alphabet, GV, MGX, Temasek, CapitalG, UK Sovereign AI Fund). IsoDDE benchmark: >2x accuracy over AlphaFold 3 on protein-ligand structure prediction for novel systems; 2.3x better than AF3 and 19.8x better than Boltz-2 on antibody-antigen prediction (company-reported).

## Competes with

Schrödinger (physics-based drug design platform), Recursion Pharmaceuticals (AI-guided phenotypic screening), Insilico Medicine (generative small molecule design), Exscientia (AI-designed small molecules, acquired by Recursion 2024), Relay Therapeutics (structure-informed drug design), Latent Labs, Chai Discovery.

## Complements

CROs for wet-lab validation (Charles River, Evotec), CDMOs for manufacturing, clinical-stage biotechs who need better lead candidates, genomics/target ID companies (e.g., Recursion's target ID side).

## Value chain position

**Downstream of:** Genomics and target identification (what genes/proteins to drug), structural biology (experimental structures that train or validate models), public databases (PDB, UniProt, ChEMBL).
**Upstream of:** Medicinal chemistry optimization, ADMET/developability assessment, IND-enabling preclinical studies, clinical development.

## Gaps

Brings frontier AI to molecular design, but the non-technical gap is clinical translation: target choice, patient selection, dose, safety, regulatory path.

## Notes

Founded by Demis Hassabis as a sister company to DeepMind within Alphabet. Scientific advisory board includes Jennifer Doudna, Paul Nurse, Venki Ramakrishnan. Internal pipeline focused on oncology and immunology, not yet disclosed. $600M additional external round announced March 2025 on top of the Feb 2025 Series B. Total capital raised is approximately $2.6B. Hassabis's earlier target of AI-designed drugs in the clinic by end of 2025 slipped; the company now guides to entering the clinic by end of 2026.

## News signals

- 2026-05: $2.1B Series B led by Thrive Capital (with Alphabet, GV, MGX, Temasek, CapitalG, UK Sovereign AI Fund) confirmed, bringing total capital to ~$2.6B. (source: https://www.prnewswire.com/news-releases/isomorphic-labs-secures-2-1-billion-funding-to-scale-its-ai-drug-design-engine-302769674.html)
- 2026-05: Clinical timeline pushed back; first trials now expected by end of 2026, a slip from the prior end-of-2025 target. (source: https://finance.yahoo.com/news/google-backed-ai-drug-discovery-195423147.html)
