---
id: crispr-diagnostics
name: CRISPR diagnostics
aliases:
  - CRISPR-based diagnostics
  - SHERLOCK (Cas13)
  - DETECTR (Cas12)
  - CRISPR-Chip
  - CRISPR-FET
substrate_family: D
substrate_tags:
  - D.2
enabled_by: Programmable collateral cleavage of Cas12/Cas13 nucleases, plus graphene field-effect-transistor CRISPR sensors that read intact genomic DNA electronically without PCR amplification
mechanism: A guide RNA directs a Cas nuclease to a target sequence; recognition either triggers collateral cleavage of a reporter (fluorescence or lateral-flow line) or shifts current on a CRISPR-functionalised transistor
new_capability: Nucleic-acid detection at high specificity in minutes at the point of care, with amplification-free electronic readout that can read unamplified genomic DNA
what_it_could_unlock: Home and clinic pathogen panels, antimicrobial-resistance genotyping, and cancer-mutation tests without a central molecular lab
capabilities:
- capability: Sequence-specific pathogen detection
  what_it_could_unlock: Home infectious-disease panels, outbreak testing, AMR detection
  mechanism: Cas12 or Cas13 recognition activates reporter cleavage
  technology_readiness_level: 7
  translational_gap: Sample prep, contamination, quantitative accuracy
  closest_companies:
  - Sherlock Biosciences
  - Cardea Bio
- capability: Mutation and oncology detection
  what_it_could_unlock: Cancer mutation panels, MRD, liquid biopsy
  mechanism: Guide RNA discriminates a target mutation and triggers an amplified signal
  technology_readiness_level: 5
  translational_gap: Sensitivity, false positives, ctDNA abundance, clinical validation
- capability: Genotyping and pharmacogenomics
  what_it_could_unlock: Cheap SNP and variant testing
  mechanism: CRISPR guide specificity distinguishes alleles
  technology_readiness_level: 5
  translational_gap: Multiplexing, reimbursement, sample prep
use_cases:
  - Home and point-of-care infectious-disease panels
  - Antimicrobial-resistance gene detection to guide antibiotic choice
  - Cancer mutation and liquid-biopsy genotyping
  - Rapid outbreak and biosurveillance testing
  - Single-nucleotide-variant discrimination for genetic tests
technology_readiness_level: 7
evidence_level: regulatory_cleared
translational_gap: Amplification-based formats risk contamination and struggle with quantitation, sample preparation is still manual, and amplification-free electronic formats have not matched the clinical sensitivity of PCR at scale
what_needs_to_happen: Integrated sample-to-answer cartridges, validated amplification-free sensitivity in clinical samples, and manufacturing that holds cost below existing rapid antigen and PCR tests
closest_companies:
  - Sherlock Biosciences
  - Mammoth Biosciences
  - Cardea Bio (graphene-FET CRISPR-Chip)
  - Crepurpose / Nuclein
related_primitives:
- cell-free-synthetic-biology
- nanopore-sensing
- prime-base-editing
closest_labs:
  - Feng Zhang Lab (Broad Institute)
  - Jennifer Doudna Lab (UC Berkeley / IGI)
  - Kiana Aran Lab (Keck Graduate Institute, CRISPR-Chip)
commercialisation_status: commercial_early
regulatory_complexity: high
capex_intensity: medium
defensibility: high
notes: SHERLOCK received an FDA EUA for SARS-CoV-2 in 2020, establishing the regulatory precedent; amplification-free electronic CRISPR (CRISPR-Chip / CRISPR-FET) is the frontier and remains earlier stage than the amplification-based lateral-flow formats.
momentum:
  papers: 19439
  cagr_pct: 8.9
  fwci: 9.19
  industry_share_pct: 3.2
  citation_mass: 1957.0
  on_topic_n: 189
  buildable_whitespace: 20/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 23.9
  mean_fwci: 9.94
  industry_share: 0.033
  patent_total: 233
  patent_cagr_pct: 20.8
  company_share: 0.053
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

CRISPR diagnostics use the sequence-programmable targeting of Cas enzymes as a detector. In the SHERLOCK (Cas13) and DETECTR (Cas12) formats, a guide RNA directs the nuclease to a target nucleic acid; recognition switches on collateral cleavage activity that chops a labelled reporter, producing a fluorescent signal or a visible line on a lateral-flow strip. Most deployed versions pre-amplify the target with an isothermal step (RPA/LAMP) to reach clinical sensitivity. The amplification-free branch, CRISPR-Chip and CRISPR-FET, immobilises a catalytically dead or active Cas complex on a graphene field-effect transistor, so binding to intact genomic DNA changes the transistor current directly and reads out electronically in under 15 minutes without any amplification.

## What it unlocks

The capability is specific, fast nucleic-acid detection outside a central lab, with single-nucleotide discrimination. Applications span home and point-of-care pathogen panels, antimicrobial-resistance genotyping to steer antibiotic choice, cancer-mutation and liquid-biopsy tests, and rapid biosurveillance. The amplification-free electronic route is the strategically interesting one: reading unamplified genomic DNA on a chip collapses sample prep and could turn genotyping into a handheld electronic measurement rather than a wet assay.

## Translational gap

Honest TRL is around 7 overall, dragged up by amplification-based formats that already hold an FDA EUA and pulled down by the amplification-free electronic formats that are still nearer TRL 4-5. Blockers: amplification steps invite carryover contamination and complicate quantitation; sample-to-answer integration (extraction plus reaction in one cartridge) is still immature; and CRISPR-FET sensitivity has not yet matched PCR on real clinical samples at scale. The unlocks are integrated cartridges, validated amplification-free sensitivity, and a cost structure that beats existing rapid tests.

## Notes

Sits across substrate families D (the transistor/device readout) and E (the biological recognition element); tagged D.2 diagnostic as the primary axis. Complements `cell-free-synthetic-biology`, since CRISPR readouts are frequently run inside freeze-dried cell-free formats.
