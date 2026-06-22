---
id: grow-therapy
name: Grow Therapy
website: growtherapy.com
founded: 2020
area: mental health telehealth
funding_stage: series-d-plus
total_funding_usd_m: 328
public: false
business_model: hybrid
buyer:
  - consumer
  - provider
  - payer
buyer_urgency: high
buyer_wtp: medium
sales_cycle: short
regulatory_burden: light
tam_usd_m: 92000
data_centrality: supporting-evidence
data_ownership:
  - partner-supplied
  - customer-generated
moat:
  - distribution
  - data
  - capital
primary_value_chain_layer: therapist-patient marketplace
input:
  - patient symptom and preference intake
  - therapist credential and specialty data
  - insurance eligibility and plan data
  - session and outcome records
transformation_type: generate
output:
  - matched therapist recommendations
  - insurance-covered therapy sessions (in-person and virtual)
  - billing and claims management for providers
  - medication management (psychiatry subset)
barrier_to_entry: medium
barrier_to_entry_logic: Network effects between 26,000+ therapists and 2M+ patient relationships create switching cost for both sides; insurance credentialing infrastructure and billing ops are costly to replicate, but the marketplace model itself is not technically defensible.
hardness: moderate
hardness_reason: Maintaining therapist quality and network density across 47 states at scale while competing on both consumer acquisition and provider recruitment simultaneously.
last_verified: "2026-06-22"
---

## One-liner

Operates a two-sided marketplace connecting 2M+ patients to 26,000+ therapists and psychiatrists, handling insurance billing and credentialing so providers can focus on care.

## Problem

Finding a therapist who accepts insurance, has availability, and fits a patient's needs, specialty, and identity preferences is a manual, weeks-long process. Therapists, meanwhile, face administrative burden from insurance credentialing and billing that consumes 20-30% of their time.

## Workaround

Psychology Today directory (manual, no billing help), self-pay therapy (unaffordable for most), employee assistance programs (3-6 session caps), BetterHelp (subscription, out-of-pocket, asynchronous), primary care referrals (long wait times).

## Entry wedge

Founded in 2020 by Jake Cooper and Manoj Kanagaraj, with co-founder Elle Ginter. The initial wedge was the supply side: Grow recruited independent therapists, handled their insurance credentialing, and sent them patients, taking no subscription fee and only earning on successful billing. Therapists joined because the cost of acquisition was zero and Grow absorbed the administrative burden. The patient funnel followed once therapist density was sufficient to compete on match quality.

## Method

Grow Therapy is a B2C and B2B2C marketplace. Patients input location, insurance, and care needs; the platform filters to available therapists and shows estimated session cost upfront. Therapists join as independent 1099 contractors; Grow handles credentialing (5-7 day average), insurance billing across 80+ payers, and payment processing. Grow retains a percentage of insurance reimbursement as its take rate. Grow acquired AI documentation tool Tenor Therapy in February 2026, adding AI-generated clinical notes to the provider-side value proposition. The company reached $1B revenue and profitability in 2025.

## TAM logic

The US behavioral health market is estimated at $92B annually, with therapy representing the largest volume segment. Grow's accessible TAM is the subset of therapy spending flowing through insurance-billed outpatient encounters. The platform's $1B revenue run rate implies Grow has captured approximately 1% of the US behavioral health market by spend; significant headroom remains, particularly in Medicaid and employer-sponsored benefit channels. No independent TAM figure was published by Grow Therapy at time of research.

## Validated by

$150M Series D in March 2026 led by TCV and Goldman Sachs Growth Equity, at $3B valuation. Previous rounds include $88M Series C (April 2024) and $75M Series B. Total funding $328M. $1B annual revenue and profitable as of 2025. 7M sessions facilitated in 2025 alone; 10M lifetime appointments. 2M+ patients served. 26,000+ therapists on platform. Acquired Tenor Therapy (AI scribe) February 2026.

## Competes with

Alma (therapist practice management marketplace, similar B2B2C model), Headway (insurance-focused therapist credentialing), Brightside Health (focused on depression/anxiety, more clinical), Talkiatry (psychiatry only, W-2 model), SimplePractice (EHR for therapists without the patient marketplace), BetterHelp and Talkspace (direct-to-consumer but out-of-pocket).

## Complements

EHR and documentation tools (acquired Tenor), pharmacy and medication management networks for psychiatry integration, payer credentialing networks, and employer benefit platforms for B2B2C distribution.

## Value chain position

**Downstream of:** Insurance payers (credentialing and reimbursement), patient health plans
**Upstream of:** Specialist and higher-acuity care (inpatient, intensive outpatient programs), outcomes tracking and measurement systems

## Gaps

The marketplace model creates limited clinical data ownership: sessions happen between therapist and patient, and outcomes data is fragmented. Provider network is 1099 contractors, so quality control and clinical protocol standardization are harder than a W-2 model like Talkiatry. The AI scribe acquisition (Tenor) is early; clinical differentiation from technology remains limited. Insurance billing disputes and claim denials are a significant operational cost. Medicaid penetration is low relative to commercial insurance. The $3B valuation at $1B revenue implies a 3x revenue multiple, which is reasonable but vulnerable to growth deceleration.

## Notes

Grow Therapy became profitable before raising its Series D, which is unusual for a consumer health marketplace and suggests strong unit economics at the billing-capture layer. The $1B revenue figure is gross (insurance payments flowing through the platform before provider payout), not Grow's net take. The Tenor Therapy acquisition signals a move toward monetizing the provider-side workflow beyond take-rate, creating a parallel SaaS-like revenue stream. Grow's model is more defensible on the supply side (provider relationships, credentialing infrastructure) than the demand side, where patient acquisition costs are high and BetterHelp/Talkspace compete with direct marketing.

## News signals

- 2026-03: Raised $150M Series D at a $3B valuation, led by TCV and Growth Equity at Goldman Sachs Alternatives, with new investors BCI and Menlo Ventures. Reported ~$1B revenue, profitability, and 7M visits in 2025. (source: https://bhbusiness.com/2026/03/03/with-1b-in-revenue-grow-therapy-lands-150m-series-d/)
