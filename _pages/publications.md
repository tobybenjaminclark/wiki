---
title: Publications
---

Publications and longer-form work.

<section class="posts publication-list">
  <ul>
    {% assign entries = site.publications | sort: "date" | reverse %}
    {% for entry in entries %}
      <li>
        <a class="publication-title" href="{{ entry.url | relative_url }}">{{ entry.title }}.</a>
        <span class="publication-venue">
          {% if entry.publisher_url %}
            <a href="{{ entry.publisher_url }}">{{ entry.publisher }} {{ entry.date | date: "%Y" }}</a>
          {% else %}
            {{ entry.publisher }} {{ entry.date | date: "%Y" }}
          {% endif %}
        </span>
      </li>
    {% endfor %}
  </ul>
</section>
