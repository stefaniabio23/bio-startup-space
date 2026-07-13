---
id: asimov
name: Asimov
website: asimov.com
founded: 2017
area: mammalian synthetic biology
funding_stage: series-b
total_funding_usd_m: 230
public: false
business_model: platform_partnership
buyer:
  - biotech
  - pharma
  - cdmo
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 25000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - model
  - IP
primary_value_chain_layer: biologics cell-line and genetic-construct design
input:
  - biologic molecule and modality specifications
  - genetic-element and vector requirements
  - characterization data on genetic parts and CHO expression
transformation_type: generate
output:
  - optimized genetic constructs and expression vectors
  - engineered CHO host cell lines with predicted stable expression
  - genetic-circuit designs for biologics and gene-therapy manufacturing
barrier_to_entry: high
barrier_to_entry_logic: A library of 2,500-plus characterised genetic elements paired with hybrid mechanistic-plus-ML design software and engineered CHO hosts is a data-and-tooling asset that is slow and capital-heavy to assemble.
hardness: very-hard
hardness_reason: Predicting stable, high-titer expression from genetic-construct sequence across modalities, reliably enough to compress cell-line development, is an unsolved design problem.
substrate_family: E
substrate_tags:
  - E.1
  - C.1
new_capability: "Computer-aided genetic design (Kernel) plus engineered CHO and AAV hosts that design and predict stable, high-titer expression systems, compressing biologics cell-line development to about four months."
technology_readiness_level: 7
commercialisation_status: commercial_early
customer:
  - biotech
  - pharma
  - cdmo
limiting_factor: "N/A"
last_verified: "2026-07-13"
---

## One-liner

Mammalian synthetic-biology company whose Kernel design software plus engineered CHO and AAV host cells design and predict high-titer expression systems for biologics and gene-therapy manufacturing.

## Problem

Cell-line development for biologics and gene therapies is slow and empirical: designing a genetic construct, integrating it, and screening clones for stable high-titer expression takes many months of trial and error, and the result is hard to predict from sequence.

## Workaround

Manual vector design, random or semi-random genomic integration, and large clone-screening campaigns run by CDMOs and pharma process-development teams, with expression outcomes discovered experimentally rather than designed.

## Entry wedge

Built CHO Edge, an integrated system pairing a GS-knockout CHO host and a proprietary hyperactive transposase with a library of 2,500-plus characterised genetic elements and Kernel computer-aided genetic design software, achieving 5 to 10 g/L titers across modalities in a roughly four-month cell-line development timeline. Extended the same tooling to gene therapy via AAV Edge.

## Method

Kernel connects Asimov's models, genetic parts, and hosts into one interface for designing and simulating genetic constructs. Hybrid mechanistic-and-machine-learning models guide codon usage, signal-peptide selection, and genetic-circuit layout; an ML model trained on CHO genome statistics and refined with biophysical predictions boosts titers across antibody formats. Designs run on the engineered CHO or AAV host, and characterization data feeds back into the parts library and models.

## Validated by

$200M raise announced January 2023 (Fifty Years, Andreessen Horowitz, and others), on top of a prior ~$30M including a $25M Series A led by Andreessen Horowitz; total ~$230M disclosed. Multi-year collaboration with DARPA on AI-assisted genetic engineering. Commercial CHO Edge and AAV Edge product lines with CDMO and biopharma customers; 2,500-plus characterised genetic elements and reported 5 to 10 g/L titers.

## Competes with

Cell-line and expression-system incumbents (Lonza's GS Xceed, Thermo Fisher / ATUM, WuXi Biologics platforms) on biologics manufacturing, and emerging AI-genetic-design and synthetic-biology tooling players. On gene-therapy production, AAV process and vector-engineering platforms.

## Complements

CDMOs and pharma process-development teams that manufacture at scale, upstream molecule-design and antibody-discovery companies that supply the biologic to be expressed, and DNA-synthesis suppliers for the designed constructs.

## Value chain position

**Downstream of:** Biologic molecule and antibody discovery, target selection, genetic-part characterisation data.
**Upstream of:** GMP manufacturing, process development, fill-finish, and clinical supply at CDMOs and pharma.

## Gaps

Titer, timeline, and design-prediction claims (5 to 10 g/L, four-month development) are largely self-reported with limited third-party benchmarking. The genetic-circuit and expression-prediction models are proprietary and their generalisation across novel modalities is not independently validated. Precise current funding stage and post-2023 round details are not cleanly disclosed.

## Notes

Founded 2017 in Boston; total disclosed funding ~$230M (~$30M early including $25M Series A, plus the $200M January 2023 raise); funding_stage set to series-b as a best-effort inference from the round sequence, not a confirmed label. Filed under substrate family E (biological) because the core object is engineered mammalian cells and genetic systems; the C.1 tag captures the generative genetic-design engine. commercialisation_status commercial_early and TRL 7 reflect live CHO Edge and AAV Edge products with customers, so limiting_factor is N/A. No primitive linked: the differentiating capability is genetic-circuit / synthetic-biology computer-aided design (Kernel), and the ML layer is task-specific hybrid mechanistic-plus-ML expression modelling rather than a single large pretrained biology foundation model, so biology-foundation-models is not a genuine mechanism match. Primitive-link candidate: a "synthetic-biology-design / genetic-circuit-CAD" primitive (mammalian genetic-construct and expression-system design) would fit Asimov and similar tooling companies; propose before the next batch. TAM is a best-effort placeholder for the cell-line-development and expression-system market.

## News signals
- 2023-01: Asimov raised $200M to advance therapeutics design and manufacturing with synthetic biology, backed by Fifty Years and others. (source: https://www.asimov.com/news/asimov-raises-200-million-to-advance-therapeutics-design-and-manufacturing-with-synthetic-biology)
- 2024-09: Asimov launched AAV Edge, a suite of AI models, host cells, and genetic tools for end-to-end gene-therapy development, accessible via Kernel. (source: https://www.asimov.com/news/asimov-launches-aav-edge)
