---
layout: page
permalink: /software/
title: software
description: ZZY software
nav: true
nav_order: 3
---

{% assign repos = site.data.repositories %}

{% for r in repos %}
<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">
      <a href="{{ r.url }}" target="_blank" rel="noopener">{{ r.name }}</a>
    </h5>
    <p class="card-text">{{ r.description }}</p>
  </div>
</div>
{% endfor %}

