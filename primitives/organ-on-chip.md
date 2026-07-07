---
id: organ-on-chip
name: Microfluidics / organ-on-chip / microphysiological systems (MPS)
aliases:
  - organ-on-a-chip
  - microphysiological systems
  - MPS
  - tissue chips
  - body-on-a-chip
substrate_family: E
substrate_tags:
  - E.6
enabled_by: Microfluidic control of parallel fluid streams plus microfabrication that lets living human cells be cultured under the mechanical forces, flow, and tissue-tissue interfaces of a real organ
mechanism: Human cells are cultured in microfabricated channels where controlled flow, shear, and cyclic strain recreate an organ's microenvironment, and chips can be linked to model organ-to-organ drug movement
new_capability: Human-relevant, dynamic tissue and multi-organ models that predict drug safety and disease behaviour without a live animal
what_it_could_unlock: A regulatory-accepted human substitute for animal toxicology, cutting drug attrition and enabling patient-specific disease modelling
capabilities:
- capability: Organ-mimetic disease modelling
  what_it_could_unlock: Drug safety, efficacy prediction, animal replacement
  mechanism: Microfluidic flow recreates tissue shear, gradients and mechanics
  technology_readiness_level: 7
  translational_gap: Standardisation, regulatory acceptance, reproducibility
  closest_companies:
  - Hesperos
  - Emulate
- capability: Sample preparation and assay miniaturisation
  what_it_could_unlock: Point-of-care diagnostics, low-volume multiplex testing
  mechanism: Fluids are routed, mixed, separated and reacted on-chip
  technology_readiness_level: 6
  translational_gap: COGS, clogging, cartridge reliability
- capability: Single-cell and droplet screening
  what_it_could_unlock: High-throughput cell assays, antibody discovery, directed evolution
  mechanism: Droplets or chambers isolate single cells or reactions at scale
  technology_readiness_level: 7
  translational_gap: Instrument cost, workflow complexity
use_cases:
  - Preclinical drug safety and toxicity prediction
  - Disease modelling (liver, gut, lung, blood-brain barrier, tumour)
  - Reducing and replacing animal testing under FDA Modernization Act 2.0
  - ADME and multi-organ drug interaction studies
  - Patient-derived-cell models for precision medicine
technology_readiness_level: 7
evidence_level: regulatory_cleared
translational_gap: Reproducibility and standardisation across labs, low throughput and hands-on operation, incomplete qualification of specific chips for specific regulatory contexts, and integration into pharma workflows already built around animal data
what_needs_to_happen: Context-of-use qualification of chips through FDA programs (ISTAND), standardised and scalable manufacturing, and validation datasets showing chips predict human outcomes better than animal models
closest_companies:
  - Emulate
  - Hesperos (Human-on-a-Chip)
  - Mimetas (OrganoPlate)
  - CN Bio
  - TissUse
related_primitives:
- biosimulation-qsp
- spatial-omics
- biohybrid-microbots
closest_labs:
  - Donald Ingber Lab (Wyss Institute, Harvard)
  - Kevin Kit Parker Lab (Harvard)
  - Michael Shuler / James Hickman (Human-on-a-Chip lineage)
commercialisation_status: commercial_early
regulatory_complexity: high
capex_intensity: high
defensibility: high
notes: Strong regulatory tailwind. FDA Modernization Act 2.0 (2022) made animal testing optional; FDA issued guidance in April 2025 to phase out animal trials in favour of organoids and organ-on-chip, made the ISTAND pilot permanent in 2025 (Emulate was first OoC company accepted), and issued March 2026 draft guidance on new approach methodologies.
momentum:
  papers: 8786
  cagr_pct: 29.7
  fwci: 5.53
  industry_share_pct: 6.6
  citation_mass: 1797.0
  on_topic_n: 106
  buildable_whitespace: 12/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: commercialising-now
  paper_cagr_pct: 22.5
  mean_fwci: 4.62
  industry_share: 0.073
  patent_total: 1464
  patent_cagr_pct: 14.0
  company_share: 0.167
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Organ-on-chip takes the precision of microfluidics, the ability to steer parallel fluid streams and apply defined shear and strain, and uses it to give cultured human cells the physical context they lack in a static dish. Cells are grown in microfabricated channels where controlled flow delivers nutrients and drugs, cyclic mechanical strain mimics breathing or peristalsis, and a porous membrane places two cell types (say lung epithelium and capillary endothelium) across a functional interface. Because the environment is dynamic and human-derived, the tissue behaves closer to how it does in the body. Multiple organ chips can be plumbed together so a drug is metabolised by a liver chip before reaching a target chip, reconstructing absorption, distribution, and inter-organ effects.

## What it unlocks

The capability is a human-relevant test system that predicts drug safety and disease behaviour without an animal. That matters most for preclinical toxicology, where animal models routinely mispredict human liver, heart, or immune toxicity, and for disease modelling of tissues that are hard to study in vivo (blood-brain barrier, tumour microenvironment). Linked multi-organ chips enable ADME and drug-interaction studies, and patient-derived cells turn the platform into a precision-medicine tool. The FDA Modernization Act 2.0 and subsequent 2025-2026 guidance make this the rare biological primitive with an explicit regulatory tailwind pulling adoption.

## Translational gap

Honest TRL is around 7: chips are commercial and now being qualified through FDA programs, but they have not displaced animal studies at scale. The blockers are reproducibility and standardisation across labs and vendors, low throughput and heavy hands-on operation, and the slow, chip-by-chip work of qualifying a specific model for a specific regulatory context of use. Pharma workflows and historical safety databases are also built around animal comparators, so switching cost is real. The unlocks are context-of-use qualification through programs like ISTAND, scalable standardised manufacturing, and validation datasets proving chips beat animals at predicting human outcomes.

## Notes

Tagged E.6 (organoids and tissue models) as the closest substrate tag, though the primitive is fundamentally the marriage of microfluidics (a D-family physics capability) with living human tissue. Regulatory acceptance, not core science, is now the rate-limiting variable.
