---
id: sandboxaq
name: SandboxAQ
website: sandboxaq.com
founded: 2022
area: quantitative ai
funding_stage: series-d-plus
total_funding_usd_m: 950
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
  - provider
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 300000
data_centrality: important-enabler
data_ownership:
  - generated-in-house
  - proprietary
  - public
moat:
  - model
  - capital
  - founder-brand
  - IP
primary_value_chain_layer: discovery
input:
  - protein and target structures
  - quantum chemistry and molecular dynamics simulations
  - biomedical knowledge graphs
transformation_type: predict
output:
  - molecular property and binding predictions
  - candidate small molecules for partners
  - biomarker and safety/efficacy predictions
barrier_to_entry: very-high
barrier_to_entry_logic: Physics-grounded Large Quantitative Models plus ~$950M raised, an Eric Schmidt chairmanship, and an Alphabet lineage give it compute, talent, and enterprise reach that a new entrant cannot match.
hardness: very-hard
hardness_reason: Proving that quantum-and-physics-based simulation beats cheaper empirical ML on real drug programs is unsettled, and drug value only accrues through partners' multi-year clinical timelines.
substrate_family: C
substrate_tags:
- C.2
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "Physics-grounded Large Quantitative Models use quantum chemistry and molecular dynamics to predict binding and score novel chemical space without a reference molecule."
technology_readiness_level: 5
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "Physics-based simulation beating cheaper empirical ML on real programs is not yet broadly proven."
last_verified: "2026-07-07"
---

## One-liner

Enterprise AI company whose physics-grounded Large Quantitative Models tackle drug discovery, biomarker identification, and other scientific problems.

## Problem

Text-pattern AI models struggle with quantitative physical and biochemical problems (molecular behaviour, binding energetics) where accuracy demands grounding in physics rather than statistical correlation over text.

## Workaround

Standard machine learning on empirical data, conventional free-energy perturbation requiring reference molecules, and slow wet-lab iteration.

## Entry wedge

Spun out of Alphabet in 2022 with a quantum and physics-simulation heritage, then built Large Quantitative Models and applied them across multiple verticals (drug discovery, cybersecurity, navigation), using enterprise and government contracts to fund the science.

## Method

Large Quantitative Models (LQMs) combine quantum chemistry, molecular dynamics, and microkinetics simulation with AI to predict molecular behaviour before wet-lab work. The AQBioSim drug-discovery stack includes AQFEP, an absolute free-energy perturbation method that needs no reference molecule, letting it score novel chemical space. The company also released a public database of 5.2M synthetic protein-ligand structures.

## TAM logic

Drug discovery is one of several large markets it addresses; combined with cybersecurity, navigation, and financial services the addressable opportunity spans multiple industries. Within life sciences it targets the global pharma R&D market, monetised via SaaS-style platform access plus milestone-bearing partnerships.

## Validated by

$450M Series E closed Apr 2025 at ~$5.75bn valuation (Ray Dalio, Horizon Kinetics, BNP Paribas, Google, NVIDIA), total raised over $950M. Sanofi biomarker-identification partnership (Oct 2024). MapLight Therapeutics CNS drug-discovery alliance (Dec 2025, up to $200M). AstraZeneca, Michael J. Fox Foundation, and iOncologi collaborations. LQMs made accessible via Anthropic's Claude (2026).

## Competes with

Isomorphic Labs, Schrodinger, Iambic Therapeutics, Genesis Molecular AI, and other physics-plus-AI molecular platforms; in non-bio verticals it competes with post-quantum security and sensing vendors.

## Complements

Pharma and biotech partners that own clinical programs, CROs for validation, and cloud/compute providers; the LQM platform can sit under partners' internal discovery workflows.

## Value chain position

**Downstream of:** Target identification, disease biology, structural and quantum chemistry data.
**Upstream of:** Preclinical development and clinical trials run by pharma partners.

## Gaps

Not a clinical sponsor; owns no clinical-stage asset, so drug value depends on partners. The claim that physics-based simulation outperforms cheaper empirical ML on real programs is not yet broadly proven. Bio is only part of a diversified business.

## Notes

Origins as an Alphabet quantum group in 2016, independent as SandboxAQ from Mar 2022; Palo Alto. CEO Jack Hidary, chairman Eric Schmidt. The Apr 2025 $450M is the closed Series E (an earlier ~$300M tranche preceded it); the seed "Series E extension" framing is loosely accurate but the company brands it as the round close.

## News signals
- 2026-05: SandboxAQ made its LQM drug-discovery models accessible through Anthropic's Claude via natural-language prompts. (source: https://www.technology.org/2026/05/19/sandboxaq-claude-drug-discovery-models/)
- 2025-04: SandboxAQ closed a $450M Series E at a ~$5.75bn valuation with Ray Dalio, Google, and NVIDIA among investors. (source: https://www.sandboxaq.com/press/sandboxaq-closes-450m-series-e-round-with-expanded-investor-base)
