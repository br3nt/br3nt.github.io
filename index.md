---
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<ul>
  {% for post in site.posts %}
    <a href="{{ post.url }}">{{ post.title }}</a>
    {{ post.excerpt }}
  {% endfor %}
</ul>
