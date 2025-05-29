---
title: "Single-to-Dual-View Adaptation for Egocentric 3D Hand Pose Estimation"
collection: publications
permalink: /publication/2024-03-01-single-handpose
venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://arxiv.org/pdf/2403.04381.pdf'
codeurl: 'https://github.com/ut-vision/S2DHand'
authors: 'Ruicong Liu, Takehiko Ohkawa, Mingfang Zhang, Yoichi Sato'
tags:
  - [c] human body perception
---

The pursuit of accurate 3D hand pose estimation stands as a keystone for understanding human activity in the realm of egocentric vision. The majority of existing estimation methods still rely on single-view images as input leading to potential limitations eg limited field-of-view and ambiguity in depth. To address these problems adding another camera to better capture the shape of hands is a practical direction. However existing multi-view hand pose estimation methods suffer from two main drawbacks: 1) Requiring multi-view annotations for training which are expensive. 2) During testing the model becomes inapplicable if camera parameters/layout are not the same as those used in training. In this paper we propose a novel Single-to-Dual-view adaptation (S2DHand) solution that adapts a pre-trained single-view estimator to dual views. Compared with existing multi-view training methods 1) our adaptation process is unsupervised eliminating the need for multi-view annotation. 2) Moreover our method can handle arbitrary dual-view pairs with unknown camera parameters making the model applicable to diverse camera settings. Specifically S2DHand is built on certain stereo constraints including pair-wise cross-view consensus and invariance of transformation between both views. These two stereo constraints are used in a complementary manner to generate pseudo-labels allowing reliable adaptation. Evaluation results reveal that S2DHand achieves significant improvements on arbitrary camera pairs under both in-dataset and cross-dataset settings and outperforms existing adaptation methods with leading performance.