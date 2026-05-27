---
title: Oddments
---

Other things, competitions, projects, and oddbits.
<section class="posts">
  <h5>Competitions</h5>
  <ul>
    {% assign entries = site.oddments | sort: "date" | reverse %}
    {% for entry in entries %}
      {% if entry.category == "competitions" %}
        <li><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a><time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y" }}</time></li>
      {% endif %}
    {% endfor %}
  </ul>

  <h5>Miscellaneous</h5>
  <ul>
    {% for entry in entries %}
      {% unless entry.category == "competitions" %}
        <li><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a><time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y" }}</time></li>
      {% endunless %}
    {% endfor %}
  </ul>
</section>
