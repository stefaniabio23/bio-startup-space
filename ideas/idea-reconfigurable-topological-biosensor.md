---
id: idea-reconfigurable-topological-biosensor
idea: A software-reconfigurable diagnostic chip pairing topological photonics with phase-change materials so one chip rewires its optical paths to hunt different pathogens
technology_platform_ids:
  - topological-photonics
substrate_tags:
  - D.2
new_capability: One physical biosensor chip that reprograms its resonances in software to detect many different targets, rather than a fixed single-analyte chip
target_user: Diagnostics labs, point-of-care developers, and biodefence/surveillance groups
buyer:
  - provider
  - academic_lab
  - biotech
first_use_case: A reconfigurable photonic panel that switches between respiratory pathogen signatures without changing the chip
business_model:
  - device_consumables
  - diagnostic_per_test
  - ip_licensing
technology_readiness_level: 2
translational_gap: On-chip non-volatile reconfigurable topological photonics was demonstrated in 2025 as a physics result; nothing bridges it to functionalised biosensing surfaces, sample handling, or a validated assay
why_now: On-chip non-volatile reconfigurable phase-change topological photonics was shown in 2025 (Advanced Materials), and topological photonic-crystal sensors were reviewed as an emerging class the same year
prior_work:
  - On-Chip Non-Volatile Reconfigurable Phase Change Topological Photonics (Adv Mater 2025)
  - Topological Photonic Crystal Sensors review (Sensors 2025)
  - Phase-change photonic-crystal biosensors for cell/pathogen detection (2025)
closest_companies:
  - Genalyte
  - "Maverick / photonic biosensor startups"
  - Lightpath / integrated-photonics foundries
differentiation: Topological edge states resist fabrication disorder, giving robust resonances; phase-change reconfigurability lets one chip serve many assays
unfair_advantage_needed: A topological-photonics/integrated-photonics researcher with foundry access plus a surface-biochemistry collaborator
validation_plan: Functionalise a reconfigurable topological resonator with one capture probe and show a measurable, reproducible shift on binding a single analyte, then show a second state detects a second analyte on the same chip
three_month_mvp: "A simulation-plus-fabricated single-device demo: a topological photonic resonator whose resonance is switched between two states via phase-change tuning, with a biosensing sensitivity estimate and a defined functionalisation protocol"
technical_risk: Whether topological robustness translates into real biosensing sensitivity gains, and whether phase-change switching survives an aqueous biological environment, is unproven
regulatory_risk: An IVD diagnostic requires analytical and clinical validation, a multi-year path, though lighter than a therapeutic
commercial_risk: Existing silicon-photonic and ring-resonator biosensors already work; reconfigurability must clear a real customer bottleneck, not just add novelty
founder_fit: weak
cambridge_route_fit: strong
ef_route_fit: weak
overall_score: 4
notes: Uncommercialised. Strongest as a deeptech/IP spinout; needs a concrete "why reconfigurable beats a cheap disposable chip" answer.
last_verified: "2026-07-06"
---

## Idea

Most photonic biosensors are single-purpose: a chip is functionalised for one target and thrown away. Topological photonics gives resonances that survive fabrication disorder, and phase-change materials let those optical paths be rewritten electrically. Combine them and one chip can morph its resonant modes in software to interrogate different pathogens or biomarkers in sequence, turning a disposable into a reconfigurable diagnostic instrument.

## Why now

In 2025 on-chip non-volatile reconfigurable phase-change topological photonics moved from theory to a fabricated device (Advanced Materials), and topological photonic-crystal sensors were reviewed as an emerging sensing class. The building blocks now exist separately; nobody has fused them into a biosensor.

## 3-month MVP

Simulate and fabricate a single topological photonic resonator whose resonance is switched between two states by phase-change tuning. Deliver a sensitivity estimate for label-free binding detection and a concrete surface-functionalisation protocol. The output is a feasibility demo plus provisional IP, not a clinical device.

## Validation plan

Functionalise one reconfigurable resonator with a capture probe and demonstrate a reproducible resonance shift on binding a single analyte, then show a second phase-change state detects a different analyte on the same physical chip.

## Notes

Uncommercialised and early (TRL 2). The hard commercial question is why a reconfigurable chip beats stamping out cheap single-use photonic chips; the answer likely lives in field/biodefence settings where you cannot pre-stock every assay. Best pursued as a Cambridge photonics spinout with IP licensing, not an EF sprint.
