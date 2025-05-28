---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
.publication-card {
    display: flex;
    flex-direction: row;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    margin: 24px 0;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    width: 100%;
    box-sizing: border-box;
    height: 180px;
}

.publication-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
}

.publication-image {
    height: 180px;
    aspect-ratio: 4/3;
    overflow: hidden;
    position: relative;
    background: #f8f9fa;
    flex-shrink: 0;
}

.publication-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.publication-card:hover .publication-image img {
    transform: scale(1.05);
}

.publication-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;
}

.publication-title {
    color: #1a1a1a;
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.publication-authors {
    color: #4a4a4a;
    font-size: 1em;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.publication-venue {
    color: #666;
    font-size: 0.95em;
    margin: 0;
    font-weight: 500;
}

@media (max-width: 768px) {
    .publication-card {
        flex-direction: column;
        margin: 20px 0;
        height: auto;
    }
    
    .publication-image {
        width: 100%;
        height: 180px;
    }
    
    .publication-content {
        padding: 16px;
        gap: 10px;
    }
    
    .publication-title {
        font-size: 1.15em;
    }
    
    .publication-authors {
        font-size: 0.95em;
    }
    
    .publication-venue {
        font-size: 0.9em;
    }
}
</style>

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<a href="/publication/2025-03-01-egocentric-vision-language-model" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/arxiv25_assist.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">An Egocentric Vision-Language Model based Portable Real-time Smart Assistant</h3>
        <p class="publication-authors">Yifei Huang, Jilan Xu, Baoqi Pei, Yuping He, Guo Chen, <b>Mingfang Zhang</b>, Lijin Yang, ..., Limin Wang</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
    </div>
</a>

<a href="/publication/2025-05-01-egocentric-action-aware-inertial-localization" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/arxiv25_eail.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Egocentric Action-aware Inertial Localization in Point Clouds</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Ryo Yonetani, Yifei Huang, Liangyang Ouyang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
    </div>
</a>

<a href="/publication/2025-02-01-simhand" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/iclr25_hand.jpeg" alt="ICLR 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training</h3>
        <p class="publication-authors">Nie Lin, Takehiko Ohkawa, Yifei Huang, <b>Mingfang Zhang</b>, Minjie Cai, Ming Li, Ryosuke Furuta, Yoichi Sato</p>
        <p class="publication-venue">International Conference on Learning Representations (ICLR), 2025</p>
    </div>
</a>

<a href="/publication/2024-03-01-s2dhand" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr24_hand.jpeg" alt="CVPR 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Single-to-Dual-View Adaptation for Egocentric 3D Hand Pose Estimation</h3>
        <p class="publication-authors">Ruicong Liu, Takehiko Ohkawa, <b>Mingfang Zhang</b>, Yoichi Sato</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
    </div>
</a>

<a href="/publication/2023-03-01-structural-mpi" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr23_mpi.jpeg" alt="CVPR 2023"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Structural Multiplane Image: Bridging Neural View Synthesis and 3D Reconstruction</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Jinglu Wang, Xiao Li, Yifei Huang, Yoichi Sato, Yan Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023</p>
    </div>
</a>

<a href="/publication/2022-04-01-gazeonce" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr22_gaze.jpeg" alt="CVPR 2022"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">GazeOnce: Real-Time Multi-Person Gaze Estimation</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yunfei Liu, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022</p>
    </div>
</a>

<a href="/publication/2025-01-01-prompt-augmented" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/tcsvt25_prompt.jpeg" alt="TCSVT 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Prompt-augmented Boundary Attentive Learning for Weakly Supervised Temporal Sentence Grounding</h3>
        <p class="publication-authors">Zhehao Zhu, Yifei Huang, <b>Mingfang Zhang</b>, Liangyang Ouyang, Yoichi Sato</p>
        <p class="publication-venue">IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2025</p>
    </div>
</a>

<a href="/publication/2024-01-01-masked-video" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/eccv24_mae.jpeg" alt="ECCV 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Masked Video and Body-worn IMU Autoencoder for Egocentric Action Recognition</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yifei Huang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">European Conference on Computer Vision (ECCV), 2024</p>
    </div>
</a>

<a href="/publication/2024-01-01-egoexolearn" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr24_egoexo.jpeg" alt="CVPR 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">EgoExoLearn: A Dataset for Bridging Asynchronous Ego- and Exo-centric View of Procedural Activities in Real World</h3>
        <p class="publication-authors">(* co-first author) Yifei Huang* , Guo Chen*, Jilan Xu*, <b>Mingfang Zhang</b>*, Lijin Yang, Baoqi Pei, Hongjie Zhang, Lu Dong, Yali Wang, Limin Wang, Yu Qiao</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
    </div>
</a>

<a href="/publication/2021-01-01-optical-flow-dark" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/pami21_dark.jpeg" alt="PAMI 2021"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yinqiang Zheng, Feng Lu</p>
        <p class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021</p>
    </div>
</a>

<a href="/publication/2020-01-01-optical-flow-dark-cvpr" class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr20_dark.jpeg" alt="CVPR 2020"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors">(*co-first author) Yinqiang Zheng*, <b>Mingfang Zhang</b>*, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020</p>
    </div>
</a>