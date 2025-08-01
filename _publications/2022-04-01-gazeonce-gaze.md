---
title: "GazeOnce: Real-Time Multi-Person Gaze Estimation"
collection: publications
permalink: /publication/2022-04-01-gazeonce-gaze
venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://arxiv.org/abs/2204.09480'
codeurl: 'https://github.com/mf-zhang/GazeOnce'
authors: 'Mingfang Zhang, Yunfei Liu, Feng Lu'
tags:
  - c) human body perception
---

Appearance-based gaze estimation aims to predict the 3D eye gaze direction from a single image. While recent deep learning-based approaches have demonstrated excellent performance, they usually assume one calibrated face in each input image and cannot output multi-person gaze in real time. However, simultaneous gaze estimation for multiple people in the wild is necessary for real-world applications. In this paper, we propose the first one-stage end-to-end gaze estimation method, GazeOnce, which is capable of simultaneously predicting gaze directions for multiple faces (> 10) in an image. In addition, we design a sophisticated data generation pipeline and propose a new dataset, MPSGaze, which contains full images of multiple people with 3D gaze ground truth. Experimental results demonstrate that our unified framework not only offers a faster speed, but also provides a lower gaze estimation error compared with state-of-the-art methods. This technique can be useful in real-time applications with multiple users.