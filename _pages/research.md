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
{% for p in site.data.ongoing %}
- {{ p.title }} 
    
    — {{ p.desc }}
{% endfor %}

## Publications
{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>


