---
title: Oddments
---

Fragments, experiments, notes, and things worth keeping.

<section class="posts">
  <h3>Competitions</h3>
  <ul>
    {% assign entries = site.oddments | sort: "date" | reverse %}
    {% for entry in entries %}
      {% if entry.category == "competitions" %}
        <li><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a><time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y" }}</time></li>
      {% endif %}
    {% endfor %}
  </ul>

  <h3>Miscellaneous</h3>
  <ul>
    {% for entry in entries %}
      {% unless entry.category == "competitions" %}
        <li><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a><time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y" }}</time></li>
      {% endunless %}
    {% endfor %}
  </ul>
</section>
