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

@media (max-width: 768px) {
    .intro-card {
        margin: 12px 0;
        padding: 16px;
    }
    
    .intro-text {
        font-size: 1.1em;
        line-height: 1.6;
        margin: 1em 0;
    }
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
    text-decoration: underline;
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

@media (max-width: 768px) {
    .education-card {
        padding: 10px;
        margin: 6px 0;
    }
    
    .education-icon {
        flex: 0 0 24px;
        margin-right: 8px;
    }
    
    .education-icon img {
        width: 24px;
        height: 24px;
    }
    
    .education-school {
        font-size: 0.95em;
    }
    
    .education-degree {
        font-size: 0.9em;
    }
    
    .education-date {
        font-size: 0.8em;
    }
}

.education-icon {
    flex: 0 0 32px;
    margin-right: 12px;
    text-align: center;
    padding-top: 8px;
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
        <img src="../images/logo/logo_ut.png" alt="University of Tokyo Logo" loading="lazy"/>
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
        <img src="../images/logo/logo_nju.png" alt="Nanjing University Logo" loading="lazy"/>
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

@media (max-width: 768px) {
    .experience-card {
        padding: 10px;
        margin: 6px 0;
    }
    
    .experience-item {
        font-size: 0.9em;
        gap: 4px;
    }
    
    .company-logo {
        width: 16px;
        height: 16px;
    }
    
    .company-name {
        min-width: 100px;
        font-size: 0.95em;
    }
    
    .team-name {
        font-size: 0.9em;
    }
    
    .experience-date {
        font-size: 0.8em;
    }
}

.experience-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 0.95em;
    flex-wrap: wrap;
    gap: 8px;
}

.experience-item:last-child {
    margin-bottom: 0;
}

.experience-company {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    flex: 1;
    min-width: 200px;
}

.company-logo {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    object-fit: contain;
    flex-shrink: 0;
}

.experience-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 150px;
}

.company-name {
    font-weight: 400;
    margin-right: 4px;
    display: inline-block;
    min-width: 120px;
    line-height: 1.4;
    padding-top: 2px;
}

.team-name {
    color: #7f8c8d;
    display: inline-block;
    line-height: 1.4;
}

.experience-date {
    color: #7f8c8d;
    font-size: 0.85em;
    margin-left: 12px;
    white-space: nowrap;
    flex-shrink: 0;
}

.awards-card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 8px 0;
    padding: 12px;
    transition: transform 0.2s ease-in-out;
}

@media (max-width: 768px) {
    .awards-card {
        padding: 10px;
        margin: 6px 0;
    }
    
    .award-item {
        font-size: 0.9em;
        margin-bottom: 6px;
    }
    
    .award-icon {
        font-size: 1.1em;
    }
    
    .award-date {
        font-size: 0.8em;
    }
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
            <img src="../images/logo/logo_ca.png" alt="CyberAgent Logo" class="company-logo" loading="lazy"/>
            <div class="experience-content">
                <div>
                    <span class="company-name">Intern at CyberAgent AI Lab</span>
                    <span class="team-name">Activity Understanding Team</span>
                </div>
            </div>
        </div>
        <span class="experience-date">2024</span>
    </div>
    <div class="experience-item">
        <div class="experience-company">
            <img src="../images/logo/logo_shai.png" alt="Shanghai AI Lab Logo" class="company-logo" loading="lazy"/>
            <div class="experience-content">
                <div>
                    <span class="company-name">Intern at Shanghai AI Laboratory</span>
                    <span class="team-name">OpenGVLab</span>
                </div>
            </div>
        </div>
        <span class="experience-date">2023</span>
    </div>
    <div class="experience-item">
        <div class="experience-company">
            <img src="../images/logo/logo_msra.png" alt="Microsoft Research Asia Logo" class="company-logo" loading="lazy"/>
            <div class="experience-content">
                <div>
                    <span class="company-name">Intern at Microsoft Research Asia</span>
                    <span class="team-name">Media Computing Group</span>
                </div>
            </div>
        </div>
        <span class="experience-date">2022</span>
    </div>
</div>


<div class="section-title">Services and Awards</div>

<div class="awards-card">
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>Reviewer of CVPR, ICCV, ECCV, NeurIPS, ICML, ICLR, AAAI, ACMMM, BMVC</span>
    </div>
    <div class="award-item">
        <span class="award-icon">•</span>
        <span>JSPS Research Fellowship for Young Scientists DC2</span>
        <span class="award-date">2025</span>
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

<div class="section-title">Publications</div>

<span class="category-a">[a]</span> video and multi-view understanding <br>
<span class="category-b">[b]</span> vision-language multimodal models <br>
<span class="category-c">[c]</span> human body perception <br>




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
        padding: 12px;
        margin: 12px 0;
    }
    
    .publication-image {
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 12px;
    }
    
    .publication-image img {
        max-width: 100%;
    }
    
    .publication-title {
        font-size: 1.1em;
        line-height: 1.3;
    }
    
    .publication-authors {
        font-size: 0.9em;
        line-height: 1.4;
    }
    
    .publication-venue {
        font-size: 0.85em;
    }
    
    .publication-links {
        gap: 8px;
    }
    
    .publication-links a {
        padding: 4px 8px;
        font-size: 0.85em;
    }
    
    .publication-tags {
        gap: 6px;
        margin-top: 8px;
    }
    
    .publication-tag {
        padding: 3px 6px;
        font-size: 0.8em;
    }
    
    .publication-number {
        bottom: 12px;
        right: 12px;
        font-size: 0.85em;
    }
}

