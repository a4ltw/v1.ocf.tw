---
layout: articles
og_title: 最新文章
og_description: "開放文化基金會"
og_image: 
---

# 文章

<div class="ui list">
{% for item in site.data.about.story %}

  <div class="item">
    <i class="icon fa-file-alt"></i>
    <div class="content">
      <div class="header">
        <a href="/story/{{ item.slug }}" target="_blank">
          {{ item.title }}
        </a>
      </div>
      {{ item.date }}
    </div>
  </div>

{% endfor %}
</div>
