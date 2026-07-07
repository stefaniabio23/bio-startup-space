---
id: metalenz
name: Metalenz
website: metalenz.com
founded: 2016
area: metasurface optics
substrate_family: D
substrate_tags:
  - D.2
  - D.1
technology_platform_ids:
  - metamaterials-metasurfaces
technology_platform_name: Metasurface optics (Polar ID, PolarEyes)
funding_stage: series-b
total_funding_usd_m: 80
public: false
business_model: ip_licensing
buyer:
  - consumer
  - cdmo
customer:
  - consumer
  - cdmo
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: long
regulatory_burden: light
tam_usd_m: 10000
new_capability: Replaces stacks of curved glass lenses with a single flat, semiconductor-fabricated metasurface, adding capabilities like full-polarization imaging that conventional optics cannot deliver at consumer scale and cost.
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - distribution
  - founder-brand
primary_value_chain_layer: Meta-optics component design and licensing for sensing hardware
input:
  - incident light
  - polarization state
transformation_type: measure
output:
  - flat-optic imaging modules
  - polarization face-authentication signal
  - depth and biometric sensing data
technology_readiness_level: 8
limiting_factor: Design-win cycles with smartphone OEMs and foundry integration timelines gate Polar ID from prototype to volume shipment.
commercialisation_status: commercial_scaled
barrier_to_entry: very-high
barrier_to_entry_logic: Exclusive worldwide license to Capasso-lab metasurface IP (150+ patents), a semiconductor-foundry manufacturing model (UMC, STMicro), and 300M+ optics already shipped create a deep moat over would-be flat-optics entrants.
hardness: very-hard
hardness_reason: Engineering nanostructure arrays that manipulate phase and polarization of light across the visible and near-IR, then fabricating them reproducibly at semiconductor volume, sits at the frontier of applied nano-optics.
last_verified: "2026-07-06"
---

## One-liner

Harvard/Capasso spinout replacing curved-glass lens stacks with single flat metasurface optics fabricated in semiconductor foundries, extended into polarization-based biometric sensing (Polar ID).

## Problem

Camera and sensing modules need multiple stacked curved lenses that are bulky, costly, and hard to shrink, and conventional optics cannot cheaply capture polarization, the signal needed for secure, spoof-resistant face authentication.

## Workaround

Traditional ground or molded glass and plastic lens assemblies, plus structured-light or time-of-flight 3D systems (like Apple Face ID) that require complex multi-component modules.

## Entry wedge

Time-of-flight and depth-sensing optics for smartphones (already shipping in devices such as Samsung Galaxy, Google Pixel, and Apple iPad Pro via ST's VL53 modules), then Polar ID full-polarization face unlock as the flagship differentiated product.

## Method

A single flat surface patterned with millions of sub-wavelength nanostructures bends and sorts light by phase and polarization, collapsing a lens stack into one wafer-fabricated element. Polar ID pairs a polarization-sorting metasurface with a Samsung ISOCELL Vizion sensor and ML to authenticate faces from a unique polarization signature.

## Validated by

Founded 2016 by Robert Devlin and Federico Capasso; exclusive worldwide license to Capasso-lab metasurface IP with 150+ patents. Raised roughly USD 80M including a USD 30M Series B (2022, Neotribe). More than 300M metasurface optics already integrated into consumer devices; open-market launch with UMC and licensing deals with STMicroelectronics; Polar ID in OEM integration trials targeting consumer shipment.

## Competes with

Conventional lens makers (Largan, Sunny Optical), other meta-optics startups (NILT, Moxtek and polarization-optics players), and incumbent 3D face-auth systems (Apple Face ID structured light).

## Complements

Image-sensor makers (Samsung ISOCELL), semiconductor foundries (UMC), and smartphone and laptop OEMs building biometric and depth features.

## Value chain position

**Downstream of:** nanofabrication IP, semiconductor foundries, image-sensor suppliers
**Upstream of:** smartphone and laptop OEM biometric modules, depth-sensing and autofocus systems

## Gaps

Polar ID's value depends on winning flagship OEM design slots against entrenched Face ID; timelines for full consumer deployment have slipped toward 2027, so the near-term revenue base remains the existing depth-sensing optics rather than the differentiated polarization product.

## Notes

Listed here for the biosensing-adjacent metasurface primitive; core commercial traction is consumer optics and biometrics rather than clinical diagnostics. substrate_tags D.2 reflect the biometric-sensing angle, D.1 the consumer-device volume. Reference incumbent for the metamaterials-metasurfaces primitive at commercial scale.

## News signals
- 2025-11: Metalenz struck a production deal to bring compact Polar ID polarization face biometrics into consumer devices, with reports of Samsung testing the system for a future flagship. (source: https://www.biometricupdate.com/202511/metalenz-strikes-production-deal-to-bring-compact-face-biometrics-to-consumer-devices)
