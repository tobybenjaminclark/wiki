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
        {%- assign publisher_url = entry.publisher_url | default: "" | strip -%}
        <span class="publication-venue">
          {%- capture venue_text -%}{{ entry.publisher }} {{ entry.date | date: "%Y" }}{%- endcapture -%}
          {%- if publisher_url != "" -%}
            (<a href="{{ publisher_url }}">{{ venue_text }}</a>)
          {%- else -%}
            ({{ venue_text }})
          {%- endif -%}
        </span>
      </li>
    {% endfor %}
  </ul>
</section>
