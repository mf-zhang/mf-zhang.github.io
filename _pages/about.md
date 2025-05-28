---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.intro-card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 20px;
    transition: transform 0.2s ease-in-out;
}

.intro-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.intro-text {
    color: var(--global-text-color);
    font-size: 1.2em;
    line-height: 1.8;
    margin: 1.5em 0;
    font-weight: 400;
}

.intro-text a {
    color: var(--global-theme-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

.intro-text a:hover {
    color: var(--global-hover-color);
    text-decoration: underline;
}
</style>

<p class="intro-text">
    I'm a PhD student at the University of Tokyo, supervised by Prof. <a href="https://sites.google.com/ut-vision.org/ysato/">Yoichi Sato</a>. I focus on computer vision and human activity understanding, specifically involving video and multi-view understanding, vision-language multimodal models, and human body perception.
</p>

<style>
.education-card {
    display: flex;
    align-items: flex-start;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 8px 0;
    padding: 12px;
    transition: transform 0.2s ease-in-out;
}

.education-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.education-icon {
    flex: 0 0 32px;
    margin-right: 12px;
    text-align: center;
}

.education-icon img {
    width: 32px;
    height: 32px;
    object-fit: contain;
}

.education-content {
    flex: 1;
}

.education-school {
    color: #34495e;
    font-weight: 500;
    margin-bottom: 8px;
}

.education-degree {
    color: #2c3e50;
    margin-bottom: 4px;
    font-size: 0.95em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.education-date {
    color: #7f8c8d;
    font-size: 0.85em;
    margin-left: 12px;
}

.education-degree:last-child {
    margin-bottom: 0;
}

.section-title {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--global-text-color);
    margin: 1.2em 0 0.3em 0;
    padding-bottom: 0em;
    border-bottom: 1px solid var(--global-theme-color);
    display: flex;
    align-items: center;
}

.section-title::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 1em;
    background-color: var(--global-theme-color);
    margin-right: 0.4em;
    border-radius: 1.5px;
}
</style>

<div class="section-title">Education</div>

<div class="education-card">
    <div class="education-icon">
        <img src="../images/logo/logo_ut.png" alt="University of Tokyo Logo"/>
    </div>
    <div class="education-content">
        <div class="education-school">The University of Tokyo</div>
        <div class="education-degree">
            <span>Ph.D. in Information Science</span>
            <span class="education-date">2026.3</span>
        </div>
        <div class="education-degree">
            <span>M.Sc. in Information Science</span>
            <span class="education-date">2023.3</span>
        </div>
    </div>
</div>

<div class="education-card">
    <div class="education-icon">
        <img src="../images/logo/logo_nju.png" alt="Nanjing University Logo"/>
    </div>
    <div class="education-content">
        <div class="education-school">Nanjing University</div>
        <div class="education-degree">
            <span>B.Sc. in Computer Science</span>
            <span class="education-date">2020.7</span>
        </div>
    </div>
</div>


<style>
.experience-card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 8px 0;
    padding: 12px;
    transition: transform 0.2s ease-in-out;
}

.experience-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.experience-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 0.95em;
}

.experience-item:last-child {
    margin-bottom: 0;
}

.experience-company {
    display: flex;
    align-items: center;
    font-weight: 500;
}

.company-logo {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    object-fit: contain;
}

.experience-date {
    color: #7f8c8d;
    font-size: 0.85em;
    margin-left: 12px;
}

.awards-card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 8px 0;
    padding: 12px;
    transition: transform 0.2s ease-in-out;
}

.awards-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.award-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 0.95em;
}

.award-item:last-child {
    margin-bottom: 0;
}

.award-icon {
    margin-right: 8px;
    color: #3498db;
    font-size: 1.2em;
    line-height: 1;
}

.award-date {
    color: #7f8c8d;
    font-size: 0.85em;
    margin-left: auto;
    padding-left: 12px;
}
</style>

<div class="section-title">Research Experience</div>

