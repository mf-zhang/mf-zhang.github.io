---
layout: archive
title: "Publications by Tags"
permalink: /tags/
author_profile: true
---

{% include base_path %}

{% assign all_tags = "" | split: "" %}
{% for post in site.publications %}
  {% assign all_tags = all_tags | concat: post.tags %}
{% endfor %}
{% assign tags = all_tags | uniq | sort %}

<div class="tag-list">
  {% for tag in tags %}
    {% if tag %}
      <div class="tag-block">
        <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
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
    {% endif %}
  {% endfor %}
</div> 