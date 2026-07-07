---
id: phage-therapy
name: Bacteriophage / phage therapy
aliases:
  - bacteriophage therapy
  - engineered phage therapy
  - CRISPR-Cas3 phage
  - phage-delivered gene editing
substrate_family: E
substrate_tags:
  - E.4
enabled_by: Engineering bacteriophages to carry payloads (CRISPR-Cas3 that shreds bacterial DNA, or base editors) so the phage acts as a delivery vehicle that targets a bacterial genome from the inside
mechanism: A phage injects an engineered genetic payload into its host bacterium; the payload either irreversibly degrades the target genome (Cas3) or precisely rewrites bases in situ, killing or reprogramming only the intended strain
new_capability: Species- and strain-specific bacterial killing and in-vivo microbiome gene editing, rather than the broad kill of small-molecule antibiotics
what_it_could_unlock: Resistance-resilient eradication of multi-drug-resistant infections and precision editing of the gut or skin microbiome without wiping out commensals
capabilities:
- capability: Targeted bacterial killing
  what_it_could_unlock: MDR infection treatment and biofilm disruption
  mechanism: Phage infects and lyses target bacterial strains
  technology_readiness_level: 6
  translational_gap: Matching, resistance, manufacturing, trial design
  closest_companies:
  - Locus Biosciences
- capability: Engineered payload delivery
  what_it_could_unlock: CRISPR antimicrobials, microbiome editing, resistance-gene removal
  mechanism: An engineered phage delivers a DNA or RNA payload into bacteria
  technology_readiness_level: 6
  translational_gap: Delivery efficiency, resistance, regulation
  closest_companies:
  - Locus Biosciences
  - Eligo Biosciences
- capability: Bacterial diagnostics and susceptibility testing
  what_it_could_unlock: Rapid phage-matching and infection triage
  mechanism: Reporter phages identify viable target bacteria
  technology_readiness_level: 5
  translational_gap: Speed, coverage, integration into hospital workflows
use_cases:
  - Treatment of multi-drug-resistant UTIs and other MDR infections
  - Precision removal of pathogenic strains from the gut or skin microbiome
  - In-vivo base editing of microbiome genes (for example acne-associated skin bacteria)
  - Decolonisation of antibiotic-resistant carriers
  - Complement or replacement for last-line antibiotics
technology_readiness_level: 6
evidence_level: clinical_validated
translational_gap: Manufacturing and scaling engineered phage and delivery vectors under GMP, host-range and immune neutralisation limiting durability, regulatory precedent for a self-replicating living drug, and bacterial resistance to phage entry
what_needs_to_happen: Confirmatory later-stage controlled trials, scalable GMP bioproduction of phage and delivery vectors, and a regulatory framework for engineered self-replicating and gene-editing biologics
closest_companies:
  - Locus Biosciences (CRISPR-Cas3 engineered phage, LBP-EC01 for MDR UTI)
  - Eligo Bioscience (in-vivo microbiome base editing via phage-derived vectors)
  - Armata Pharmaceuticals
  - BiomX
related_primitives:
- crispr-diagnostics
- prime-base-editing
closest_labs:
  - Timothy Lu Lab (MIT)
  - Paul Turner Lab (Yale)
  - David Bikard Lab (Institut Pasteur)
commercialisation_status: regulatory_review
regulatory_complexity: very-high
capex_intensity: high
defensibility: high
notes: Locus reported positive Phase 2 data for its CRISPR-Cas3 engineered-phage cocktail LBP-EC01 in MDR UTI (all combination-arm participants resolved symptoms, most cured at the molecular level). Eligo published first-ever in-vivo microbiome base editing in the mouse gut in Nature and expanded its Series B to about $35M for immuno-dermatology.
momentum:
  papers: 39572
  cagr_pct: 16.6
  fwci: 7.47
  industry_share_pct: 1.6
  citation_mass: 677.0
  on_topic_n: 125
  buildable_whitespace: 16/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 28.9
  mean_fwci: 17.2
  industry_share: 0.044
  patent_total: 1129
  patent_cagr_pct: 12.7
  company_share: 0.188
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Bacteriophages are viruses that infect bacteria with exquisite host specificity. Phage therapy exploits that specificity, and the modern engineered version turns the phage into a programmable delivery vehicle rather than relying on natural lysis alone. Locus Biosciences arms a phage cocktail with a CRISPR-Cas3 system: once injected into the target E. coli, Cas3 processively shreds the bacterial genome, an irreversible kill that also boosts lytic potency. Eligo Bioscience uses phage-derived vectors to deliver a base editor into bacteria in situ, rewriting specific genes in the microbiome of a living animal without killing off the surrounding commensals. In both cases the payload, not a broad chemical, defines what dies or changes.

## What it unlocks

The capability is strain-level precision against bacteria, either to eradicate a resistant pathogen or to edit a gene inside the resident microbiome. Because targeting is sequence-based, killing does not depend on the small-molecule mechanisms that resistant bugs have already evolved around, so this is a route to multi-drug-resistant infections (Locus's lead is MDR UTI) and to microbiome medicine that spares the healthy flora. Eligo's in-vivo base editing points at a whole class of therapies, for example editing acne-associated skin bacteria, that were previously impossible because you could not selectively rewrite one member of a complex community in the body.

## Translational gap

Honest TRL is around 6: Locus has positive Phase 2 clinical data and Eligo has an in-vivo animal proof of concept published in Nature, so this is past preclinical but not yet an approved product. The blockers are GMP manufacturing and scale-up of engineered phage and delivery vectors, host-range limits and immune neutralisation that cap durability and repeat dosing, bacterial resistance to phage adsorption, and the absence of a settled regulatory pathway for a self-replicating living drug that also performs gene editing. The unlocks are confirmatory later-stage trials, scalable bioproduction, and a regulatory framework for engineered self-replicating and gene-editing biologics.

## Notes

Two distinct modalities live under this primitive: engineered-phage antibacterials (Locus, Cas3 kill) and phage-delivered in-vivo microbiome editing (Eligo, base editing). They share the phage-as-vector substrate but diverge on intent, kill versus reprogram.
