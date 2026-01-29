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
### [{{ r.name }}]({{ r.url }})

{{ r.description }}

{% endfor %}

