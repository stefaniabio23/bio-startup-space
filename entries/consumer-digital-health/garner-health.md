---
id: garner-health
name: Garner Health
website: garnerhealth.com
founded: 2019
area: provider quality analytics and benefits navigation
funding_stage: series-d-plus
total_funding_usd_m: 300
public: false
business_model: saas
buyer:
  - payer
  - provider
  - consumer
buyer_urgency: medium
buyer_wtp: high
sales_cycle: medium
regulatory_burden: light
tam_usd_m: 40000
data_centrality: core-moat
data_ownership:
  - licensed
  - proprietary
moat:
  - data
  - model
  - distribution
primary_value_chain_layer: provider selection and benefits optimization
input:
  - de-identified medical claims from 320M+ U.S. patients (60B+ claims)
  - specialty-specific clinical outcome metrics (550+ proprietary metrics)
  - network and availability data for in-network providers
  - employer health plan design and HRA parameters
transformation_type: predict
output:
  - ranked list of top-performing providers by specialty and geography
  - employee-facing app with green "Top Provider" badge and booking support
  - HRA reimbursement for qualifying out-of-pocket costs when top providers are chosen
  - employer reporting on cost savings and engagement rates
barrier_to_entry: high
barrier_to_entry_logic: 60B+ claims database, 550+ proprietary clinical metrics refined over five years, and an employer channel with $100M+ ARR and 2.5M+ members create a compounding data and distribution advantage.
hardness: hard
hardness_reason: Continuously proving that provider quality rankings translate to actual cost and outcome improvements at scale, as health plan networks change and provider attribution grows more complex.
substrate_family: F
substrate_tags:
- F.4
technology_platform_ids: []
new_capability: "Ranks providers on clinical quality from a 60B-claim database and financially steers employees to top performers."
technology_readiness_level: 9
commercialisation_status: commercial_scaled
customer:
  - employer
  - payer
limiting_factor: "Quality rankings are claims-based with attribution uncertainty; HRA model needs employer benefit redesign."
last_verified: "2026-07-07"
---

## One-liner

Helps employers reduce healthcare costs and improve outcomes by ranking providers on clinical quality using one of the largest U.S. claims databases, then financially incentivizing employees to choose top-ranked doctors.

## Problem

Employer-sponsored health plans pay for care without regard to provider quality. Employees default to convenient or familiar doctors regardless of clinical performance. Health systems have no financial incentive to direct referrals to better-performing peers, so low-quality, high-cost care persists inside benefit networks.

## Workaround

Employers use tiered networks, reference-based pricing, or generic wellness programs. Employees rely on Yelp reviews, word-of-mouth, or health plan directories, none of which correlate with clinical outcomes.

## Entry wedge

Founded in 2019 by Nick Reber (formerly Oscar Health analytics and provider network) and Naama Stauber. Seed and Series A funding from Thrive Capital and Sequoia Capital in 2020-2021 gave early runway to build the claims data infrastructure before pitching employers. The initial product offered employer groups a supplemental benefit that required no changes to existing health plan contracts.

## Method

Garner licenses a de-identified claims database covering 320M+ patients and 60B+ medical claims. It applies 550+ proprietary clinical metrics segmented by specialty, geography, and peer cohort to identify top-performing providers within an employee's existing network. These providers are surfaced in the Garner Health app with a "Top Provider" badge. Employees who choose Top Providers receive out-of-pocket cost reimbursements via a health reimbursement arrangement (HRA) funded by employer savings. Employers see an average 12% reduction in total healthcare spend in year one; employees pay on average 80% less out-of-pocket when seeing top providers. Employee engagement rate is reported at 46%.

## TAM logic

U.S. employer-sponsored healthcare spend exceeds $900B annually. Garner positions against a subset of this as the value-based benefits optimization layer. Total addressable market for employer health benefits technology is commonly estimated at $30-50B. Figure above is an estimate; no formal TAM statement was found on the company website.

## Validated by

$118M Series D announced February 2026, reaching $1.35B valuation. Investors include Kleiner Perkins, Redpoint, Maverick, Kaiser Permanente Ventures, Mercy, Optum Ventures (strategic). Total funding approximately $200M across seed through Series D. Aggregate ARR above $100M by early 2026. Revenue growth 130%+ year-over-year. 2.5M+ members on platform. Series B TechCrunch coverage December 2021.

## Competes with

Quantum Health, Accolade Health, Included Health, Transcarent, Health Advocate, Alight Solutions health navigation, health plan internal care management programs.

## Complements

Health plan networks (Garner works within existing networks, not against them), EAP and wellness benefit vendors, benefits brokers who recommend Garner to employer clients, PBMs for pharmacy quality analytics.

## Value chain position

**Downstream of:** Employer benefits design decisions, health plan network contracting
**Upstream of:** Provider appointment scheduling, specialist referral, post-visit follow-up care

## Gaps

Provider quality rankings are based on claims, not direct clinical outcome measurement, which creates attribution uncertainty (sicker patients may be referred to better doctors, confounding outcomes). The 12% cost reduction claim and 46% engagement figure have not been peer-reviewed. The HRA reimbursement model requires employer willingness to redesign benefits structures, limiting addressable market to larger, self-insured employers. No published Garner-specific randomized evidence that selecting top-ranked providers causes better outcomes versus correlation with patient socioeconomics. Data licensing from claims databases is an ongoing cost that could become competitive.

## Notes

Nick Reber (CEO) previously built provider analytics at Oscar Health. Optum Ventures as a strategic investor is notable given UnitedHealth's position as a major claims data owner and potential competitor. The $1.35B valuation at Series D signals investor confidence in the $100M+ ARR trajectory but also raises the stakes for the next growth phase. Broker-led channel growth drove a ~40% ARR increase in 2025, suggesting the go-to-market is distribution-heavy rather than product-led. The valuation roughly doubled from $1.35B (Series D, Feb 2026) to $2.74B (Series E, May 2026) in three months, with ARR reported near $200M at the Series E.

## News signals

- 2026-02: Raised $118M Series D at a $1.35B valuation, led by Kleiner Perkins with Redpoint, Maverick, Kaiser Permanente Ventures, and Mercy. (source: https://www.prnewswire.com/news-releases/garner-health-raises-118-million-to-close-the-healthcare-quality-and-cost-gap-reaches-1-35-billion-valuation-302680953.html)
- 2026-05: Raised $100M Series E at a $2.74B valuation, led by Index Ventures, with ARR reported around $200M and nearly 800 customers. (source: https://www.prnewswire.com/news-releases/garner-health-closes-100-million-series-e-at-a-2-74b-valuation-to-continue-addressing-the-healthcare-quality-and-cost-gap-302783840.html)
