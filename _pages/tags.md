---
layout: archive
title: "Publications"
permalink: /tags/
author_profile: true
---

{% include base_path %}

{% assign all_tags = "" | split: "" %}
{% for post in site.publications %}
{% assign all_tags = all_tags | concat: post.tags %}
{% endfor %}
{% assign tags = all_tags | uniq | sort %}

<div class="tags-nav">
{% for tag in tags %}{% if tag %}{% assign tag_letter = tag | slice: 0 %}{% assign tag_count = 0 %}{% for post in site.publications %}{% if post.tags contains tag %}{% assign tag_count = tag_count | plus: 1 %}{% endif %}{% endfor %}{% assign tag_label = tag | split: ") " | last %}
<a href="#{{ tag | slugify }}" class="tag-pill tag-pill--{{ tag_letter }}">{{ tag_label }}<span class="tag-pill__count">{{ tag_count }}</span></a>
{% endif %}{% endfor %}
</div>

{% assign sorted_pubs = site.publications | sort: 'date' | reverse %}
<div class="tags-page">
{% for tag in tags %}{% if tag %}{% assign tag_letter = tag | slice: 0 %}{% assign tag_label = tag | split: ") " | last %}
<div class="section-title tag-section-title tag-section-title--{{ tag_letter }}" id="{{ tag | slugify }}">{{ tag_label }}</div>
{% for post in sorted_pubs %}{% if post.tags contains tag %}
<div class="archive__item">
<h3 class="archive__item-title" itemprop="headline"><a href="{{ base_path }}{{ post.url }}" rel="permalink">{{ post.title }}</a></h3>
<p class="archive__item-excerpt" itemprop="description">Published in <i>{{ post.venue }}</i>, {{ post.date | default: "1900-01-01" | date: "%Y" }}</p>
</div>
{% endif %}{% endfor %}
{% endif %}{% endfor %}
</div>
