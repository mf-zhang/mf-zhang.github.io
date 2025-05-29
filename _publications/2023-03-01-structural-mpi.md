---
title: "Structural Multiplane Image: Bridging Neural View Synthesis and 3D Reconstruction"
collection: publications
permalink: /publication/2023-03-01-structural-mpi
venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://arxiv.org/pdf/2303.05937.pdf'
codeurl: 'https://github.com/mf-zhang/Structural-MPI'
authors: 'Mingfang Zhang, Jinglu Wang, Xiao Li, Yifei Huang, Yoichi Sato, Yan Lu'
tags:
  - a) video and multi-view understanding
---
 
The Multiplane Image (MPI), containing a set of fronto-parallel RGBA layers, is an effective and efficient representation for view synthesis from sparse inputs. Yet, its fixed structure limits the performance, especially for surfaces imaged at oblique angles. We introduce the Structural MPI (S-MPI), where the plane structure approximates 3D scenes concisely. Conveying RGBA contexts with geometrically-faithful structures, the S-MPI directly bridges view synthesis and 3D reconstruction. It can not only overcome the critical limitations of MPI, ie, discretization artifacts from sloped surfaces and abuse of redundant layers, and can also acquire planar 3D reconstruction. Despite the intuition and demand of applying S-MPI, great challenges are introduced, eg, high-fidelity approximation for both RGBA layers and plane poses, multi-view consistency, non-planar regions modeling, and efficient rendering with intersected planes. Accordingly, we propose a transformer-based network based on a segmentation model. It predicts compact and expressive S-MPI layers with their corresponding masks, poses, and RGBA contexts. Non-planar regions are inclusively handled as a special case in our unified framework. Multi-view consistency is ensured by sharing global proxy embeddings, which encode plane-level features covering the complete 3D scenes with aligned coordinates. Intensive experiments show that our method outperforms both previous state-of-the-art MPI-based view synthesis methods and planar reconstruction methods.