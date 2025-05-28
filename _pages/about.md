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

.education-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
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

@media (max-width: 768px) {
    .experience-item {
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 4px;
    }
    
    .experience-company {
        width: auto;
        align-items: center;
        flex: 1;
        gap: 4px;
    }
    
    .experience-content {
        margin-left: 0;
        width: auto;
    }
    
    .company-name {
        min-width: 100px;
    }
    
    .team-name {
        margin-top: 4px;
        display: block;
    }

    .experience-date {
        margin-left: 12px;
        margin-top: 0;
    }
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
            <img src="../images/logo/logo_shai.png" alt="Shanghai AI Lab Logo" class="company-logo"/>
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
            <img src="../images/logo/logo_msra.png" alt="Microsoft Research Asia Logo" class="company-logo"/>
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

<div class="awards-card">
    <div class="award-item">
        <span>Please visit my <a href="/publications/" style="color: #3498db; text-decoration: none; font-weight: 500;">publications page</a> or <a href="{{ site.data.cv.latest_cv_path }}" style="color: #3498db; text-decoration: none; font-weight: 500;">CV</a> for more details.</span>
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
