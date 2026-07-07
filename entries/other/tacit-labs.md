---
id: tacit-labs
name: Tacit Labs
website: tacitlabs.co
founded: 2025
area: AI drug-discovery evaluation infrastructure
funding_stage: pre-seed
total_funding_usd_m: 0
public: false
business_model: partnerships
buyer:
  - biotech
  - pharma
buyer_urgency: medium
buyer_wtp: high
sales_cycle: medium
regulatory_burden: none
tam_usd_m: 5000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
  - partner-supplied
moat:
  - data
  - IP
primary_value_chain_layer: AI training data and evaluation infrastructure
input:
  - real-world scientific tasks from biotech and academic partners
  - experimental and outcome data from drug-discovery workflows
  - verification methods stitched from across the ecosystem
transformation_type: generate
output:
  - outcome-verifiable datasets on how science is actually conducted
  - long-horizon evaluations testing linked decisions across drug discovery and development
  - benchmarks and training signal for frontier life-science LLMs
barrier_to_entry: high
barrier_to_entry_logic: Building outcome-verifiable, long-horizon scientific datasets requires deep access to real experimental workflows, verification tooling, and rare talent that has both trained frontier LLMs and run wet-lab platforms; the data and the verification design are the moat and cannot be scraped.
hardness: very-hard
hardness_reason: Encoding multi-step, real-world drug-discovery reasoning into verifiable evals and datasets that actually improve frontier models is an unsolved problem at the frontier of AI-for-science.
substrate_family: A
substrate_tags:
- A.3
technology_platform_ids: []
new_capability: "Outcome-verifiable, long-horizon drug-discovery evaluations and datasets to train and benchmark frontier life-science LLMs."
technology_readiness_level: 4
commercialisation_status: research_only
customer:
  - pharma
  - biotech
limiting_factor: "No product shipped; unproven whether frontier labs will pay for these evals versus building them in-house."
last_verified: "2026-07-07"
---

## One-liner

Tacit Labs builds outcome-verifiable datasets and long-horizon evaluations of real drug-discovery reasoning, the training and benchmarking substrate frontier AI labs need to build life-science LLMs.

## Problem

Frontier language models are improving fast on generic reasoning but have little verifiable training signal for the long, linked decision chains of real drug discovery and development. There is no good way to measure whether an AI system can plan and reason across an actual discovery loop, so labs cannot systematically improve models on the tasks that matter for autonomous science.

## Workaround

Frontier labs rely on generic benchmarks, narrow QA-style bio evals, and academic datasets that do not capture how science is actually conducted. Biotechs experiment with off-the-shelf models internally with no shared, verifiable measure of scientific reasoning quality.

## Entry wedge

Long-horizon evaluations that test whether AI systems can make linked decisions across drug discovery and development, built by combining biological foundation models with real experimental data. The wedge is verification: partner with biotech and academic labs to source high-value real-world scientific tasks, stitch verification methods into increasingly realistic discovery loops, and sell that evaluation and dataset signal to frontier AI laboratories.

## Method

Tacit collaborates with biotechnology companies and academic laboratories to evaluate models on high-value, outcome-verifiable scientific tasks, then partners with frontier AI labs to systematically improve model performance on those tasks. The evals stitch together verification methods from across the ecosystem into progressively longer, more realistic drug-development loops. Over time these loops are meant to converge toward the inference-time infrastructure required for autonomous drug discovery at scale.

## TAM logic

The buyers with the highest willingness to pay are frontier AI labs racing to build scientific reasoning, plus biotech and pharma seeking model-centric discovery. Data and eval infrastructure for AI-for-science is nascent and hard to size; anchoring against frontier-lab data and eval spend and the model-centric discovery-tooling market puts a speculative reachable TAM in the low single-digit billions. $5B is a rough placeholder, not a validated figure. (Source: tacitlabs.co/introducing-tacit-labs; figure is an estimate)

## Validated by

Very thin public data. Founders Nicole Fitzgerald and Anne Marie Droste describe a team that has trained frontier LLMs, scaled experimental platforms, and brought drugs to the clinic. Reported as venture-backed and San Francisco-based, with an early-stage round associated with Base Case Capital (Alana Goyal) and angel backers including Thomas Wolf (Hugging Face), Jonathan Frankle (Databricks/MosaicML), Matthew Leavitt (Datology), Terrence Rohan, Soleio, and Dan Shipper. Funding amount is undisclosed.

## Competes with

Other AI-for-science data and eval players (FutureHouse on autonomous research, Lila Sciences, Periodic Labs), scientific-benchmark and RL-environment vendors serving frontier labs (Scale AI, Surge, Mercor-style expert-data providers moving into science), and in-house eval teams at the frontier labs themselves.

## Complements

Frontier AI labs (the primary customers), biological foundation-model builders, biotech and academic wet labs that supply real tasks and experimental data, and autonomous-lab and lab-automation platforms that could consume the resulting inference-time infrastructure.

## Value chain position

**Downstream of:** Real experimental workflows at biotech and academic labs, biological foundation models, verification tooling
**Upstream of:** Frontier life-science LLM training and evaluation; the eventual inference-time stack for autonomous drug discovery

## Gaps

Public information is extremely thin: no confirmed founding date (2025 is inferred), no disclosed funding amount, no product shipped, no named partners or customers, no published benchmark. Whether outcome-verifiable long-horizon science evals can be built at scale, and whether frontier labs will pay for them versus building in-house, are both unproven. Treat all quantitative fields here as low-confidence.

## Notes

Applied research lab at the intersection of AI and the life sciences, San Francisco. Founded date, stage, and funding are inferred from sparse public sources and should be re-verified. The thesis relevance is upstream-adjacent: Tacit builds the data and evaluation layer that would feed the model-centric, autonomous drug-discovery companies the clinical-inference thesis cares about, rather than competing directly. Flagged as thin-data.

## News signals
- 2026-03: Tacit Labs, founded by Nicole Fitzgerald and Anne Marie Droste, publicly introduced itself as an applied AI x life-sciences research lab building outcome-verifiable datasets and long-horizon drug-discovery evals for frontier AI labs; an early-stage venture round (undisclosed amount) associated with Base Case Capital and angel investors was reported around this time. (source: https://www.tacitlabs.co/introducing-tacit-labs)
