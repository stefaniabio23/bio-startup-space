---
id: newlimit
name: NewLimit
website: newlimit.com
founded: 2021
area: epigenetic reprogramming for longevity
funding_stage: series-c
total_funding_usd_m: 682
public: false
business_model: own-pipeline
buyer:
 - pharma
 - investor
buyer_urgency: low
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 50000
data_centrality: core-moat
data_ownership:
 - proprietary
 - generated-in-house
moat:
 - model
 - data
 - wet-lab
 - founder-brand
 - IP
primary_value_chain_layer: discovery
input:
 - single-cell epigenomic profiles (ATAC-seq, ChIP-seq) from young and old cells
 - transcription factor combinations (payloads)
 - functional genomics screens (RESTORE-seq platform)
 - foundation models of protein and DNA sequences
 - scientific literature
transformation_type: predict
output:
 - transcription factor payload combinations that reprogram old cells to a youthful epigenetic state
 - preclinical programs in metabolism (hepatocytes), vasculature (endothelial cells), and immunology (T cells)
 - candidate epigenetic reprogramming medicines for liver disease, kidney disease, and inflammatory diseases of aging
barrier_to_entry: very-high
barrier_to_entry_logic: RESTORE-seq platform tests thousands of TF payload combinations in parallel, a proprietary experimental system that competitors would take years to replicate; the data flywheel compounds as Ambrosia AI retrain on each screen, and co-founders Brian Armstrong and Blake Byers provide capital access that few longevity startups can match.
hardness: moonshot
hardness_reason: No reprogramming medicine has ever entered human trials; demonstrating that partial epigenetic reprogramming in vivo is safe (does not cause dedifferentiation or tumorigenesis), durable, and produces a clinically meaningful health outcome in any human indication.
substrate_family: E
substrate_tags:
- E.3
technology_platform_ids: []
new_capability: "Identifies transcription-factor combinations that reprogram old cells to a youthful epigenetic state via the RESTORE-seq screening platform."
technology_readiness_level: 4
commercialisation_status: preclinical
customer:
  - pharma
limiting_factor: "No IND filed; in-vivo TF delivery and reprogramming safety (tumorigenesis, loss of cell identity) unproven at therapeutic doses."
last_verified: "2026-07-07"
---

## One-liner

NewLimit is inventing medicines that reverse epigenetic aging in specific cell types by identifying and delivering transcription factor combinations that reprogram old cells to a youthful state.

## Problem

Aging is the primary driver of most chronic disease. At the cellular level, aging manifests as progressive degradation of epigenetic marks, the regulatory signals that tell each cell which genes to use. Old cells with degraded epigenetic marks are less functional, less resilient, and more susceptible to disease. This process was once considered irreversible, but partial epigenetic reprogramming (using Yamanaka-factor subsets) has been shown to restore youthful function in model systems, suggesting a therapeutic intervention point that precedes disease onset.

## Workaround

Disease-by-disease treatment of the downstream consequences of cellular aging: statins for cardiovascular disease, immunosuppressants for autoimmunity, metabolic drugs for NAFLD/NASH. These manage symptoms but do not address the underlying epigenetic aging process. No approved drug reverses cellular aging.

## Entry wedge

Discovery engine: the Ambrosia AI system (designs TF payloads) combined with RESTORE-seq (tests thousands of payloads in parallel using DNA-barcoded TFs in pooled screens, read out by single-cell genomics). Three initial therapeutic programs: Metabolism (old hepatocytes, targeting liver disease and metabolic aging), Vascular (kidney endothelial cells, targeting kidney disease), Immunology (old T cells, targeting inflammatory diseases of aging).

## Method

Closed predict-write-read loop: (1) Ambrosia AI proposes TF combinations expected to make old cells look and act young, drawing on foundation models of biological sequences and scientific literature; (2) RESTORE-seq delivers DNA-barcoded TF libraries to cells in pooled format, so ~thousands of payload combinations are tested simultaneously per experiment; (3) Single-cell genomics reads epigenetic state post-reprogramming, deconvolving which payload each cell received via barcode; (4) Paired payload-outcome data retrains Ambrosia for the next screen cycle. Top payloads move to functional validation in aged cells and preclinical models.

## TAM logic

NewLimit positions its medicines as applicable to near-universal age-related diseases: liver disease, kidney disease, cardiovascular disease, T-cell-mediated inflammatory diseases. Combined global market for these indications exceeds $50B+ in annual drug sales, and the longevity market (preventive medicines to extend healthy years) is an emerging category without current entrants. (Source: newlimit.com/therapeutics; newlimit.com/science)

## Validated by

$40M Series A (May 2023). $130M Series B led by Kleiner Perkins (May 2025). $45M additional raise (October 2025, valuation ~$1.62B). $435M Series C led by Founders Fund (June 2026, valuation ~$3.1B); co-investors include Thrive Capital, Lilly Ventures, Nat Friedman, Daniel Gross. RESTORE-seq platform operational and generating multi-round screening data. Translation team hired (Melissa Calton as Head of Translation, ex-4D Molecular Therapeutics) to advance programs toward IND.

## Competes with

Altos Labs (Calico/IAC-backed, also epigenetic reprogramming; larger team, more academic orientation), Retro Biosciences (YC-backed, plasma-based aging interventions, Sam Altman-funded), Calico (Alphabet, long-horizon aging research), Turn Biotechnologies (RNA-based partial reprogramming), CohBar (mitochondria-targeting). In specific disease areas: conventional liver disease biotechs (Madrigal, Akero, 89bio) and kidney disease biotechs (Chinook/Novartis, Travere).

## Complements

AAV and mRNA delivery platforms for eventual TF payload delivery in vivo (NewLimit programs will likely require gene therapy or mRNA delivery technology), preclinical CROs for aging model studies, academic longevity research groups (Calico, Sinclair lab at Harvard).

## Value chain position

**Downstream of:** Epigenetics research (Yamanaka reprogramming, partial reprogramming in model organisms), single-cell genomics platform development, AI foundation models for biology
**Upstream of:** IND-enabling studies, clinical trials in age-related disease, gene therapy delivery optimization

## Gaps

No clinical programs. No IND filed. The Metabolism, Vascular, and Immunology programs are in preclinical discovery stage, timeline to first-in-human is multi-year. The fundamental safety question (partial reprogramming without tumorigenesis or loss of cell identity) has not been answered at therapeutic doses in humans. Delivery of TF payloads in vivo at scale is an unsolved problem (AAV capsid selection, tissue targeting, dosing). The regulatory path for an anti-aging medicine is undefined.

## Notes

Co-founded 2021 by Jacob Kimmel (CEO, ex-Principal Investigator at Calico in epigenetic reprogramming), Brian Armstrong (co-founder and CEO of Coinbase, board member), and Blake Byers (scientist and startup investor, ex-General Partner at GV). Armstrong and Byers committed $110M in personal capital over company lifetime, plus institutional rounds. Lilly Ventures participation in Series C is strategically notable, one of the few pharma venture arms investing in longevity, suggesting potential future partnership interest. San Francisco, CA.

## News signals

- 2026-06: Raised $435M Series C led by Founders Fund at a $3.1B valuation (about 3x in one year). New investors include Thrive Capital, Greenoaks, Quiet Capital; returning investors Kleiner Perkins, Abstract, Nat Friedman/Daniel Gross, Valor Equity Partners, Eli Lilly Ventures. Total funding now about $682M. Company says it will bring its first aging reprogramming medicine to human trials next year, citing a prototype that reverses cell age in old human liver cells. (source: https://blog.newlimit.com/p/newlimit-raises-435m-led-by-founders)
