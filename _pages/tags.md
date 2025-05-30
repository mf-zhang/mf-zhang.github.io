---
layout: archive
title: "Publications by Tags"
permalink: /tags/
author_profile: true
---

{% include base_path %}

<style>
.tag-block {
  margin-bottom: 2em;
  padding: 1em;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tag-block h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.archive__item {
  background: white;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.archive__item:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

.archive__item-title {
  margin: 0 0 0.5em 0;
}

.archive__item-title a {
  color: #2c3e50;
  text-decoration: none;
}

.archive__item-title a:hover {
  color: #3498db;
}

.archive__item-excerpt {
  color: #666;
  margin: 0;
  font-size: 0.9em;
}
</style>

{% assign all_tags = "" | split: "" %}
{% for post in site.publications %}
  {% assign all_tags = all_tags | concat: post.tags %}
{% endfor %}
{% assign tags = all_tags | uniq | sort %}

<div class="tag-directory" style="margin-bottom: 2em; padding: 1em; background-color: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 0.5em; margin-bottom: 1em;">Tags</h2>
  <div style="display: flex; flex-wrap: wrap; gap: 1em;">
    {% for tag in tags %}
      {% if tag %}
        <a href="#{{ tag | slugify }}" style="color: #3498db; text-decoration: none; padding: 0.5em 1em; background: white; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          {{ tag }}
        </a>
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="tag-list">
  {% for tag in tags %}
    {% if tag %}
      <div class="tag-block">
        <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
        {% assign sorted_posts = site.publications | sort: 'date' | reverse %}
        {% for post in sorted_posts %}
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