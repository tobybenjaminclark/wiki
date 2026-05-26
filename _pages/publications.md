---
title: Publications
---

Publications and longer-form work.

<section class="posts">
  <ul>
    {% assign entries = site.publications | sort: "date" | reverse %}
    {% for entry in entries %}
      <li><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a><time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y" }}</time></li>
    {% endfor %}
  </ul>
</section>
