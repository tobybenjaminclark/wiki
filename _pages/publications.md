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
          {% if entry.conference_url %}
            <a href="{{ entry.conference_url }}">{{ entry.conference }}</a>
          {% else %}
            {{ entry.conference }}
          {% endif %}
          <time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y" }}</time>
        </span>
      </li>
    {% endfor %}
  </ul>
</section>
