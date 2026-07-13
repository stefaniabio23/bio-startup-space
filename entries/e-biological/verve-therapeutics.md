---
id: verve-therapeutics
name: Verve Therapeutics
website: https://www.vervetx.com/
founded: 2018
area: In-vivo base editing for cardiovascular disease
substrate_family: E
substrate_tags:
  - E.3
  - D.4
technology_platform_ids:
  - prime-base-editing
technology_platform_name: "In-vivo base editing"
funding_stage: acquired
total_funding_usd_m: 750
public: false
business_model: owned_pipeline
buyer:
  - pharma
  - payer
  - provider
customer:
  - pharma
  - payer
  - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 30000
new_capability: "One-time in-vivo base edit of the liver that switches off a cholesterol-driving gene such as PCSK9, aiming to lower LDL for life from a single infusion instead of lifelong daily therapy."
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
  - licensed
moat:
  - clinical-evidence
  - IP
  - capital
primary_value_chain_layer: therapeutic development
input:
  - target-gene-selections-pcsk9-angptl3-lpa
  - base-editor-guide-rna-payloads
  - lipid-nanoparticle-delivery-vehicles
transformation_type: generate
output:
  - in-vivo-base-edited-liver-cells
  - one-time-cardiovascular-gene-editing-therapeutics
technology_readiness_level: 6
limiting_factor: "N/A (acquired by Eli Lilly, July 2025); prior blocker was durable in-vivo delivery and long-term safety of liver base editing at scale."
commercialisation_status: acquired
barrier_to_entry: very-high
barrier_to_entry_logic: "Requires licensed base-editing IP, proprietary LNP delivery chemistry tuned to the liver, and a first-in-class clinical safety dataset for in-vivo genome editing that very few groups can assemble."
hardness: very-hard
hardness_reason: "Proving that a permanent, one-time edit of a healthy person's DNA is safe and durable over decades in a large cardiovascular-prevention population is unproven and unforgiving of any off-target or long-term risk."
last_verified: "2026-07-13"
---

## One-liner

Verve Therapeutics develops one-time in-vivo base-editing medicines that switch off cholesterol-driving genes such as PCSK9, ANGPTL3, and LPA in the liver, aiming to replace lifelong cardiovascular drugs with a single "one-and-done" infusion.

## Problem

Cardiovascular disease is driven by chronically elevated LDL cholesterol and lipoprotein(a), yet the standard of care depends on patients taking daily pills or regular injections for life. Adherence decays over years, and a large fraction of high-risk patients never reach their lipid targets, so preventable heart attacks and strokes keep happening despite effective drugs existing.

## Workaround

Statins, ezetimibe, PCSK9-inhibiting antibodies, and siRNA therapies lower LDL but must be taken repeatedly, indefinitely, and stop working when a patient stops. None of them alter the underlying gene, so the effect lasts only as long as dosing continues.

## Entry wedge

Verve chose PCSK9 as the first target because rare humans born with PCSK9-inactivating mutations have very low LDL and low heart-disease risk with no apparent harm, which de-risks the biology of switching the gene off. VERVE-102 uses base editing delivered by lipid nanoparticles to make that same edit in the liver, and a single infusion cut LDL-C by more than 50 percent in patients with heterozygous familial hypercholesterolemia in a Phase 1b trial.

## Method

A base editor, a guide RNA plus a deaminase fused to a Cas protein, is delivered to liver cells inside the body by a lipid nanoparticle. The editor chemically converts a single DNA base in the target gene without cutting both strands, introducing a stop or splice-disrupting change that switches the gene off permanently. Because hepatocytes carry the edit for their lifetime, the LDL-lowering effect is designed to persist from one dose. Lead programs target PCSK9 (VERVE-102), ANGPTL3 (VERVE-201), and LPA (VERVE-301).

## Validated by

VERVE-102 received FDA Fast Track designation in April 2025 and, in its Phase 1b trial, a single infusion reduced LDL-C by more than 50 percent in HeFH patients, an early human proof of concept for in-vivo cardiovascular base editing. Eli Lilly acquired Verve in July 2025 for approximately 1.0 billion USD upfront (10.50 USD per share) plus a contingent value right worth up to 3.00 USD per share, valuing the deal at up to 1.3 billion USD, an explicit large-pharma validation of the approach.

## Competes with

Beam Therapeutics and Intellia Therapeutics (in-vivo base and CRISPR editing of liver lipid genes), CRISPR Therapeutics (CTX310/CTX321 targeting ANGPTL3 and LPA), and the incumbent chronic-therapy players in lipid lowering: Amgen and Novartis (PCSK9 antibody and siRNA), plus small-molecule statin regimens.

## Complements

Lipid-nanoparticle and delivery-chemistry suppliers, base-editing IP licensors, cardiology providers and payers who would prescribe and reimburse a one-time therapy, and now Eli Lilly's cardiometabolic development, manufacturing, and commercial infrastructure.

## Value chain position

**Downstream of:** human genetics of protective lipid mutations, base-editing science, LNP delivery chemistry, and target validation for PCSK9, ANGPTL3, and LPA.

**Upstream of:** cardiology practice, payers reimbursing durable one-time therapies, and Eli Lilly's cardiovascular pipeline that now owns and advances the programs.

## Gaps

No approved product; lead programs are early clinical (Phase 1b) at acquisition. Long-term durability and safety of a permanent liver edit in a large prevention population are unproven, and a prior VERVE-101 program was slowed by delivery and safety signals before the shift to VERVE-102. As a wholly owned Lilly subsidiary, Verve no longer discloses standalone financials or an independent pipeline cadence.

## Notes

Substrate is in-vivo edited liver cells (E.3) producing a therapeutic edit (D.4); linked to the `prime-base-editing` primitive, which names Verve as a closest company for the in-vivo therapeutic gene-correction capability. Verve's mechanism is base editing (single-base conversion), not prime editing, and the primitive bundles both.

Founded 2018 in Boston by Sekar Kathiresan, a Harvard cardiologist and human geneticist. IPO June 2021 on Nasdaq under ticker VERV, raising about 267 million USD; total capital raised across private rounds plus IPO is roughly 750 million USD (estimate, exact cumulative figure not cleanly disclosed, flagged uncertain). Eli Lilly completed the acquisition on July 25, 2025 after the tender offer expired July 23, 2025; VERV was delisted from Nasdaq on completion. funding_stage set to `acquired` and commercialisation_status to `acquired` per the Lilly deal; limiting_factor is N/A as an acquired entity.

## News signals
- 2025-07: Eli Lilly completed its acquisition of Verve Therapeutics for approximately 1.0 billion USD upfront plus a CVR worth up to 3.00 USD per share, up to 1.3 billion USD total. (source: https://www.prnewswire.com/news-releases/lilly-completes-acquisition-of-verve-therapeutics-to-advance-one-time-treatments-for-people-with-high-cardiovascular-risk-302513948.html)
- 2025-06: Lilly announced the definitive agreement to acquire Verve at 10.50 USD per share upfront plus a 3.00 USD CVR, valuing Verve's in-vivo cardiovascular editing pipeline. (source: https://investor.lilly.com/news-releases/news-release-details/lilly-acquire-verve-therapeutics-advance-one-time-treatments)
- 2025-04: VERVE-102 received FDA Fast Track designation; a single infusion later reduced LDL-C by more than 50 percent in HeFH patients in Phase 1b. (source: https://vervetx.gcs-web.com/news-releases/news-release-details/verve-therapeutics-announces-pipeline-progress-and-anticipated/)
