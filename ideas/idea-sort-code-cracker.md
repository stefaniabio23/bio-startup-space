---
id: idea-sort-code-cracker
idea: Algorithms to automate optimization of Selective Organ Targeting (SORT) multi-component lipid systems for extrahepatic delivery.
technology_platform_ids:
  - ai-lnp-design
substrate_tags:
  - C.1
  - C.2
  - B.5
new_capability: Search the five-component SORT design space to propose SORT-molecule identity and ratio that hit a chosen extrahepatic organ.
target_user: mRNA delivery teams targeting lung, spleen, or tumor rather than liver.
buyer:
  - pharma
  - biotech
first_use_case: Recommend SORT-molecule class and molar fraction to shift an existing four-component LNP toward lung delivery.
business_model:
  - platform_partnership
  - ip_licensing
technology_readiness_level: 3
translational_gap: The SORT design space is combinatorially large and mechanism-linked to protein corona, and public five-component datasets are thin, so optimization needs an active-learning loop into real screens.
why_now: SORT is now framed as endogenous protein-corona programming rather than empirical screening, giving an algorithm a structured objective to optimize against.
prior_work:
  - PNAS 2021 mechanism of tissue-specific mRNA delivery by SORT nanoparticles.
  - ScienceDirect 2023 quaternary ammonium lipid structure and protein corona control lung delivery.
  - ScienceDirect 2025 phospholipid contributions in SORT LNPs.
closest_companies:
  - ReCode Therapeutics
  - Mana.bio
  - Nutcracker Therapeutics
differentiation: Focus narrowly on the SORT-molecule optimization sub-problem (the fifth component) rather than whole-formulation modeling, where the mechanistic corona link is clearest.
unfair_advantage_needed: An active-learning tie-in to a lab running SORT screens, plus mechanistic grounding in corona programming.
validation_plan: Predict the SORT-molecule fraction that maximizes lung delivery for a known lipid system and compare to the published titration curve.
three_month_mvp: Digitize published SORT titration and organ-tropism data, fit a model of SORT fraction to organ selectivity, and reproduce a known lung-targeting optimum out-of-sample.
technical_risk: SORT behavior depends on the full formulation and species, so a component-level optimizer may not transfer across base lipids.
regulatory_risk: Low as a design tool; therapeutic products carry standard IND burden on the buyer.
commercial_risk: SORT IP is concentrated (ReCode and UTSW licensing), which may limit a standalone tool's freedom to operate and buyer set.
founder_fit: plausible
cambridge_route_fit: plausible
ef_route_fit: weak
overall_score: 5.0
notes: Narrowest of the LNP set; strong mechanistic story but a small buyer universe and concentrated IP make it better as a feature than a company.
last_verified: "2026-07-06"
---

## Idea

SORT adds a fifth lipid component whose identity and fraction retune where an LNP delivers its mRNA, moving it from liver to lung, spleen, or tumor. Choosing that fifth component and its ratio is still a titration exercise. This idea automates it: an algorithm that, given a base LNP and a target organ, proposes the SORT-molecule class and molar fraction most likely to hit it. It is deliberately narrow, attacking the one sub-problem where the mechanism (corona programming) is best understood.

## Why now

The field has reframed SORT from empirical screening to endogenous protein-corona programming (PNAS 2021, and 2023 to 2025 work on quaternary ammonium lipids and phospholipids). A structured mechanism means an optimizer has a real objective to search, rather than a black-box screen.

## 3-month MVP

Digitize the published SORT titration curves and organ-tropism readouts, fit a model relating SORT-molecule fraction and class to organ selectivity, and test whether it reproduces a known lung-targeting optimum on a system held out of training. No wet lab required; the deliverable is an out-of-sample match to a published optimum.

## Validation plan

First experiment: for a lipid system with a published SORT titration, predict the fraction that maximizes lung delivery and compare to the measured peak. Success is landing near the empirical optimum without having seen that system.

## Notes

Concentrated SORT IP and a small buyer set cap standalone value. Most credible as a wedge feature inside a broader extrahepatic-delivery platform, or as an IP-licensing play with a screening partner.
