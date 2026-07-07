---
id: extracellular-vesicles
name: Extracellular Vesicles
aliases:
  - exosomes
  - EVs
  - engineered exosomes
  - EV therapeutics
  - exosome diagnostics
substrate_family: E
substrate_tags:
  - E.5
enabled_by: The discovery that cells naturally shed lipid nanovesicles carrying protein and RNA cargo, plus engineering methods to load, target, and produce them, so a biological nanocarrier can be repurposed for delivery and read as a diagnostic analyte
mechanism: Cell-derived lipid-bilayer vesicles carry molecular cargo between cells; engineered EVs display targeting proteins and are loaded with a therapeutic, while circulating native EVs are captured and their cargo profiled as a biomarker
new_capability: A natural, biocompatible nanocarrier that crosses barriers and evades clearance better than synthetic nanoparticles, and a rich circulating source of tissue-specific molecular signals for liquid biopsy
what_it_could_unlock: Targeted delivery of nucleic acids and proteins to tissues that synthetic nanoparticles miss, and non-invasive diagnostics that read the molecular state of a specific tissue from blood
capabilities:
- capability: EV therapeutic delivery
  what_it_could_unlock: Targeted delivery of RNA, protein, or gene-editing cargo to specific tissues, including across the blood-brain barrier
  mechanism: Engineered exosomes display targeting ligands and EV-sorting scaffolds that load and protect cargo and enable endosomal release
  technology_readiness_level: 5
  translational_gap: Reproducible cargo loading, targeting specificity, scalable GMP manufacturing, potency assays
  closest_companies:
  - Evox Therapeutics
  - Mantra Bio
  - Codiak BioSciences (defunct, assets sold)
- capability: Exosome liquid-biopsy diagnostics
  what_it_could_unlock: Non-invasive tests that read tissue-specific RNA and protein signatures for cancer and other disease
  mechanism: Circulating EVs are isolated and their nucleic-acid or protein cargo is profiled as a biomarker
  technology_readiness_level: 6
  translational_gap: Isolation standardisation, signal-to-noise from bulk plasma EVs, clinical validation, reimbursement
  closest_companies:
  - Bio-Techne (ExoDx Prostate)
  - mdxhealth
use_cases:
  - Engineered exosomes delivering siRNA or mRNA to liver, muscle, or brain
  - ExoDx-style urine or blood exosome tests for prostate and other cancers
  - EV carriers for gene-editing payloads and protein therapeutics
  - Cell-free regenerative EV products from stem cells
  - Early-detection multi-cancer exosome RNA panels
technology_readiness_level: 5
evidence_level: human_pilot
translational_gap: Loading therapeutic cargo into EVs reproducibly and at high efficiency is hard; targeting to the intended tissue is imperfect; manufacturing at GMP scale with a defined potency assay is unsettled for therapeutics; and for diagnostics, isolation is not standardised and tissue-specific signal is diluted in bulk plasma EVs
what_needs_to_happen: Robust, scalable cargo-loading and targeting engineering with a validated potency assay for therapeutics, and standardised isolation plus clinical validation and reimbursement for diagnostics
closest_companies:
  - Evox Therapeutics
  - Mantra Bio
  - Bio-Techne (ExoDx diagnostics)
  - Codiak BioSciences (defunct; assets acquired by Evox)
related_primitives:
- mrna-lnp-delivery
- liquid-biopsy-multiomics
- nanopore-sensing
closest_labs:
  - Matthew Wood Lab (University of Oxford)
  - Samir El Andaloussi Lab (Karolinska Institutet)
  - Raghu Kalluri Lab (MD Anderson)
commercialisation_status: pilot_deployment
regulatory_complexity: high
capex_intensity: high
defensibility: medium
notes: "The field splits into two maturities. Diagnostics are the more advanced arm: Bio-Techne's ExoDx Prostate is a commercial exosome-RNA test, so that capability is around TRL 6. Therapeutic delivery is earlier, around TRL 5, with several biotechs in or approaching the clinic and none approved. Codiak BioSciences, an early leader, filed for bankruptcy in 2023 and its engEx assets were acquired by Evox, so it is marked defunct."
momentum:
  papers: 3201
  cagr_pct: 57.2
  fwci: 13.4
  industry_share_pct: 8.6
  citation_mass: 5198.0
  on_topic_n: 185
  buildable_whitespace: 15/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: over-patented-crowded
  paper_cagr_pct: 21.2
  mean_fwci: 26.8
  industry_share: 0.079
  patent_total: 18628
  patent_cagr_pct: 16.8
  company_share: 0.385
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

Extracellular vesicles are lipid-bilayer nanoparticles that cells naturally release to carry proteins, lipids, and RNA between cells; exosomes are the small (roughly 30 to 150 nm) endosome-derived subset. Two uses follow from one biology. As a delivery vehicle, an EV can be engineered to display a targeting protein on its surface and to load a therapeutic cargo (siRNA, mRNA, protein, or a gene-editing payload) via sorting-domain scaffolds that also protect the cargo and help it escape the endosome after uptake. Because EVs are the body's own carriers, they tend to be less immunogenic, cross biological barriers better, and clear more slowly than synthetic nanoparticles. As a diagnostic, native EVs shed by diseased tissue circulate in blood and urine, so isolating them and profiling their nucleic-acid or protein cargo reads out the molecular state of that tissue non-invasively.

## What it unlocks

On the therapeutic side, EVs promise targeted delivery to tissues that lipid nanoparticles reach poorly, including the prospect of crossing the blood-brain barrier, which would extend RNA and gene-editing medicines to the central nervous system and to muscle. On the diagnostic side, exosome cargo gives a tissue-specific liquid biopsy: Bio-Techne's ExoDx Prostate is a commercially deployed exosome-RNA test that helps decide on biopsy, showing the diagnostic arm is already at product. The broader promise is early, non-invasive detection panels and cell-free regenerative EV products derived from stem cells. The strategic point for this map is that one substrate spans both delivery and diagnostics, so a manufacturing and isolation capability built for one can seed the other.

## Translational gap

The two arms have different gaps. For therapeutics, honest TRL is about 5: loading cargo reproducibly and at high efficiency is hard, targeting to the intended tissue is imperfect, and GMP-scale manufacturing with a defined potency assay is unsettled, so several biotechs are in or nearing the clinic but none is approved. For diagnostics, TRL is about 6: the remaining work is standardising isolation, lifting tissue-specific signal out of the large background of bulk plasma EVs, and securing clinical validation and reimbursement for new indications. Across both, the recurring theme is that the biology is favourable but the process control (loading, targeting, isolation, potency) is what gates products.

## Notes

Diagnostics lead therapeutics in maturity here. Bio-Techne's ExoDx line is commercial, while therapeutic delivery players remain pre-approval. Evox Therapeutics and Mantra Bio are the closest therapeutic companies; Codiak BioSciences, an early pioneer, filed for bankruptcy in March 2023 and its engEx delivery assets were acquired by Evox, so Codiak is marked defunct. Top-level status is pilot_deployment to reflect the commercial diagnostic arm alongside pre-commercial therapeutics.
