---
id: nourish
name: Nourish
website: usenourish.com
founded: 2021
area: nutrition telehealth
funding_stage: series-c
total_funding_usd_m: 215
public: false
business_model: reimbursement
buyer:
  - consumer
  - payer
  - provider
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: short
regulatory_burden: light
tam_usd_m: 50000
data_centrality: important-enabler
data_ownership:
  - proprietary
  - customer-generated
moat:
  - distribution
  - data
  - capital
primary_value_chain_layer: nutrition care delivery
input:
  - patient dietary and lifestyle intake
  - lab results (metabolic, renal, lipid panels)
  - chronic condition history (diabetes, eating disorders, kidney disease, GI)
  - food and symptom logs from patient app
transformation_type: monitor
output:
  - personalized nutrition care plan from registered dietitian
  - ongoing dietitian coaching (telehealth sessions and messaging)
  - GLP-1 prescribing when clinically appropriate
  - AI health agent guidance between appointments
barrier_to_entry: medium
barrier_to_entry_logic: Building a W-2 network of 3,000+ registered dietitians credentialed with commercial, Medicare, and Medicaid payers across all 50 states took significant capital and time; insurance billing infrastructure for dietitian services is complex and historically under-built.
hardness: moderate
hardness_reason: Demonstrating durable clinical outcomes (A1C reduction, weight, comorbidity management) from nutrition-only and nutrition-plus-GLP-1 care across a diverse, high-chronic-disease population at scale.
substrate_family: F
substrate_tags:
- F.1
technology_platform_ids: []
new_capability: "Insurance-covered registered-dietitian care at scale with dual-agent AI coaching and GLP-1 prescribing."
technology_readiness_level: 8
commercialisation_status: commercial_scaled
customer:
  - consumer
  - payer
  - provider
limiting_factor: "Low dietitian reimbursement compresses margin and outcome data is not yet independently published at scale."
last_verified: "2026-07-07"
---

## One-liner

Connects patients with insurance-covered registered dietitians via telehealth, targeting the 200M Americans with nutrition-related chronic conditions, now adding GLP-1 prescribing and AI-assisted coaching.

## Problem

Registered dietitian care is chronically underused despite strong clinical evidence for nutrition interventions in diabetes, eating disorders, kidney disease, GI conditions, and cardiovascular disease. Most patients cannot find or afford a dietitian; insurance coverage exists but is fragmented and poorly navigated.

## Workaround

Generic nutrition apps (MyFitnessPal, Cronometer), YouTube nutrition content, GP referrals to hospital dietitian programs with long waits, GLP-1 medications without lifestyle support, and self-directed dietary change.

## Entry wedge

Nourish launched in 2021 out of Y Combinator (W21 batch). The founding insight was that insurance already reimburses registered dietitian visits for specific conditions (diabetes, kidney disease, eating disorders) but that access was severely limited by supply and navigation friction. The wedge was to make insurance-covered dietitian access as simple as booking a telehealth appointment, focusing initially on chronic disease patients with clear billing codes. 94% of Nourish patients pay $0 out-of-pocket.

## Method

Patients are matched with a registered dietitian based on their condition, dietary preferences, and insurance coverage. Dietitians at Nourish are W-2 employees (3,000+ RDs, the largest network in the country). Sessions occur via telehealth; between appointments, patients use the Nourish app to log meals, message their RD, and receive guidance from a dual-agent AI system: one patient-facing AI agent for behavioral nudging and dietary prompts, and one clinician-facing tool to support documentation and care planning. Nourish has expanded from nutrition counseling to include lab testing, medication management, and GLP-1 prescribing where clinically appropriate, positioning as a full metabolic care platform.

## TAM logic

Nourish estimates nearly 200M Americans live with nutrition-related chronic conditions. The US clinical nutrition services market and the broader chronic disease management market (diabetes, obesity, renal disease, eating disorders) represents tens of billions in annual spend. The $50B figure is an estimate for the intersection of insurance-reimbursable nutrition and metabolic care services; no independent TAM figure was verified from Nourish's public materials.

## Validated by

$100M Series C led by Menlo Ventures (May 2026), bringing total funding to $215M. Prior rounds: $70M Series B (April 2025, Index Ventures), $35M Series A (March 2024), YC W21 seed. 3,000+ W-2 registered dietitians. All 50 states. Hundreds of thousands of patients served. Partners with national commercial, Medicare, and Medicaid plans covering hundreds of millions of lives.

## Competes with

Vida Health (chronic disease coaching, nutrition-adjacent), Omada Health (diabetes and obesity prevention, digital coaching), Twin Health (metabolic digital twin, CGM-based), Spring Health and Brightside (different conditions but similar dietitian-access model), traditional hospital outpatient dietitian programs, and GLP-1 platforms (eMed, Calibrate, Ro) that are adding nutrition components.

## Complements

CGM companies (Dexcom, Abbott) for metabolic tracking between dietitian visits, GLP-1 manufacturers for medication-plus-nutrition care pathways, primary care platforms for referral pipelines, and EHR systems for clinical documentation.

## Value chain position

**Downstream of:** Insurance payers (covering dietitian visits), primary care and specialist referrals, patient chronic disease diagnosis
**Upstream of:** GLP-1 prescribing decisions, metabolic lab testing, specialty care (endocrinology, nephrology, gastroenterology) for complex cases

## Gaps

The jump from nutrition counseling to GLP-1 prescribing is a meaningful scope expansion that puts Nourish in direct competition with well-funded platforms (eMed, Ro, Hims). Clinical outcome data demonstrating dietitian-driven improvements across the full condition breadth is not yet independently published at scale. The W-2 RD model is capital-intensive; at 3,000+ RDs the fixed cost base is large, and session volume growth must outpace headcount growth. The AI health agent is promising but early; behavioral change through AI in between-session periods is not yet validated at scale. Insurance reimbursement rates for dietitian services are low relative to physician services, compressing margin.

## Notes

Nourish's GLP-1 expansion is strategically timed: the GLP-1 market has focused heavily on prescribing access but less on the behavioral and nutritional wraparound that improves long-term outcomes and addresses the medication discontinuation problem. If Nourish can demonstrate that dietitian support improves GLP-1 adherence and outcomes, it has a strong story for payers managing GLP-1 drug spend. The dual-agent AI architecture (patient-facing and clinician-facing) mirrors the approach taken by Twin Health and other metabolic platforms and suggests the technology thesis is moving toward continuous engagement between appointments rather than the session itself.

## News signals

- 2026-05: Raised $100M Series C led by Menlo Ventures, valuing the company at $1.75B and bringing total funding to $215M. Other participants: Thrive Capital, Index Ventures, J.P. Morgan Growth Equity Partners, Maverick Ventures, Y Combinator, BoxGroup, Atomico. Plans to expand the care model with physicians. (source: https://www.axios.com/pro/health-tech-deals/2026/05/19/nourish-100m-metabolic-care-virtual-nutrition, https://www.fiercehealthcare.com/finance/nourish-raises-100m-plans-expand-care-model-physicians)