/* 添加触摸设备优化 */
@media (hover: none) {
    .intro-card:hover,
    .education-card:hover,
    .experience-card:hover,
    .awards-card:hover,
    .publication-card:hover {
        transform: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .publication-links a:active {
        background: rgba(52, 152, 219, 0.2);
    }
    
    .publication-tag:active {
        background: rgba(52, 152, 219, 0.15);
    }
}

/* 优化字体大小和间距 */
@media (max-width: 480px) {
    .section-title {
        font-size: 1.3em;
        margin: 1em 0 0.2em 0;
    }
    
    .intro-text {
        font-size: 1em;
    }
    
    .education-school {
        font-size: 0.9em;
    }
    
    .education-degree {
        font-size: 0.85em;
    }
    
    .company-name {
        font-size: 0.9em;
    }
    
    .team-name {
        font-size: 0.85em;
    }
    
    .award-item {
        font-size: 0.85em;
    }
    
    .publication-title {
        font-size: 1em;
    }
    
    .publication-authors {
        font-size: 0.85em;
    }
}
</style>

<div class="publication-card">
    <div class="venue-ribbon">Arxiv</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-b">b3</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/arxiv25_assist.jpeg" alt="Arxiv 2025" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">An Egocentric Vision-Language Model based Portable Real-time Smart Assistant</h3>
        <p class="publication-authors">Yifei Huang, Jilan Xu, Baoqi Pei, Yuping He, Guo Chen, <b>Mingfang Zhang</b>, Lijin Yang, ..., Limin Wang</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
        <div class="publication-links">
            <a href="https://github.com/OpenGVLab/vinci">Project Page</a>
            <a href="https://arxiv.org/pdf/2503.04250">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">Arxiv</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-b">b2</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/arxiv25_eail.jpeg" alt="Arxiv 2025" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Egocentric Action-aware Inertial Localization in Point Clouds</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Ryo Yonetani, Yifei Huang, Liangyang Ouyang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">Arxiv preprint, 2025</p>
        <div class="publication-links">
            <a href="/publication/2025-05-01-egocentric-localization">Project Page</a>
            <a href="https://arxiv.org/abs/2505.14346">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">TCSVT</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-b">b1</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/tcsvt25_prompt.jpeg" alt="Arxiv 2025" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Prompt-augmented Boundary Attentive Learning for Weakly Supervised Temporal Sentence Grounding</h3>
        <p class="publication-authors">Zhehao Zhu, Yifei Huang, <b>Mingfang Zhang</b>, Liangyang Ouyang, Yoichi Sato</p>
        <p class="publication-venue">IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2025</p>
        <div class="publication-links">
            <!-- <a href="/publication/2025-05-01-prompt-grounding">Project Page</a> -->
            <a href="https://ieeexplore.ieee.org/document/11015819">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">ICLR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-c">c3</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/iclr25_hand.jpeg" alt="ICLR 2025" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training</h3>
        <p class="publication-authors">Nie Lin, Takehiko Ohkawa, Yifei Huang, <b>Mingfang Zhang</b>, Minjie Cai, Ming Li, Ryosuke Furuta, Yoichi Sato</p>
        <p class="publication-venue">International Conference on Learning Representations (ICLR), 2025</p>
        <div class="publication-links">
            <a href="https://tkhkaeio.github.io/projects/25-simhand/index.html">Project Page</a>
            <a href="https://arxiv.org/pdf/2502.15251">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">ECCV</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a5</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/eccv24_mae.jpeg" alt="ECCV 2024" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Masked Video and Body-worn IMU Autoencoder for Egocentric Action Recognition</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yifei Huang, Ruicong Liu, Yoichi Sato</p>
        <p class="publication-venue">European Conference on Computer Vision (ECCV), 2024</p>
        <div class="publication-links">
            <a href="/publication/2024-07-01-masked-recognition">Project Page</a>
            <a href="http://www.arxiv.org/pdf/2407.06628">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a4</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr24_egoexo.jpeg" alt="CVPR 2024" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">EgoExoLearn: A Dataset for Bridging Asynchronous Ego- and Exo-centric View of Procedural Activities in Real World</h3>
        <p class="publication-authors">(* co-first author) Yifei Huang* , Guo Chen*, Jilan Xu*, <b>Mingfang Zhang</b>*, Lijin Yang, Baoqi Pei, Hongjie Zhang, Lu Dong, Yali Wang, Limin Wang, Yu Qiao</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
        <div class="publication-links">
            <a href="https://github.com/OpenGVLab/EgoExoLearn">Project Page</a>
            <a href="https://arxiv.org/pdf/2403.16182.pdf">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-c">c2</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr24_hand.jpeg" alt="CVPR 2024" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Single-to-Dual-View Adaptation for Egocentric 3D Hand Pose Estimation</h3>
        <p class="publication-authors">Ruicong Liu, Takehiko Ohkawa, <b>Mingfang Zhang</b>, Yoichi Sato</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024</p>
        <div class="publication-links">
            <a href="https://github.com/ut-vision/S2DHand">Project Page</a>
            <a href="https://arxiv.org/pdf/2403.04381.pdf">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a3</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr23_mpi.jpeg" alt="CVPR 2023" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Structural Multiplane Image: Bridging Neural View Synthesis and 3D Reconstruction</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Jinglu Wang, Xiao Li, Yifei Huang, Yoichi Sato, Yan Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023</p>
        <div class="publication-links">
            <a href="/publication/2023-03-01-structural-mpi">Project Page</a>
            <a href="https://arxiv.org/pdf/2303.05937.pdf">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-c">c1</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr22_gaze.jpeg" alt="CVPR 2022" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">GazeOnce: Real-Time Multi-Person Gaze Estimation</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yunfei Liu, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022</p>
        <div class="publication-links">
            <a href="/publication/2022-04-01-gazeonce-gaze">Project Page</a>
            <a href="https://arxiv.org/abs/2204.09480">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">TPAMI</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a2</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/pami21_dark.jpeg" alt="PAMI 2021" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors"><b>Mingfang Zhang</b>, Yinqiang Zheng, Feng Lu</p>
        <p class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021</p>
        <div class="publication-links">
            <a href="/publication/2021-12-01-optical-dark">Project Page</a>
            <a href="https://ieeexplore.ieee.org/document/9626625">Paper</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <div class="venue-ribbon">CVPR</div>
    <div class="publication-number">
        #<span class="num1"></span>[<span class="num2 category-a">a1</span>]
    </div>
    <div class="publication-image">
        <img src="../images/papers/cvpr20_dark.jpeg" alt="CVPR 2020" loading="lazy"/>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Optical Flow in the Dark</h3>
        <p class="publication-authors">(*co-first author) Yinqiang Zheng*, <b>Mingfang Zhang</b>*, Feng Lu</p>
        <p class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020</p>
        <div class="publication-links">
            <a href="/publication/2020-04-01-optical-dark">Project Page</a>
            <a href="http://openaccess.thecvf.com/content_CVPR_2020/papers/Zheng_Optical_Flow_in_the_Dark_CVPR_2020_paper.pdf">Paper</a>
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
