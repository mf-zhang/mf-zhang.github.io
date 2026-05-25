---
title: "CaST-Bench: Benchmarking Causal Chain-Grounded Spatio-Temporal Reasoning for Video Question Answering"
collection: publications
permalink: /publication/2026-06-01-cast-bench
venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://arxiv.org/abs/2605.23216'
codeurl: 'https://cast-bench.github.io/'
authors: 'Mingfang Zhang, Jingjing Pan, Ashutosh Kumar, Rajat Saini, Mustafa Erdogan, Hsuan-Kung Yang, Caixin Kang, Yifei Huang, Yoichi Sato, Quan Kong'
image: 'cvpr26_cast.webp'
tags:
  - b) video and multi-view understanding
  - a) vision-language multimodal reasoning
---

Cause-and-effect reasoning in video is a significant challenge for Vision-Language Models (VLMs), as it requires going beyond surface-level perception to a deeper understanding of causal mechanisms. However, existing benchmarks rarely provide the fine-grained, grounded evidence needed to rigorously evaluate this capability. To address this gap, we introduce CaST-Bench, a benchmark for Causal Chain-Grounded Spatio-Temporal Video Reasoning. CaST-Bench presents complex causal questions that require models to identify and localize a chain of multiple spatio-temporal evidences. Through a human-AI collaborative pipeline, we construct a high-quality dataset of 2,066 questions over 1,015 videos, with causal chains annotated by temporal segments and bounding-box tracks. Furthermore, we design a comprehensive evaluation suite with novel metrics that assess not only answer correctness but also the capability for visual evidence grounded reasoning. This grounding is crucial for improving accuracy by mitigating spurious correlations and for enhancing user trust by making models more transparent. Our experiments show that current VLMs struggle with causal questions, largely due to their limited ability to construct precise and grounded causal chains. This highlights an important direction for improving future VLMs.