<div class="experience-card">
    <div class="experience-item">
        <div class="experience-company">
            <img src="../images/logo/logo_ca.png" alt="CyberAgent Logo" class="company-logo"/>
            <span>Intern at <a href="https://research.cyberagent.ai/research/activity-understanding/" style="color: inherit; text-decoration: none;">CyberAgent AI Lab, Activity Understanding Team</a></span>
        </div>
        <span class="experience-date">2024</span>
    </div>
    <div class="experience-item">
        <div class="experience-company">
            <img src="../images/logo/logo_shai.png" alt="Shanghai AI Lab Logo" class="company-logo"/>
            <span>Intern at <a href="https://github.com/opengvlab" style="color: inherit; text-decoration: none;">Shanghai AI Laboratory, OpenGVLab</a></span>
        </div>
        <span class="experience-date">2023</span>
    </div>
    <div class="experience-item">
        <div class="experience-company">
            <img src="../images/logo/logo_msra.png" alt="Microsoft Research Asia Logo" class="company-logo"/>
            <span>Intern at <a href="https://www.microsoft.com/en-us/research/group/media-computing-group/" style="color: inherit; text-decoration: none;">Microsoft Research Asia, Media Computing Group</a></span>
        </div>
        <span class="experience-date">2022</span>
    </div>
    <div class="experience-item">
        <div class="experience-company">
            <img src="../images/logo/logo_pcl.png" alt="PCL Logo" class="company-logo"/>
            <span>Intern at PCL Shenzhen, Virtual Reality Lab</span>
        </div>
        <span class="experience-date">2021</span>
    </div>
</div>


<div class="section-title">Services and Awards</div>

<div class="awards-card">
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>JSPS Research Fellowship for Young Scientists DC2</span>
        <span class="award-date">2025</span>
    </div>
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>Reviewer of CVPR, ICCV, ECCV, NeurIPS, ICML, ICLR, AAAI, ACMMM, BMVC</span>
    </div>
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>UTokyo-IIS Research Collaboration Initiative Award</span>
        <span class="award-date">2024</span>
    </div>
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>"Stars of Tomorrow" award by Microsoft Research Asia</span>
        <span class="award-date">2023</span>
    </div>
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>Contracted photographer of Visual China Group</span>
    </div>
</div>

<style>
.publication-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 20px;
    transition: transform 0.2s ease-in-out;
}

.publication-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.publication-image {
    flex: 1 1 300px;
    text-align: center;
}

.publication-image img {
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
    object-fit: cover;
}

.publication-content {
    flex: 1 1 300px;
    margin-left: 20px;
}

.publication-title {
    color: #2c3e50;
    margin-bottom: 10px;
}

.publication-authors {
    color: #34495e;
    margin-bottom: 10px;
}

.publication-venue {
    color: #7f8c8d;
    margin-bottom: 10px;
}

.publication-links a {
    display: inline-block;
    margin-right: 15px;
    color: #3498db;
    text-decoration: none;
}

.publication-links a:hover {
    text-decoration: underline;
}
</style>

