---
layout: story
og_title: 最新消息
og_description: "這裡有最新文章、新聞報導"
og_image: 
---

## 最新文章

<h2 class="ui header">
  最新文章
  <a href="/feed.xml" target="_blank" class="ui mini label orange">
    <i class="rss icon"></i> RSS 訂閱
  </a>
</h2>

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

## 媒體報導

<div class="ui list">
{% for item in site.data.about.ocf %}
  <div class="item">
    <i class="icon newspaper"></i>
    <div class="content">
      <div class="header">
      {{ item.date }} / {{ item.media }}
      </div>
      <a href="{{ item.url }}" target="_blank">
      {{ item.title }}
      </a>
    </div>
  </div>
{% endfor %}
</div>

## 開源 / 開放文化相關報導

<div class="ui list">
{% for item in site.data.about.floss %}
  <div class="item">
    <i class="icon newspaper"></i>
    <div class="content">
      <div class="header">
      {{ item.date }} / {{ item.media }}
      </div>
      <a href="{{ item.url }}" target="_blank">
      {{ item.title }}
      </a>
    </div>
  </div>
{% endfor %}
</div>