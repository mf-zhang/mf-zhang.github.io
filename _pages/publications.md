---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

My research focus on computer vision and human activity understanding, specifically involving: <br>
<span class="category-a">[a]</span> video and multi-view understanding; <br>
<span class="category-b">[b]</span> vision-language multimodal models; <br>
<span class="category-c">[c]</span> human body perception. <br>

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<style>
.venue-ribbon {
    position: absolute;
    top: 0;
    left: 0;
    background: #2c3e50;
    color: white;
    padding: 4px 12px;
    font-size: 0.85em;
    font-weight: 500;
    border-radius: 8px;
    z-index: 1;
}

.venue-ribbon::after {
    display: none;
}

.publication-card {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
    margin: 24px 0;
    padding: 24px;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    opacity: 1;
    transform: translateY(0);
}

.publication-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    border-color: rgba(0, 0, 0, 0.1);
}

.publication-image {
    flex: 0 0 280px;
    text-align: center;
    margin-right: 24px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.publication-image img {
    width: 100%;
    max-width: 280px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.publication-image img:hover {
    transform: scale(1.02);
}

.publication-content {
    flex: 1;
    min-width: 300px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.publication-title {
    color: #2c3e50;
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 6px;
}

.publication-authors {
    color: #34495e;
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 6px;
}

.publication-venue {
    color: #7f8c8d;
    font-size: 0.95em;
    margin-bottom: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
}

.publication-links {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.publication-links a {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    color: #3498db;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9em;
    font-weight: 500;
    background: rgba(52, 152, 219, 0.1);
    transition: all 0.2s ease;
}

.publication-links a:hover {
    background: rgba(52, 152, 219, 0.2);
    transform: translateY(-1px);
}

.publication-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 12px;
}

.publication-tag {
    display: inline-block;
    padding: 4px 8px;
    background: rgba(52, 152, 219, 0.08);
    color: #3498db;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
    transition: all 0.2s ease;
}

.publication-tag:hover {
    background: rgba(52, 152, 219, 0.15);
}

.tag-filter-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin: 20px 0;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 8px;
}

.tag-filter {
    display: inline-block;
    padding: 6px 12px;
    background: #ffffff;
    color: #3498db;
    border: 1px solid #3498db;
    border-radius: 6px;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.tag-filter:hover {
    background: rgba(52, 152, 219, 0.1);
}

.tag-filter.active {
    background: #3498db;
    color: #ffffff;
}

.publication-card.hidden {
    display: none;
    opacity: 0;
    transform: translateY(20px);
}

.publication-number {
    position: absolute;
    bottom: 24px;
    right: 24px;
    font-size: 0.9em;
    font-weight: 600;
    color: #666;
}

.publication-number .num1 {
    color: #000000;
}

.publication-number .num2 {
    color: #e74c3c;
}

.publication-number .num2.category-a {
    color: #3498db;
}

.publication-number .num2.category-b {
    color: #2ecc71;
}

.publication-number .num2.category-c {
    color: #e67e22;
}

.category-tag {
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: 500;
    margin-left: 8px;
}

.category-a {
    background: rgba(52, 152, 219, 0.1);
    color: #3498db;
}

.category-b {
    background: rgba(46, 204, 113, 0.1);
    color: #2ecc71;
}

.category-c {
    background: rgba(230, 126, 34, 0.1);
    color: #e67e22;
}

@media (max-width: 768px) {
    .publication-card {
        padding: 16px;
        margin: 16px 0;
        align-items: flex-start;
    }
    
    .publication-image {
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 16px;
    }
    
    .publication-content {
        margin-left: 0;
    }
    
    .publication-title {
        font-size: 1.1em;
    }
    
    .publication-authors {
        font-size: 0.95em;
    }
    
    .publication-venue {
        font-size: 0.9em;
    }
}
</style>

<div class="publication-card">
    <div class="venue-ribbon">Arxiv</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-b">b3</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/arxiv25_assist.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">An Egocentric Vision-Language Model based Portable Real-time Smart Assistant</h3>
        <p class="publication-authors">Yifei Huang, Jilan Xu, Baoqi Pei, Yuping He, Guo Chen, <b>Mingfang Zhang</b>, Lijin Yang, ..., Limin Wang</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
        <div class="publication-links">
            <a href="/publication/2025-03-01-egocentric-vision-language-model">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">Arxiv</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-b">b2</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/arxiv25_eail.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Egocentric Action-aware Inertial Localization in Point Clouds</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Ryo Yonetani, Yifei Huang, Liangyang Ouyang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
        <div class="publication-links">
            <a href="/publication/2025-05-01-egocentric-action-aware-inertial-localization">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">TCSVT</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-b">b1</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/tcsvt25_prompt.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Prompt-augmented Boundary Attentive Learning for Weakly Supervised Temporal Sentence Grounding</h3>
        <p class="publication-authors">Zhehao Zhu, Yifei Huang, <b>Mingfang Zhang</b>, Liangyang Ouyang, Yoichi Sato</p>
        <p class="publication-venue">IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2025</p>
        <div class="publication-links">
            <a href="/publication/2025-01-01-prompt-augmented-boundary-attentive-learning">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">ICLR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-c">c3</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/iclr25_hand.jpeg" alt="ICLR 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training</h3>
        <p class="publication-authors">Nie Lin, Takehiko Ohkawa, Yifei Huang, <b>Mingfang Zhang</b>, Minjie Cai, Ming Li, Ryosuke Furuta, Yoichi Sato</p>
        <p class="publication-venue">International Conference on Learning Representations (ICLR), 2025</p>
        <div class="publication-links">
            <a href="/publication/2025-02-01-simhand">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">ECCV</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a5</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/eccv24_mae.jpeg" alt="ECCV 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Masked Video and Body-worn IMU Autoencoder for Egocentric Action Recognition</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yifei Huang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">European Conference on Computer Vision (ECCV), 2024</p>
        <div class="publication-links">
            <a href="/publication/2024-07-01-masked-video-imu-autoencoder">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a4</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr24_egoexo.jpeg" alt="CVPR 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">EgoExoLearn: A Dataset for Bridging Asynchronous Ego- and Exo-centric View of Procedural Activities in Real World</h3>
        <p class="publication-authors">(* co-first author) Yifei Huang* , Guo Chen*, Jilan Xu*, <b>Mingfang Zhang</b>*, Lijin Yang, Baoqi Pei, Hongjie Zhang, Lu Dong, Yali Wang, Limin Wang, Yu Qiao</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
        <div class="publication-links">
            <a href="/publication/2024-03-01-egoexolearn">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-c">c2</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr24_hand.jpeg" alt="CVPR 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Single-to-Dual-View Adaptation for Egocentric 3D Hand Pose Estimation</h3>
        <p class="publication-authors">Ruicong Liu, Takehiko Ohkawa, <b>Mingfang Zhang</b>, Yoichi Sato</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
        <div class="publication-links">
            <a href="/publication/2024-03-01-s2dhand">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a3</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr23_mpi.jpeg" alt="CVPR 2023"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Structural Multiplane Image: Bridging Neural View Synthesis and 3D Reconstruction</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Jinglu Wang, Xiao Li, Yifei Huang, Yoichi Sato, Yan Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023</p>
        <div class="publication-links">
            <a href="/publication/2023-03-01-structural-mpi">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-c">c1</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr22_gaze.jpeg" alt="CVPR 2022"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">GazeOnce: Real-Time Multi-Person Gaze Estimation</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yunfei Liu, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022</p>
        <div class="publication-links">
            <a href="/publication/2022-04-01-gazeonce">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">TPAMI</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a2</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/pami21_dark.jpeg" alt="PAMI 2021"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yinqiang Zheng, Feng Lu</p>
        <p class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021</p>
        <div class="publication-links">
            <a href="/publication/2021-12-01-optical-flow-dark">Project Page</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a1</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr20_dark.jpeg" alt="CVPR 2020"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors">(*co-first author) Yinqiang Zheng*, <b>Mingfang Zhang</b>*, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020</p>
        <div class="publication-links">
            <a href="/publication/2020-04-01-optical-flow-dark">Project Page</a>
        </div>
    </div>
</div>
