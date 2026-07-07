---
id: idea-teng-cardiorespiratory-patch
idea: Battery-free textile chest patch that harvests breathing motion and pulse to output heart rate and respiratory rate with no battery or charging.
technology_platform_ids:
  - triboelectric-nanogenerators
substrate_tags:
  - D.1
  - D.3
new_capability: A disposable, self-powered patch that reads two vital signs from mechanical body motion alone, with zero charging burden.
target_user: Post-discharge cardiac and respiratory patients, plus endurance athletes wanting a stick-and-forget vitals patch.
buyer:
  - consumer
  - provider
first_use_case: Multi-day respiratory-rate and heart-rate trending after hospital discharge without a wearable to charge.
business_model:
  - device_consumables
  - monitoring_subscription
technology_readiness_level: 4
translational_gap: Motion artifact rejection and signal stability across body types and adhesion over multi-day wear; converting raw triboelectric pulse waveforms into clinical-grade rates.
why_now: Textile triboelectric pulse sensors hit high-fidelity radial-artery waveforms with fatigue resistance over tens of thousands of cycles, and remote-monitoring reimbursement now pays for continuous vitals.
prior_work:
  - 2023 self-powered textile triboelectric pulse sensor read radial-artery waveforms with strong linearity and fatigue resistance over tens of thousands of cycles.
  - ACS Nano triboelectric body-sensor network demonstrated self-powered heart-rate monitoring.
closest_companies:
  - VivaLNK, Vital Connect (VitalPatch), Current Health, GE-backed patch monitors
differentiation: Battery-free and disposable at the textile layer, removing charging and shrinking cost versus every incumbent adhesive patch that carries a coin cell.
unfair_advantage_needed: Materials and signal-processing depth to turn noisy triboelectric motion into validated vital signs, plus a manufacturing route for cheap functional textile electrodes.
validation_plan: Bench-test a textile patch on a pulse simulator and 5 volunteers, comparing derived HR and RR against an FDA-cleared reference monitor.
three_month_mvp: Build one triboelectric patch prototype, collect HR and RR on 5-10 people against a reference device, and quantify agreement (Bland-Altman) plus adhesion drift over 48 hours.
technical_risk: Triboelectric output is motion-coupled, so separating cardiorespiratory signal from body movement to clinical accuracy is unproven at product scale.
regulatory_risk: A vitals-monitoring claim needs FDA clearance (likely 510(k)); a wellness-only launch avoids this but caps value.
commercial_risk: The adhesive-patch monitoring space is crowded with funded incumbents; battery-free alone may not move a provider buyer.
founder_fit: plausible
cambridge_route_fit: plausible
ef_route_fit: plausible
overall_score: 5
notes: Strongest as a battery-free disposable wedge; weak if positioned as a generic vitals patch against VitalPatch-class incumbents.
last_verified: "2026-07-06"
---

## Idea
A stick-on textile patch on the chest converts the mechanical work of breathing and the arterial pulse into its own electrical signal, so it needs no battery and no charging. That signal is processed into heart rate and respiratory rate for multi-day trending. The wedge is being genuinely disposable and charge-free, which no incumbent adhesive monitor is because they all carry a coin cell.

## Why now
Textile triboelectric pulse sensors reached high-fidelity radial-artery waveforms with fatigue resistance over tens of thousands of cycles by 2023, and remote patient monitoring now reimburses continuous vitals, so a cheap disposable that removes the charging friction has a real buyer.

## 3-month MVP
Fabricate one triboelectric textile patch, instrument 5-10 volunteers plus a pulse simulator, and derive HR and RR from the raw waveform. Report Bland-Altman agreement against an FDA-cleared reference and measure signal and adhesion drift over 48 hours of wear.

## Validation plan
Bench-test on a pulse/respiration simulator to isolate the transduction chain, then move to a small human cohort to quantify motion-artifact rejection and multi-day stability.

## Notes
Crowded category. Defensibility rests entirely on battery-free disposability plus a manufacturing cost advantage, not on the sensing claim itself.
