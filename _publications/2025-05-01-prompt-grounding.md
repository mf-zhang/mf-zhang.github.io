---
title: "Prompt-augmented Boundary Attentive Learning for Weakly Supervised Temporal Sentence Grounding"
collection: publications
permalink: /publication/2025-05-01-prompt-grounding
venue: 'IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)'
paperurl: 'https://ieeexplore.ieee.org/document/11015819'
tags:
  - Vision-Language Models
---

Weakly supervised temporal sentence grounding aims to temporally locate events described by a sentence in a video, relying solely on video-level visual-language correspondences. Because of the absence of precise boundary information, existing works primarily focus on multiple instance learning methods to establish segment-level video-language alignment. In this work, we propose Prompt-augmented Boundary Attentive Learning (PBAL) to enable the explicit modeling of the segment boundaries in a weakly supervised context. To represent the boundaries with sentences, we first generate sentences describing the start and end of an event, leveraging the capabilities of large language models (LLMs). With the augmented sentences, we then model the boundary-level video-language correspondence using a novel boundary-attentive learning module. This module generates probability maps of the starting and ending points, and is learned through boundary type prediction and self-supervised reconstruction. Experiments on two standard datasets, Charades-STA [1] and ActivityNet Captions [2] demonstrate PBAL’s state-of-the-art performance. The results of our ablation study further demonstrate the effectiveness of our boundary-attentive learning and prompt augmentation techniques.