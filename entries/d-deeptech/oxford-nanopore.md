---
id: oxford-nanopore
name: Oxford Nanopore Technologies
website: nanoporetech.com
founded: 2005
area: nanopore sequencing
substrate_family: D
substrate_tags:
  - D.2
  - D.3
  - A.1
technology_platform_ids:
  - nanopore-sensing
technology_platform_name: Nanopore sensing (MinION, GridION, PromethION)
funding_stage: public
total_funding_usd_m: 950
public: true
business_model: device_consumables
buyer:
  - academic_lab
  - biotech
  - pharma
  - provider
customer:
  - academic_lab
  - biotech
  - pharma
  - provider
buyer_urgency: medium
buyer_wtp: high
sales_cycle: medium
regulatory_burden: heavy
tam_usd_m: 25000
new_capability: Real-time, direct sequencing of native long DNA and RNA on portable to benchtop devices, no amplification, reading base modifications directly.
data_centrality: important-enabler
data_ownership:
  - customer-generated
  - proprietary
moat:
  - IP
  - wet-lab
  - distribution
  - capital
primary_value_chain_layer: Sequencing instrument and consumables provider
input:
  - native DNA samples
  - native RNA samples
  - purified nucleic acids
transformation_type: measure
output:
  - long-read DNA sequence
  - direct RNA sequence
  - base modification calls (methylation)
technology_readiness_level: 9
limiting_factor: N/A
commercialisation_status: commercial_scaled
barrier_to_entry: very-high
barrier_to_entry_logic: Two decades of protein-pore engineering, motor enzyme IP, ASIC sensor arrays, and basecalling models plus an installed base and manufacturing scale.
hardness: very-hard
hardness_reason: Reading single molecules electrically at single-base resolution requires coupled advances in pore chemistry, enzyme control, sensor electronics, and ML basecalling.
last_verified: "2026-07-06"
---

## One-liner

Nanopore sequencing devices that read native DNA and RNA in real time, from a pocket-sized MinION to the datacentre-scale PromethION.

## Problem

Legacy sequencing amplifies and fragments samples, loses long-range structure and native base modifications, and locks users into large fixed instruments in centralised labs.

## Workaround

Illumina short-read sequencing plus PCR amplification, separate methylation assays (bisulfite sequencing), and PacBio long-read platforms for the assembly niche.

## Entry wedge

Portability and read length. The MinION put a full sequencer on a USB stick for field genomics and rapid pathogen surveillance, a use case short-read incumbents could not serve, then scaled up into GridION and PromethION for high-throughput labs.

## Method

Strands are threaded through a biological protein nanopore embedded in a membrane over an ASIC sensor array. A motor enzyme ratchets the strand base by base; each k-mer produces a characteristic ionic current disruption that ML basecallers translate into sequence, including modified bases, without amplification.

## Validated by

LSE-listed (ticker ONT); 2025 revenue of GBP 223.9M, up 24.2% constant-currency, with clinical revenue up ~60%. First IVD product GridION Dx registered; GridION Q progressing toward CE-IVD submission. Ended 2025 with ~GBP 302M cash. Thousands of peer-reviewed publications across genomics, metagenomics, and transcriptomics.

## Competes with

Illumina (short-read, market leader), PacBio (HiFi long-read), and emerging Chinese nanopore entrants Qitan Technology, AxBio, and Genvida on the sequencing side.

## Complements

Downstream bioinformatics and clinical interpretation platforms, sample-prep vendors, and diagnostics developers building assays on the nanopore chemistry. Nanopore-based protein sequencing efforts (Genopore) build methods on the same MinION platform.

## Value chain position

**Downstream of:** sample collection and nucleic-acid extraction kits, ASIC foundries, protein-pore and enzyme engineering
**Upstream of:** genome assembly, variant calling, methylation analysis, clinical diagnostics, pathogen surveillance

## Gaps

Per-read raw accuracy historically trailed short-read; the open question is whether clinical and regulated markets adopt fast enough to reach sustained profitability against Illumina's entrenched clinical distribution.

## Notes

The reference incumbent and platform owner for the entire nanopore category. New entrants (protein sequencing, cheaper CMOS arrays) both compete with and depend on the ecosystem Oxford Nanopore established. Transition to clinical and IVD markets plus new CEO signals a push from research tool toward regulated diagnostics.

## News signals
- 2026-03: Reported FY2025 revenue of GBP 223.9M, up 24.2% constant-currency, clinical revenue up ~60%, reaffirming path to EBITDA breakeven. (source: https://www.ipgroupplc.com/news-and-events/portfolio-news/2026/2026-03-02)
- 2025-09: H1 2025 results showed revenue up 26% and registration of first IVD product GridION Dx. (source: https://nanoporetech.com/api/assets/f/196663/x/ae7313cac5/ont-interim-results-2025-final.pdf)
