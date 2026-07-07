---
id: elemind
name: Elemind
website: elemindtech.com
founded: 2019
area: consumer neuromodulation wearable
funding_stage: seed
total_funding_usd_m: 20
public: false
business_model: own-pipeline
buyer:
  - consumer
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: short
regulatory_burden: light
tam_usd_m: 30000
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - IP
  - model
  - clinical-evidence
primary_value_chain_layer: consumer neuro-wearable
input:
  - real-time EEG from a forehead headband
  - instantaneous phase of alpha-band (7.5-12.5 Hz) neural activity
transformation_type: monitor
output:
  - phase-locked pink-noise acoustic pulses timed to the wearer's brainwaves
  - faster sleep onset (shorter time to fall asleep)
barrier_to_entry: high
barrier_to_entry_logic: The moat is a real-time closed-loop algorithm that estimates the instantaneous phase of alpha oscillations from noisy forehead EEG and fires acoustic pulses at precise phase targets, plus a patent portfolio and clinical trial evidence; measuring EEG is easy, but low-latency phase-locked stimulation that demonstrably shortens sleep onset is hard to replicate.
hardness: hard
hardness_reason: Closing the loop between live EEG phase estimation and precisely timed stimulation, on a comfortable consumer headband, and proving it changes a clinical endpoint like sleep-onset latency, is a genuine neuro-engineering and evidence problem.
substrate_family: D
substrate_tags:
- D.1
technology_platform_ids: []
new_capability: "Closed-loop EEG that estimates alpha-band phase in real time and fires phase-locked pink-noise pulses to shorten sleep-onset latency."
technology_readiness_level: 8
commercialisation_status: commercial_early
customer:
  - consumer
limiting_factor: "Marketed as wellness not an FDA-cleared device, so clinical insomnia claims are constrained; durability and habituation unproven."
last_verified: "2026-07-07"
---

## One-liner

Elemind makes a wearable EEG headband that reads your brainwaves and plays pink-noise pulses phase-locked to your neural rhythms, nudging your brain toward sleep.

## Problem

Sleep-onset insomnia is common and poorly served: pharmaceuticals (sedatives, antihistamines) carry dependence, grogginess, and tolerance risks, and behavioural therapy is slow and hard to access. Most consumer sleep tech only measures sleep (trackers, rings) without actively intervening to help someone fall asleep faster.

## Workaround

Sleep hygiene, over-the-counter and prescription sleep aids, melatonin, white-noise machines, and passive sleep trackers (Oura, Whoop, Apple Watch) that report on sleep but do nothing to induce it. Clinical closed-loop neurostimulation exists only in research and hospital settings.

## Entry wedge

A single direct-to-consumer sleep headband (around $349) marketed as a wellness device, not a regulated medical device, targeting healthy adults with occasional trouble falling asleep. The closed-loop sleep-onset use case is the beachhead; the underlying real-time EEG-phase platform is positioned for later expansion into focus, relaxation, and other neuromodulation applications.

## Method

The headband records forehead EEG and computes the instantaneous phase of alpha-band (7.5-12.5 Hz) activity in real time. It delivers pink-noise acoustic pulses at programmable onset and offset phases, phase-locked to the wearer's brainwaves, to dampen the alpha rhythms associated with wakeful alertness and accelerate the transition into sleep. As the user drifts off, the system detects deeper sleep stages and adapts the stimulation.

## TAM logic

The global sleep-aid and sleep-tech market (pharmaceuticals, devices, wearables, apps) is large and growing, with the consumer sleep-technology slice alone in the tens of billions. If Elemind converts even a fraction of dissatisfied sleep-aid users and sleep-tracker owners into active-intervention buyers, and later extends the platform beyond sleep, the reachable market is in the tens of billions; $30B is a mid-range sleep-market anchor. (Source: company materials; venturebeat.com/ai/elemind-raises-12m-for-neurotech-wearable)

## Validated by

Closed a $12M seed round (Village Global, LDV Partners among investors) with total funding reported around $20M. Backed by five clinical studies (two focused on sleep) spanning 112 subjects and 876 nights; a published randomized controlled trial of alpha phase-locked auditory stimulation reported shortened sleep-onset latency, and the company cites reduced time-to-sleep in roughly 76% of trial participants. Spun out of MIT research.

## Competes with

Passive sleep trackers repositioning toward intervention (Oura, Whoop), other neurostimulation wearables (Neurovalens/Modius, Hapbee, Apollo Neuro's vibrotactile approach), CES/tES devices, sound-based sleep apps (Calm, Endel), and pharmacological sleep aids.

## Complements

Sleep trackers and rings (measurement layer feeding a fuller picture), digital CBT-for-insomnia programs, and clinical sleep providers who could adopt a validated closed-loop device.

## Value chain position

**Downstream of:** EEG sensing hardware, neuroscience research on phase-locked auditory stimulation, MIT lab IP
**Upstream of:** Consumer sleep-wellness market; potential clinical sleep and neuromodulation channels

## Gaps

Marketed as wellness rather than an FDA-cleared medical device, so clinical insomnia claims are constrained. Durability of the effect, habituation over months, comfort of wearing a headband nightly, and whether benefits generalize beyond the trial populations are open questions. Expansion of the platform beyond sleep is aspirational and unproven.

## Notes

Founded 2019, spun out of MIT (Cambridge/Boston area). This is a consumer neuro-modulation play; the plausible clinically relevant wedge is closed-loop sleep, where phase-locked stimulation has published RCT support. Bio x AI relevance is real but consumer-facing: real-time neural-signal inference and a closed-loop intervention, closer to the wearable-endpoint edge of the thesis than to clinical-trial inference.

## News signals
- 2024-09: Elemind launched its debut sleep headband and detailed its $12M seed round (Village Global, LDV Partners), describing an EEG-driven closed-loop acoustic-stimulation platform that shortened time-to-sleep in a majority of trial participants. (source: https://venturebeat.com/ai/elemind-raises-12m-for-neurotech-wearable-that-can-help-your-brain-and-let-you-sleep-better)