<div class="section-title">Publications</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/arxiv25_assist.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">An Egocentric Vision-Language Model based Portable Real-time Smart Assistant</h3>
        <p class="publication-authors">Yifei Huang, Jilan Xu, Baoqi Pei, Yuping He, Guo Chen, <b>Mingfang Zhang</b>, Lijin Yang, ..., Limin Wang</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
        <div class="publication-links">
            <a href="https://arxiv.org/pdf/2503.04250">Paper</a>
            <a href="https://github.com/OpenGVLab/vinci">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/arxiv25_eail.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Egocentric Action-aware Inertial Localization in Point Clouds</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Ryo Yonetani, Yifei Huang, Liangyang Ouyang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
        <div class="publication-links">
            <a href="https://arxiv.org/abs/2505.14346">Paper</a>
            <a href="https://github.com/mf-zhang/Ego-Inertial-Localization">Demo and Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/tcsvt25_prompt.jpeg" alt="Arxiv 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Prompt-augmented Boundary Attentive Learning for Weakly Supervised Temporal Sentence Grounding</h3>
        <p class="publication-authors">Zhehao Zhu, Yifei Huang, <b>Mingfang Zhang</b>, Liangyang Ouyang, Yoichi Sato</p>
        <p class="publication-venue">IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2025</p>
        <div class="publication-links">
            <a href="https://ieeexplore.ieee.org/document/11015819">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/iclr25_hand.jpeg" alt="ICLR 2025"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training</h3>
        <p class="publication-authors">Nie Lin, Takehiko Ohkawa, Yifei Huang, <b>Mingfang Zhang</b>, Minjie Cai, Ming Li, Ryosuke Furuta, Yoichi Sato</p>
        <p class="publication-venue">International Conference on Learning Representations (ICLR), 2025</p>
        <div class="publication-links">
            <a href="https://arxiv.org/pdf/2502.15251">Paper</a>
            <a href="https://github.com/ut-vision/SiMHand">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/eccv24_mae.jpeg" alt="ECCV 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Masked Video and Body-worn IMU Autoencoder for Egocentric Action Recognition</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yifei Huang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">European Conference on Computer Vision (ECCV), 2024</p>
        <div class="publication-links">
            <a href="http://www.arxiv.org/pdf/2407.06628">Paper</a>
            <a href="https://github.com/mf-zhang/IMU-Video-MAE">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr24_egoexo.jpeg" alt="CVPR 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">EgoExoLearn: A Dataset for Bridging Asynchronous Ego- and Exo-centric View of Procedural Activities in Real World</h3>
        <p class="publication-authors">(* co-first author) Yifei Huang* , Guo Chen*, Jilan Xu*, <b>Mingfang Zhang</b>*, Lijin Yang, Baoqi Pei, Hongjie Zhang, Lu Dong, Yali Wang, Limin Wang, Yu Qiao</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
        <div class="publication-links">
            <a href="https://arxiv.org/pdf/2403.16182.pdf">Paper</a>
            <a href="https://github.com/OpenGVLab/EgoExoLearn">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr24_hand.jpeg" alt="CVPR 2024"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Single-to-Dual-View Adaptation for Egocentric 3D Hand Pose Estimation</h3>
        <p class="publication-authors">Ruicong Liu, Takehiko Ohkawa, <b>Mingfang Zhang</b>, Yoichi Sato</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
        <div class="publication-links">
            <a href="https://arxiv.org/pdf/2403.04381.pdf">Paper</a>
            <a href="https://github.com/ut-vision/S2DHand">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr23_mpi.jpeg" alt="CVPR 2023"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Structural Multiplane Image: Bridging Neural View Synthesis and 3D Reconstruction</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Jinglu Wang, Xiao Li, Yifei Huang, Yoichi Sato, Yan Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023</p>
        <div class="publication-links">
            <a href="https://arxiv.org/pdf/2303.05937.pdf">Paper</a>
            <a href="https://github.com/mf-zhang/Structural-MPI">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr22_gaze.jpeg" alt="CVPR 2022"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">GazeOnce: Real-Time Multi-Person Gaze Estimation</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yunfei Liu, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022</p>
        <div class="publication-links">
            <a href="https://arxiv.org/abs/2204.09480">Paper</a>
            <a href="https://github.com/mf-zhang/GazeOnce">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/pami21_dark.jpeg" alt="PAMI 2021"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yinqiang Zheng, Feng Lu</p>
        <p class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021</p>
        <div class="publication-links">
            <a href="https://ieeexplore.ieee.org/document/9626625">Paper</a>
            <a href="https://github.com/mf-zhang/Optical-Flow-in-the-Dark">Code</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="publication-image">
        <img src="../images/papers/cvpr20_dark.jpeg" alt="CVPR 2020"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors">(*co-first author) Yinqiang Zheng*, <b>Mingfang Zhang</b>*, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020</p>
        <div class="publication-links">
            <a href="http://openaccess.thecvf.com/content_CVPR_2020/papers/Zheng_Optical_Flow_in_the_Dark_CVPR_2020_paper.pdf">Paper</a>
            <a href="https://github.com/mf-zhang/Optical-Flow-in-the-Dark">Code</a>
        </div>
    </div>
</div>




<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H5PY7PJR9Q"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H5PY7PJR9Q');
</script>
