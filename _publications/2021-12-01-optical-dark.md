---
title: "Optical Flow in the Dark"
collection: publications
permalink: /publication/2021-12-01-optical-dark
venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)'
paperurl: 'https://ieeexplore.ieee.org/document/9626625'
codeurl: 'https://github.com/mf-zhang/Optical-Flow-in-the-Dark'
tags:
  - Multi-view Understanding
  - Computational Photography
---

Optical flow estimation in low-light conditions is a challenging task for existing methods and current optical flow datasets lack low-light samples. Even if the dark images are enhanced before estimation, which could achieve great visual perception, it still leads to suboptimal optical flow results because information like motion consistency may be broken during the enhancement. We propose to apply a novel training policy to learn optical flow directly from new synthetic and real low-light images. Specifically, first, we design a method to collect a new optical flow dataset in multiple exposures with shared optical flow pseudo labels. Then we apply a two-step process to create a synthetic low-light optical flow dataset, based on an existing bright one, by simulating low-light raw features from the multi-exposure raw images we collected. To extend the data diversity, we also include published low-light raw videos without optical flow labels. In our training pipeline, with the three datasets, we create two teacher-student pairs to progressively obtain optical flow labels for all data. Finally, we apply a mix-up training policy with our diversified datasets to produce low-light-robust optical flow models for release. The experiments show that our method can relatively maintain the optical flow accuracy as the image exposure descends and the generalization ability of our method is tested with different cameras in multiple practical scenes.