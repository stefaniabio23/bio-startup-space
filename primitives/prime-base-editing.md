---
id: prime-base-editing
name: Prime and base editing
aliases:
  - prime editing
  - base editing
  - search-and-replace gene editing
  - programmable gene correction
substrate_family: E
substrate_tags:
  - E.3
enabled_by: CRISPR-derived editors fused to reverse transcriptase or deaminase enzymes that make precise DNA changes without double-strand breaks, delivered in vivo by lipid nanoparticles and viral vectors
mechanism: prime editing uses a guide RNA that both targets a site and templates a search-and-replace edit, while base editing chemically converts a single base, correcting disease-causing mutations without cutting both strands of DNA
new_capability: precise, programmable correction of point mutations and small insertions or deletions in living cells with far less collateral genome damage than nuclease editing
what_it_could_unlock: durable one-time genetic cures for inherited diseases, delivered either to edited cells ex vivo or directly to tissues in the body
capabilities:
  - capability: In vivo therapeutic gene correction
    what_it_could_unlock: One-time genetic cures delivered directly to liver, muscle, or other tissues
    mechanism: LNP- or viral-delivered editors correct disease mutations inside the body
    technology_readiness_level: 6
    translational_gap: Delivery efficiency, tissue targeting, off-target edits, durability
    closest_companies:
      - Prime Medicine
      - Verve Therapeutics
  - capability: Ex vivo edited cell therapies
    what_it_could_unlock: Corrected autologous stem or immune cells reinfused as a curative therapy
    mechanism: Cells are edited outside the body, selected, and reinfused after conditioning
    technology_readiness_level: 7
    translational_gap: Manufacturing, conditioning burden, editing efficiency, durability
    closest_companies:
      - Prime Medicine
      - Beam Therapeutics
related_primitives:
  - molecular-recording
  - mrna-lnp-delivery
use_cases:
  - inherited monogenic disease correction (CGD, Wilson's disease)
  - ex-vivo corrected stem-cell and immune-cell therapies
  - in-vivo cardiovascular and metabolic gene editing
  - point-mutation repair without double-strand breaks
technology_readiness_level: 6
evidence_level: human_pilot
translational_gap: in-vivo delivery efficiency and tissue targeting remain the central bottleneck, alongside off-target edits, durability of the correction, and scalable manufacturing of editors and delivery vehicles
what_needs_to_happen: more efficient and tissue-selective delivery beyond the liver, lower off-target rates, demonstrated durability of edits, and manufacturing that scales from bespoke ex-vivo therapies toward in-vivo dosing
closest_companies:
  - Prime Medicine
  - Beam Therapeutics
  - Verve Therapeutics
  - Intellia Therapeutics
closest_labs:
  - Liu Lab (Broad Institute, prime and base editing invention)
  - Doudna Lab (UC Berkeley and IGI)
  - Musunuru Lab (University of Pennsylvania, in-vivo cardiac editing)
commercialisation_status: regulatory_review
regulatory_complexity: very-high
capex_intensity: high
defensibility: high
notes: "Split out from the old bundled dna-data-storage primitive to isolate the therapeutic gene-correction modality from digital storage and molecular recording. TRL 6 with human-pilot evidence: Prime Medicine's PM359 prime editor for p47phox chronic granulomatous disease reported first-in-human success in NEJM, with edited cells reaching 69 to 83 percent DHR-positive neutrophils, and a Wilson's disease program targeting first-in-human by 2026. Beam's base-editing BEAM-101 treated 40-plus sickle-cell patients in the BEACON trial. Ex-vivo cell therapies are more mature (TRL 7) than in-vivo dosing (TRL 6) because delivery is the gating problem. Tag E.3 for in-vivo cell editing."
momentum:
  papers: 8341
  cagr_pct: 47.3
  fwci: 10.85
  industry_share_pct: 8.2
  citation_mass: 1647.0
  on_topic_n: 110
  buildable_whitespace: 12/25
  confidence: high
  status: early-startups
  as_of: 2026-07
last_verified: "2026-07-07"
---

## Mechanism

Prime and base editing are precise, programmable ways to rewrite DNA in living cells without cutting both strands. Base editing fuses a CRISPR targeting protein to a deaminase that chemically converts one base to another, correcting single-nucleotide mutations. Prime editing goes further: a guide RNA both finds the target site and carries a template, and a fused reverse transcriptase performs a search-and-replace edit that can fix point mutations and small insertions or deletions. Avoiding double-strand breaks means far less collateral genome damage than earlier nuclease editing. The editors are delivered to cells outside the body (ex vivo) or directly to tissue in the body (in vivo) using lipid nanoparticles and viral vectors.

## What it unlocks

Durable, potentially one-time genetic cures for inherited disease. Ex vivo, a patient's own stem or immune cells are corrected, selected, and reinfused, the route Prime Medicine's PM359 took to restore neutrophil function in chronic granulomatous disease. In vivo, the editor is dosed directly, as Verve pursues for cardiovascular targets and Prime is developing for Wilson's disease. Because the edit is written into the genome, a single treatment can in principle correct the underlying defect for life rather than managing symptoms.

## Translational gap

The honest TRL is 6, with human-pilot data in hand. The central bottleneck is delivery: getting enough editor into the right cells, especially tissues beyond the liver, without off-target edits. Durability of the correction, off-target safety, and manufacturing that scales from bespoke ex-vivo products toward in-vivo dosing all remain open. Ex-vivo cell therapies sit slightly ahead at TRL 7 precisely because they sidestep in-body delivery. The unlocks are more efficient, tissue-selective delivery, lower off-target rates, and demonstrated long-term durability.

## Notes

This is a therapeutic modality, distinct from the two other primitives split out of the old bundle. Prime editing also enables `molecular-recording`, where the same search-and-replace chemistry writes ordered barcodes into a genomic tape as a research tool rather than to cure disease. That shared chemistry is why the two primitives are linked, but they are separate: one corrects mutations in patients, the other logs biological events for readout. Prime Medicine belongs here, not in molecular-recording. Tag E.3 for in-vivo cell editing; regulatory complexity is very-high given genome-modifying therapeutics.
