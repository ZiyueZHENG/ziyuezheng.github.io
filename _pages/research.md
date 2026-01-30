---
layout: page
permalink: /research/
title: research
description: ZZY research
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

## Ongoing work

<div class="publications">
{% for p in site.data.ongoing %}
  <div class="pub-entry">
    {% if p.image %}
      <div class="teaser">
        <img src="{{ p.image | relative_url }}" alt="{{ p.title }}">
      </div>
    {% endif %}

    <div class="pub-details">
      <div class="pub-title">{{ p.title }}</div>

      {% if p.authors %}
        <div class="pub-authors">{{ p.authors }}</div>
      {% endif %}

      {% if p.venue or p.year %}
        <div class="pub-venue">
          {% if p.venue %}<em>{{ p.venue }}</em>{% endif %}{% if p.year %}, {{ p.year }}{% endif %}
        </div>
      {% endif %}

      {% if p.desc %}
        <div class="pub-description">{{ p.desc }}</div>
      {% endif %}

      {% if p.links %}
        <div class="pub-links">
          {% for l in p.links %}
            <a class="btn btn-sm btn-outline-primary" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.name }}</a>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

<div style="height: 20px;"></div>

## Publications
{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>


