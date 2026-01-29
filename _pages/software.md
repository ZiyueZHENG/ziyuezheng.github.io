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
    {% for ic in r.icons %}
      {% if ic == "github" %}<i class="fab fa-github" style="margin-right:6px;"></i>{% endif %}
      {% if ic == "python" %}<i class="fab fa-python" style="margin-right:6px;"></i>{% endif %}
      {% if ic == "r" %}<i class="fab fa-r-project" style="margin-right:6px;"></i>{% endif %}
    {% endfor %}
    <p class="card-text">{{ r.description }}</p>
  </div>
</div>
{% endfor %}

