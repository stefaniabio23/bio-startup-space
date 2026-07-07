---
id: dna-archival-storage
name: DNA archival storage
aliases:
  - DNA data storage
  - molecular data storage
  - DNA cold storage
substrate_family: D
substrate_tags:
  - B.6
  - D.2
enabled_by: enzymatic, template-independent DNA synthesis on semiconductor chips plus high-throughput sequencing, which together make writing and reading arbitrary digital data in DNA cheap and parallel enough to compete with tape for cold archives
mechanism: digital bits are mapped to nucleotide sequences, written by chip-controlled enzymatic synthesis into pooled DNA strands, stored dry at room temperature, and later read back by sequencing with error-correcting codecs
new_capability: petabyte-class digital archives at molecular density that survive for decades to centuries without power
what_it_could_unlock: cold-data archives orders of magnitude denser and more durable than magnetic tape, plus the eventual ability to search and compute over data while it stays in DNA
capabilities:
  - capability: Archival digital storage
    what_it_could_unlock: Ultra-dense, low-energy cold-data archives that outlive tape
    mechanism: Digital bits are encoded into DNA sequence, stored dry, and read by sequencing
    technology_readiness_level: 6
    translational_gap: Write cost, write speed, random access, error correction
    closest_companies:
      - Biomemory
      - Atlas Data Storage
  - capability: DNA-based compute and search on stored data
    what_it_could_unlock: Querying or filtering archives without sequencing the whole pool
    mechanism: Molecular operations select or transform strands directly in the DNA pool
    technology_readiness_level: 3
    translational_gap: Reliable random access, primitive operation set, error accumulation
    closest_companies:
      - Biomemory
      - Catalog Technologies
related_primitives:
  - molecular-recording
use_cases:
  - high-density, decades-durable archival cold storage
  - power-free offline data preservation and disaster backup
  - tamper-evident provenance and long-term regulatory archives
  - in-pool search and compute over molecular archives
technology_readiness_level: 6
evidence_level: in_vitro
translational_gap: write cost and write speed are still orders of magnitude off tape, random access into a pooled archive is immature, and read latency plus error-correction overhead confine the technology to true cold data
what_needs_to_happen: faster, cheaper semiconductor-controlled enzymatic synthesis, robust random-access schemes, and standardised error-tolerant codecs that make write economics competitive for enterprise cold storage
closest_companies:
  - Biomemory
  - Atlas Data Storage
  - Twist Bioscience
  - Catalog Technologies
  - DNA Script
closest_labs:
  - Ceze and Strauss Molecular Information Systems Lab (University of Washington and Microsoft)
  - Church Lab (Harvard and Wyss Institute)
  - Grass Lab (ETH Zurich)
commercialisation_status: pilot_deployment
regulatory_complexity: low
capex_intensity: high
defensibility: high
notes: "Split out from the old bundled dna-data-storage primitive to isolate the pure digital-storage mechanism from biological molecular recording. TRL 6 reflects commercial pilots: Biomemory ships dry-DNA cards rated for 50 to 150 years and acquired Catalog's enzymatic read/write assets in early 2026, while Atlas Data Storage (Twist spin-off) partnered with imec to scale chip-based synthesis toward terabyte-scale drives. Tags cross families: B.6 for the synthesis substrate, D.2 for the read side sharing sequencing hardware."
momentum:
  papers: 840
  cagr_pct: 30.2
  fwci: 3.23
  industry_share_pct: 0.0
  citation_mass: 139.0
  on_topic_n: 6
  buildable_whitespace: 20/25
  confidence: low
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: commercialising-now
  paper_cagr_pct: 29.8
  mean_fwci: 3.86
  industry_share: 0.031
  patent_total: 383
  patent_cagr_pct: 17.2
  company_share: 0.444
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

DNA archival storage maps digital bits to sequences of A, C, G, and T. A codec adds redundancy for error correction, then chip-controlled enzymatic synthesis writes millions of short strands in parallel. Engineered terminal deoxynucleotidyl transferase (TdT) extends DNA without a template, so a semiconductor array can address many synthesis sites at once. The resulting pool is dried and stored at room temperature, where it is stable for decades. Reading is done by sequencing the pool and decoding the strands back into the original file, with the error-correcting code recovering any dropouts or substitutions.

## What it unlocks

Cold storage that is far denser and more durable than magnetic tape, readable decades later with no power draw. A single gram of DNA can in principle hold petabytes, and dry DNA cards are already rated for 50 to 150 years. The second, earlier capability is doing useful work on data while it stays molecular: selecting, filtering, or searching strands directly in the pool so an archive can be queried without sequencing all of it, which is where Biomemory's Catalog acquisition points.

## Translational gap

The honest TRL is 6: real commercial pilots exist, but the economics only make sense for true cold data. Write cost and write speed remain orders of magnitude off tape, random access into a pooled archive is immature, and read latency plus error-correction overhead add up. The unlocks are faster and cheaper semiconductor-controlled enzymatic synthesis, robust random-access schemes so you can retrieve one file without reading the whole pool, and standardised codecs that make write economics competitive.

## Notes

This primitive is the pure digital-storage mechanism, deliberately separated from `molecular-recording`, which writes biological events rather than arbitrary bits into DNA. They share the read stack (sequencing) and some write chemistry (enzymatic synthesis) but solve different problems and sit at very different maturities. Substrate family assigned D per the map's deeptech framing; tags span B.6 (DNA/RNA synthesis) and D.2 (diagnostic-shared read hardware).
