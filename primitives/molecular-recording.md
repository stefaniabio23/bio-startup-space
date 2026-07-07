---
id: molecular-recording
name: Molecular recording
aliases:
  - in-vivo molecular recorders
  - DNA typewriter
  - genomic event recording
  - cellular flight recorder
substrate_family: E
substrate_tags:
  - E.3
  - E.1
enabled_by: prime editing and recombinase systems that append short, ordered DNA marks inside a living cell, plus single-cell sequencing to decode the accumulated log, which together let a genome act as a durable tape for biological events
mechanism: engineered editors write symbol barcodes into a genomic tape in time order as cellular events occur, so lineage, signalling history, and transient exposures are recorded in DNA and later reconstructed by sequencing
new_capability: a molecular flight recorder that logs the chronological history of a cell's biology into its own genome for retrospective readout
what_it_could_unlock: reconstructing the order of cancer mutations, immune-cell fate, developmental lineage, or drug and stress exposures from DNA that no imaging modality can capture
capabilities:
  - capability: In vivo lineage and event recording
    what_it_could_unlock: Cancer evolution maps, immune-cell fate tracking, developmental lineage trees
    mechanism: Prime editing sequentially inserts ordered barcodes into a genomic DNA tape
    technology_readiness_level: 3
    translational_gap: Delivery, temporal resolution, cell safety, decoding burden
    closest_companies:
      - none commercial (academic frontier)
  - capability: Neural and transcriptome molecular recording
    what_it_could_unlock: Logging brain activity or drug-exposure responses beyond electrode limits
    mechanism: Activity- or signal-dependent changes are captured into DNA or RNA records
    technology_readiness_level: 2
    translational_gap: Temporal resolution, signal-to-noise, delivery, perturbation
    closest_companies:
      - none commercial (academic frontier)
related_primitives:
  - dna-archival-storage
  - prime-base-editing
  - spatial-omics
use_cases:
  - chronological cancer and inflammation event tracing
  - in-vivo developmental lineage tracing
  - transient drug- and stress-exposure logging
  - neural-activity recording into cellular DNA
technology_readiness_level: 3
evidence_level: in_vivo_animal
translational_gap: delivery into target cells, limited recording capacity and temporal resolution, cell safety of repeated genome edits, and the sequencing and decoding burden all keep this research-only with no clinical or regulatory path for a genome-modifying recorder
what_needs_to_happen: higher-capacity, safe, reversible recording chemistries with better temporal resolution, efficient in-vivo delivery, and low-cost decoding, before any diagnostic or research-tool product is viable
closest_companies:
  - none commercial (academic frontier)
closest_labs:
  - Shendure Lab (University of Washington, DNA Typewriter and ENGRAM)
  - Lu Lab (MIT, SCRIBE and recombinase-based recorders)
  - Shipman Lab (Gladstone Institutes, CRISPR-based recording)
  - Kalhor Lab (Johns Hopkins University, lineage barcoding)
commercialisation_status: research_only
regulatory_complexity: high
capex_intensity: medium
defensibility: high
notes: "Split out from the old bundled dna-data-storage primitive as its own research primitive: writing biological events, not digital data, into a genome. Frontier is essentially all academic (Shendure DNA Typewriter and ENGRAM, Lu SCRIBE, peCHYRON). Deliberately does NOT list Prime Medicine as a closest company: Prime Medicine does therapeutic gene correction (see prime-base-editing), a different primitive, even though it shares the prime-editing write chemistry. TRL 3 with in-vivo animal evidence for lineage recording; neural and transcriptome recording is earlier at TRL 2. Tags span E.3 (in-vivo cells) and E.1 (synthetic bio) for the engineered recording circuits."
last_verified: "2026-07-07"
---

## Mechanism

Molecular recording turns a living cell's genome into a tape. Engineered editors append short DNA marks over time as events happen, so the sequence accumulates an ordered log that sequencing can later reconstruct into a timeline. The Shendure lab's DNA Typewriter uses prime editing to make sequential insertions into an engineered genomic region: a prime editor plus a set of guide RNAs each carrying a unique barcode inserts symbols one after another. Directional systems like peCHYRON and ENGRAM extend this, encoding cell type, signal duration, and pathway activity, while other recorders capture transcriptome-level stress or drug-exposure responses.

## What it unlocks

A way to read a cell's history that no imaging modality provides. Because the marks accrue in order, you can reconstruct the sequence in which cancer mutations or inflammatory events occurred, trace how a single cell expanded into a lineage during development, or log which signalling pathways fired and when. Pushed further, activity-dependent recorders could log neural firing or transient drug exposures into DNA for later batch readout, a molecular flight recorder for biology.

## Translational gap

This is research-only at TRL 3. The blockers are delivery into the target cells, limited recording capacity and coarse temporal resolution, the safety of repeatedly editing a living genome, and the cost and burden of decoding the log by single-cell sequencing. Critically, there is no clinical or regulatory path for a diagnostic that permanently edits the genome to record events. The unlocks are higher-capacity, safe, reversible recording chemistries with finer temporal resolution, efficient in-vivo delivery, and cheaper decoding.

## Notes

Kept separate from `dna-archival-storage` on purpose: that primitive writes arbitrary digital bits into synthetic DNA, this one writes biological events into a living genome. They share sequencing on the read side and prime-editing chemistry on the write side, which is why they are linked, but they solve different problems. Also distinct from `prime-base-editing`: molecular recording borrows the same editors as a research tool, whereas prime-base-editing is a therapeutic gene-correction modality. That is why Prime Medicine is not listed here.
