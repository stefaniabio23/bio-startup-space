---
id: talkiatry
name: Talkiatry
website: talkiatry.com
founded: 2019
area: mental health telehealth
funding_stage: series-d-plus
total_funding_usd_m: 452
public: false
business_model: reimbursement
buyer:
  - consumer
  - payer
  - provider
buyer_urgency: high
buyer_wtp: medium
sales_cycle: short
regulatory_burden: medium
tam_usd_m: 92000
data_centrality: important-enabler
data_ownership:
  - proprietary
  - customer-generated
moat:
  - distribution
  - capital
  - data
  - regulatory-trust
primary_value_chain_layer: psychiatric care delivery
input:
  - patient symptom and history questionnaire
  - insurance eligibility data
  - clinician-patient encounter records
  - medication management data
transformation_type: monitor
output:
  - psychiatric evaluation and diagnosis
  - medication management plans
  - ongoing telepsychiatry sessions
  - AI-assisted clinical documentation
barrier_to_entry: high
barrier_to_entry_logic: Credentialing 800+ full-time psychiatrists in-network with major payers across 47 states, combined with proprietary scheduling and AI documentation infrastructure, took years and significant capital to build.
hardness: hard
hardness_reason: Sustaining high-quality psychiatric care at scale while moving toward value-based risk contracts requires outcome data and payer alignment that is slow to accumulate.
substrate_family: F
substrate_tags:
- F.1
technology_platform_ids: []
new_capability: "Full-stack W-2 psychiatrist group delivering in-network telepsychiatry and medication management across 47 states."
technology_readiness_level: 9
commercialisation_status: commercial_scaled
customer:
  - consumer
  - payer
  - provider
limiting_factor: "High fixed-cost employment model and clinical differentiation from primary-care psychiatry is unpublished."
last_verified: "2026-07-07"
---

## One-liner

Employs full-time psychiatrists to deliver in-network telepsychiatry to patients in 47 states, operating as a full-stack psychiatric provider group rather than a marketplace.

## Problem

Psychiatric care in the US is severely supply-constrained: most psychiatrists do not accept insurance, wait times run months, and behavioral health remains carved out of primary care with poor follow-through on medication management.

## Workaround

Primary care physicians prescribing psychiatric medications off-specialty, long waits for in-person psychiatrists, therapy-only platforms (BetterHelp, Talkspace) without medication management, and emergency department visits for psychiatric crises.

## Entry wedge

Founded in 2019 by Robert Krayn and Dr. Georgia Gaveras. The initial wedge was accepting insurance as in-network psychiatrists, which most competitors avoided. This opened the patient funnel to the vast majority who could not afford out-of-pocket psychiatric care. Early focus was on medication management for common conditions (depression, anxiety, ADHD), building clinical protocols and matching infrastructure before expanding to higher-acuity conditions.

## Method

Talkiatry employs psychiatrists as full-time W-2 staff rather than 1099 contractors, which enables standardization of care protocols, performance tracking, and proprietary AI tooling. An online intake questionnaire pre-screens patients and matches them to a psychiatrist by condition, geography, and availability. The first appointment is 60-90 minutes; follow-ups typically every 4-8 weeks. The platform uses AI documentation tools to reduce administrative load on clinicians. Talkiatry is building toward value-based and risk-based contracts with payers, citing outcomes on treatment-resistant depression and ADHD as evidence of clinical differentiation.

## TAM logic

US behavioral health spending is approximately $92B annually and growing at ~5% per year, driven by rising prevalence of mental health conditions post-pandemic and expanding parity law enforcement. Talkiatry's effective addressable market is the subset of that spend flowing through insurance-billable psychiatric encounters. No independent TAM figure was published by Talkiatry at time of research; the $92B figure reflects published US behavioral health market estimates.

## Validated by

$210M Series D in February 2026 led by Perceptive Advisors, bringing total funding to ~$452M. $130M Series C in June 2024. 800+ full-time psychiatrists employed. Operates in 47 states and Washington D.C. Moving toward value-based payment arrangements with payers. CEO Robert Krayn leads alongside co-founder and Chief Psychiatry Officer Dr. Georgia Gaveras.

## Competes with

Cerebral (medication management, controversy-hit), Done (ADHD focus), Brightside Health (depression and anxiety), Talkspace (therapy-first, some psychiatry), BetterHelp (therapy only), Alma (marketplace for therapists), and primary care platforms adding behavioral health (One Medical, Carbon Health).

## Complements

EHR vendors for documentation, payer networks for in-network contracting, AI documentation tools (mdhub), primary care platforms for referral pipelines, and employee assistance programs as a top-of-funnel source.

## Value chain position

**Downstream of:** Patient intake platforms, EHR systems, insurance payer credentialing networks
**Upstream of:** Specialist referral (inpatient psychiatric, intensive outpatient), pharmacy dispensing for psychiatric medications

## Gaps

Full-time physician employment model creates high fixed cost structure and limits scale compared to marketplace approaches. Outcomes data demonstrating clinical differentiation from primary care-managed psychiatry has not been independently published. The AI platform is early; most clinical differentiation today comes from psychiatrist quality and matching rather than technology. Value-based contract transition is a multi-year sales cycle with payers and requires longitudinal outcome tracking at population scale.

## Notes

The full-stack W-2 model is the key structural bet: it enables data accumulation, protocol standardization, and potential risk contracts, but requires capital intensity to staff up. The $210M Series D from Perceptive Advisors (a life sciences fund, atypical for this space) signals a thesis around monetizing the patient data and outcomes platform downstream of care delivery. Competing platforms largely rely on 1099 contractor networks, which reduces their ability to standardize care or build clinical datasets at the same depth.

## News signals

- 2026-02: Raised an oversubscribed $210M Series D led by Perceptive Advisors, bringing total funding to ~$452M. Participation from Sofina and prior leads Andreessen Horowitz, blisce/, and Left Lane Capital, plus a debt facility from Banc of California. 800+ full-time psychiatrists employed; operates in 47 states and Washington D.C. (source: https://www.prnewswire.com/news-releases/talkiatry-raises-oversubscribed-210m-series-d-to-expand-nations-largest-full-stack-psychiatry-provider-302685678.html, https://www.fiercehealthcare.com/health-tech/talkiatry-closes-210m-series-d-expand-telepsychiatry-services)
