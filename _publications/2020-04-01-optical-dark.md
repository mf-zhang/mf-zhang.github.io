---
title: "Optical Flow in the Dark"
collection: publications
permalink: /publication/2020-04-01-optical-dark
venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'http://openaccess.thecvf.com/content_CVPR_2020/papers/Zheng_Optical_Flow_in_the_Dark_CVPR_2020_paper.pdf'
codeurl: 'https://github.com/mf-zhang/Optical-Flow-in-the-Dark'
authors: 'Yinqiang Zheng*, Mingfang Zhang*, Feng Lu'
tags:
  - a) video and multi-view understanding
---

Many successful optical flow estimation methods have been proposed, but they become invalid when tested in dark scenes because low-light scenarios are not considered when they are designed and current optical flow benchmark datasets lack low-light samples. Even if we preprocess to enhance the dark images, which achieves great visual perception, it still leads to poor optical flow results or even worse ones, because information like motion consistency may be broken while enhancing. We propose an end-to-end data-driven method that avoids error accumulation and learns optical flow directly from low-light noisy images. Specifically, we develop a method to synthesize large-scale low-light optical flow datasets by simulating the noise model on dark raw images. We also collect a new optical flow dataset in raw format with a large range of exposure to be used as a benchmark. The models trained on our synthetic dataset can relatively maintain optical flow accuracy as the image brightness descends and they outperform the existing methods greatly on low-light images.