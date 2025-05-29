---
title: "Masked Video and Body-worn IMU Autoencoder for Egocentric Action Recognition"
collection: publications
permalink: /publication/2024-07-01-masked-recognition
venue: 'European Conference on Computer Vision (ECCV)'
paperurl: 'http://www.arxiv.org/pdf/2407.06628'
codeurl: 'https://github.com/mf-zhang/IMU-Video-MAE'
authors: 'Mingfang Zhang, Yifei Huang, Ruicong Liu, Yoichi Sato'
tags:
  - a) video and multi-view understanding
---

Compared with visual signals, Inertial Measurement Units (IMUs) placed on human limbs can capture accurate motion signals while being robust to lighting variation and occlusion. While these characteristics are intuitively valuable to help egocentric action recognition, the potential of IMUs remains under-explored. In this work, we present a novel method for action recognition that integrates motion data from body-worn IMUs with egocentric video. Due to the scarcity of labeled multimodal data, we design an MAE-based self-supervised pretraining method, obtaining strong multi-modal representations via modeling the natural correlation between visual and motion signals. To model the complex relation of multiple IMU devices placed across the body, we exploit the collaborative dynamics in multiple IMU devices and propose to embed the relative motion features of human joints into a graph structure. Experiments show our method can achieve state-of-the-art performance on multiple public datasets. The effectiveness of our MAE-based pretraining and graph-based IMU modeling are further validated by experiments in more challenging scenarios, including partially missing IMU devices and video quality corruption, promoting more flexible usages in the real world.