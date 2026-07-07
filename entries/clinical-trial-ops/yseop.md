---
id: yseop
name: Yseop
website: yseop.com
founded: 2007
area: regulatory writing
funding_stage: series-b
total_funding_usd_m: 25
public: false
business_model: saas
buyer:
  - pharma
  - biotech
  - cro
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 4000
data_centrality: important-enabler
data_ownership:
  - customer-generated
  - proprietary
moat:
  - model
  - regulatory-trust
  - IP
  - distribution
primary_value_chain_layer: regulatory and medical writing automation
input:
  - "clinical trial datasets and statistical outputs"
  - "study protocols and analysis plans"
  - "prior submission documents and templates"
  - "regulatory content standards"
transformation_type: generate
output:
  - "draft clinical study reports (CSRs)"
  - "patient and safety narratives"
  - "protocols and submission-ready regulatory documents"
  - "compliance and quality-control checks on generated content"
barrier_to_entry: high
barrier_to_entry_logic: Regulatory-grade output demands traceability and auditability that generic LLMs cannot guarantee; Yseop's composite symbolic-plus-LLM approach and pharma validation (Novartis, Lilly) are hard to replicate.
hardness: hard
hardness_reason: Producing submission-grade documents accurate and traceable enough that regulatory writers trust them, in an environment where a hallucinated fact can derail a filing.
substrate_family: B
substrate_tags:
- B.4
technology_platform_ids:
  - ai-trial-operations
new_capability: "Regulatory-grade generative drafting of CSRs, patient narratives, and protocols with traceable audit trails."
technology_readiness_level: 8
commercialisation_status: commercial_early
customer:
  - pharma
  - cro
  - biotech
limiting_factor: "Output still requires human review and sign-off by medical writers."
last_verified: "2026-07-07"
---

## One-liner

Regulatory-grade generative AI that drafts clinical and regulatory documents (CSRs, patient narratives, protocols) to submission-ready quality.

## Problem

Producing clinical study reports and regulatory narratives is slow, manual, and expensive, and medical writers are a scarce bottleneck on the path from data lock to submission.

## Workaround

Manual medical writing teams, CRO writing services, document templates, and generic LLM assistants that lack the traceability regulators require.

## Entry wedge

Automating clinical study report and patient-narrative drafting, the highest-volume, most templated regulatory documents, where writer time is most concentrated.

## Method

A composite AI approach that combines large language models with symbolic AI, structured data models, and retrieval techniques to generate documents with the accuracy, traceability, and audit trail regulated submissions require. Delivered as Yseop Copilot for regulatory and medical writing teams.

## TAM logic

The regulatory and medical writing automation market sits in the low single-digit billions, driven by rising submission volumes and a persistent shortage of qualified medical writers. Value scales with every trial a sponsor runs, since each generates multiple mandatory documents.

## Validated by

Won the 2026 BIG Innovation Award for regulatory writing automation. Strategic investors include Novartis (via dRx Capital) and Eli Lilly, alongside NextStage AM and Wille Finance; Claret Capital added €10M in growth funding. Yseop Copilot supported 150+ (2024: 165+) clinical trials.

## Competes with

ArisGlobal (regulatory content within LifeSphere), Certara's regulatory writing services, CRO medical-writing arms (IQVIA, ICON), and generic enterprise GenAI document tools.

## Complements

EDC and statistical analysis platforms that produce the trial data and outputs Yseop drafts from, regulatory submission and publishing systems (Veeva Vault) downstream, and CROs running the trials.

## Value chain position

**Downstream of:** Clinical trial conduct, statistical analysis, database lock
**Upstream of:** Regulatory submission, agency review, approval

## Gaps

Output still requires human review and sign-off, so it augments rather than replaces medical writers. Total funding is modest relative to incumbents, and regulatory-content platforms (ArisGlobal, Veeva) can bundle competing generation features. Precise cumulative funding is not fully disclosed.

## Notes

French company founded in 2007 by Alain Kaeser, based on research at ENS Paris-Saclay, with offices in Paris, Lyon, and New York. total_funding_usd_m (~$25M) is an approximation combining disclosed strategic and growth rounds; exact cumulative total is not public. Pharma-investor backing doubles as commercial validation.

## News signals
- 2026-01: Won the 2026 BIG Innovation Award for transforming regulatory writing with generative AI. (source: https://yseop.com/news-and-press-releases/yseop-wins-2026-big-innovation-award-for-transforming-regulatory-writing-with-generative-ai/)
- 2023-12: Closed a strategic investment round with new investor Novartis (dRx Capital) joining Eli Lilly and existing backers. (source: https://yseop.com/news-and-press-releases/yseop-announces-strategic-investment-and-celebrates-milestone-of-150-clinical-trials-powered-by-generative-ai/)
