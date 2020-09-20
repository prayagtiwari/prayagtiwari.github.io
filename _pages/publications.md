---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


  You can find full list of my articles on [my Google Scholar profile](https://scholar.google.it/citations?user=sDnmJ_YAAAAJ&hl=en)

  Some recent articles can be found here:

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
