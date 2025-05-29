---
layout: archive
title: "Publications by Tags"
permalink: /tags/
author_profile: true
---

{% include base_path %}

{% assign tags = site.publications | map: "tags" | uniq | sort %}

<div class="tag-list">
  {% for tag in tags %}
    <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
    <div class="grid__item">
      {% for post in site.publications %}
        {% if post.tags contains tag %}
          <div class="archive__item">
            <h3 class="archive__item-title" itemprop="headline">
              <a href="{{ base_path }}{{ post.url }}" rel="permalink">{{ post.title }}</a>
            </h3>
            <p class="archive__item-excerpt" itemprop="description">
              Published in <i>{{ post.venue }}</i>, {{ post.date | default: "1900-01-01" | date: "%Y" }}
            </p>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
</div> 