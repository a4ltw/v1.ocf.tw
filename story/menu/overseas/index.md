---
layout: story
og_title: 國際會議出訪記錄
og_description: "這裡是參與國際大型會議的報告記錄"
og_image: 
referrer_policy: strict-origin-when-cross-origin
content_security_policy: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://tiles.openfreemap.org; connect-src 'self' https://tiles.openfreemap.org https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com; worker-src 'self' blob:; child-src blob:; object-src 'none'; base-uri 'self'; upgrade-insecure-requests"
---

# OCF 國際會議出訪記錄

<section class="overseas-map" aria-labelledby="overseas-map-title">
  <div class="overseas-map__heading">
    <div>
      <h2 id="overseas-map-title">OCF 的國際足跡</h2>
      <p>選擇年份或地點，查看歷年參與的國際會議與交流紀錄。</p>
    </div>
    <div class="overseas-map__filters" aria-label="依年份篩選"></div>
  </div>
  <div class="overseas-map__canvas">
    <div class="overseas-map__base" aria-label="OCF 國際出訪地點互動地圖"></div>
    <p class="overseas-map__loading">地圖載入中⋯⋯</p>
    <button class="overseas-map__online" type="button" hidden>
      <span class="overseas-map__cloud" aria-hidden="true">☁</span>
      <span>線上參與 <strong class="overseas-map__online-count"></strong></span>
    </button>
    <div class="overseas-map__zoom" aria-label="地圖縮放控制">
      <button type="button" data-map-zoom="in" aria-label="放大地圖">＋</button>
      <button type="button" data-map-zoom="out" aria-label="縮小地圖">−</button>
      <button type="button" data-map-zoom="reset" aria-label="還原地圖">↺</button>
    </div>
  </div>
  <div class="overseas-map__detail" aria-live="polite">
    <div class="overseas-map__attribution">
      <a href="https://maplibre.org/" rel="noopener noreferrer">MapLibre</a>
      <span aria-hidden="true">|</span>
      <a href="https://openfreemap.org/" rel="noopener noreferrer">OpenFreeMap</a>
      <span>©</span>
      <a href="https://openmaptiles.org/" rel="noopener noreferrer">OpenMapTiles</a>
      <span>Data from</span>
      <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer">OpenStreetMap</a>
    </div>
    <div class="overseas-map__detail-content"></div>
  </div>
  <noscript><p>地圖需要 JavaScript 才能顯示，完整紀錄仍可由下方年份清單閱讀。</p></noscript>
</section>

<script>
if (new URLSearchParams(window.location.search).get('embed') === 'map') {
  document.documentElement.classList.add('overseas-map-embed');
}
</script>

<style>
html.overseas-map-embed #topbar,
html.overseas-map-embed main#about > :not(.stripe),
html.overseas-map-embed #footer,
html.overseas-map-embed #page__pusher,
html.overseas-map-embed address,
html.overseas-map-embed #table-of-contents,
html.overseas-map-embed #content > :not(.overseas-map):not(style):not(link):not(script) {
  display: none !important;
}
html.overseas-map-embed body,
html.overseas-map-embed main#about {
  margin: 0;
  padding: 0;
  background: transparent;
}
html.overseas-map-embed,
html.overseas-map-embed body {
  overflow: hidden;
}
html.overseas-map-embed #content {
  width: 100% !important;
}
.overseas-map {
  margin: 0 0 3rem;
  padding: 1.5rem;
  border: 1px solid rgba(34, 36, 38, .15);
  border-radius: .5rem;
  background: #fff;
}
.overseas-map__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}
.overseas-map__heading h2 { margin: 0 0 .35rem; }
.overseas-map__heading p { margin: 0; color: #5d6268; }
.overseas-map__filters { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .45rem; }
.overseas-map__filter {
  padding: .45rem .8rem;
  border: 1px solid #6450a1;
  border-radius: 999px;
  color: #4f3d86;
  background: #fff;
  font: inherit;
  cursor: pointer;
}
.overseas-map__filter[aria-pressed="true"] { color: #fff; background: #6450a1; }
.overseas-map__canvas {
  position: relative;
  height: 430px;
  overflow: hidden;
  border-radius: .5rem;
  background:
    radial-gradient(circle at 72% 38%, rgba(110, 82, 180, .16), transparent 30%),
    radial-gradient(circle at 30% 62%, rgba(233, 84, 113, .13), transparent 34%),
    linear-gradient(180deg, #fbfaff 0%, #f4f1fb 100%);
  box-shadow: inset 0 0 60px rgba(73, 52, 126, .08);
}
.overseas-map__canvas .overseas-map__base {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.overseas-map__canvas .maplibregl-map { font-family: inherit; }
.overseas-map__canvas .maplibregl-ctrl-attrib { font-size: 10px; }
.overseas-map__canvas .maplibregl-ctrl-bottom-right { right: .4rem; }
.overseas-map__point {
  position: relative;
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  padding: 0;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  background: #6450dc;
  box-shadow: 0 0 8px rgba(100, 80, 220, .95);
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}
.overseas-map__point::before {
  content: '';
  position: absolute;
  inset: -7px;
  z-index: -1;
  border-radius: 50%;
  background: rgba(100, 80, 220, .42);
  animation: overseas-map-point-pulse 2.8s ease-out infinite;
  animation-delay: var(--pulse-delay, 0s);
}
.overseas-map__point:hover,
.overseas-map__point:focus { background: #654ac1; box-shadow: 0 0 11px rgba(101, 74, 193, 1); }
@keyframes overseas-map-point-pulse {
  0% { opacity: .8; transform: scale(.75); }
  75%, 100% { opacity: 0; transform: scale(1.55); }
}
@media (prefers-reduced-motion: reduce) {
  .overseas-map__point::before { animation: none; opacity: .35; }
}
.overseas-map__online {
  position: absolute;
  top: .5rem;
  right: .5rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: .35rem;
  padding: .4rem .7rem;
  border: 1px solid #6450a1;
  border-radius: 999px;
  color: #49347e;
  background: rgba(255, 255, 255, .94);
  font: inherit;
  cursor: pointer;
}
.overseas-map__online[hidden] { display: none; }
.overseas-map__online:hover,
.overseas-map__online:focus,
.overseas-map__online.is-active { color: #fff; background: #6450a1; }
.overseas-map__cloud { font-size: 1.6em; line-height: 1; }
.overseas-map__online-count { font-weight: inherit; }
.overseas-map__zoom {
  position: absolute;
  right: .75rem;
  bottom: .75rem;
  z-index: 3;
  display: flex;
  overflow: hidden;
  border: 1px solid rgba(73, 52, 126, .35);
  border-radius: .4rem;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 2px 10px rgba(73, 52, 126, .14);
}
.overseas-map__zoom button {
  width: 2.35rem;
  height: 2.35rem;
  padding: 0;
  border: 0;
  border-left: 1px solid rgba(73, 52, 126, .2);
  color: #49347e;
  background: transparent;
  font: inherit;
  font-size: 1.25rem;
  cursor: pointer;
}
.overseas-map__zoom button:first-child { border-left: 0; }
.overseas-map__zoom button:hover,
.overseas-map__zoom button:focus { color: #fff; background: #6450a1; }
.overseas-map__loading { position: absolute; inset: 0; z-index: 1; display: grid; place-items: center; margin: 0; color: #5d6268; }
.overseas-map__detail {
  min-height: 3.5rem;
  margin-top: .75rem;
  padding: 1rem;
  border-radius: .35rem;
  background: #f5f3f9;
}
.overseas-map__detail p { margin: 0; }
.overseas-map__detail strong { display: block; margin-bottom: .45rem; color: #49347e; }
.overseas-map__detail ul { margin: 0; padding-left: 1.25rem; }
.overseas-map__attribution {
  display: flex;
  flex-wrap: wrap;
  gap: .25rem;
  font-size: .82em;
  color: #68636f;
}
.overseas-map__attribution a { color: #55417f; text-decoration: underline; }
.overseas-map__detail-content:not(:empty) {
  margin-top: .85rem;
  padding-top: .85rem;
  border-top: 1px solid rgba(73, 52, 126, .16);
}
@media (max-width: 767px) {
  .overseas-map { padding: 1rem; }
  .overseas-map__heading { display: block; }
  .overseas-map__filters { justify-content: flex-start; margin-top: 1rem; }
  .overseas-map__canvas { height: 330px; }
}
</style>

<link rel="stylesheet" href="/assets/libs/maplibre-gl-5.24.0/maplibre-gl.css" integrity="sha384-uTttxo/aOKbdE5RlD/SPzSDoDmNvGlUYPjONi2MN/b7c9HPSvW07OIuyP7uL6jxK">
<script src="/assets/libs/maplibre-gl-5.24.0/maplibre-gl.js" integrity="sha384-5+cfbwT0iiub6VsQAdn6yz16nr6sDiQoHx6tm4O8OVYXHYOxcffFmCJBL0dgdvGp"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('.overseas-map');
  if (!root || !window.maplibregl) return;

  var locations = [
    { name: '葡萄牙', aliases: ['Portugal', '葡萄牙'], lon: -8.2, lat: 39.6 },
    { name: '馬來西亞吉隆坡', aliases: ['馬來西亞吉隆坡'], lon: 101.6869, lat: 3.139 },
    { name: '澳洲布里斯本', aliases: ['澳洲布里斯本'], lon: 153.0251, lat: -27.4698 },
    { name: '比利時', aliases: ['比利時'], lon: 4.67, lat: 50.64 },
    { name: '日本東京', aliases: ['日本東京'], lon: 139.6917, lat: 35.6895 },
    { name: '愛沙尼亞', aliases: ['愛沙尼亞'], lon: 25.01, lat: 58.6 },
    { name: '哥斯大黎加', aliases: ['哥斯大黎加'], lon: -84.09, lat: 9.93 },
    { name: '泰國清邁', aliases: ['泰國清邁'], lon: 98.9853, lat: 18.7883 },
    { name: '韓國首爾', aliases: ['首爾'], lon: 126.978, lat: 37.5665 },
    { name: '新加坡', aliases: ['新加坡'], lon: 103.8198, lat: 1.3521 },
    { name: '丹麥哥本哈根', aliases: ['Copenhagen', '哥本哈根'], lon: 12.5683, lat: 55.6761 },
    { name: '菲律賓', aliases: ['菲律賓'], lon: 121.77, lat: 12.88 },
    { name: '香港', aliases: ['香港'], lon: 114.1694, lat: 22.3193 },
    { name: '日本沖繩', aliases: ['沖繩'], lon: 127.6809, lat: 26.2124 },
    { name: '加拿大', aliases: ['加拿大'], lon: -106.35, lat: 56.13 },
    { name: '西班牙', aliases: ['西班牙'], lon: -3.75, lat: 40.46 },
    { name: '法國巴黎', aliases: ['巴黎'], lon: 2.3522, lat: 48.8566 },
    { name: '突尼西亞', aliases: ['突尼西亞'], lon: 9.54, lat: 33.89 },
    { name: '阿根廷', aliases: ['阿根廷'], lon: -63.62, lat: -38.42 },
    { name: '萬那杜', aliases: ['萬那杜'], lon: 166.96, lat: -15.38 },
    { name: '喬治亞', aliases: ['喬治亞共和國'], lon: 43.36, lat: 42.32 },
    { name: '美國', aliases: ['@美國'], lon: -98.58, lat: 39.83 },
    { name: '波蘭', aliases: ['波蘭'], lon: 19.15, lat: 51.92 },
    { name: '印尼', aliases: ['印尼'], lon: 113.92, lat: -0.79 },
    { name: '日本神戶', aliases: ['神戶'], lon: 135.1955, lat: 34.6901 },
    { name: '泰國曼谷', aliases: ['曼谷'], lon: 100.5018, lat: 13.7563 },
    { name: '美國紐約', aliases: ['紐約', 'NYC'], lon: -74.006, lat: 40.7128 },
    { name: '德國', aliases: ['德國'], lon: 10.45, lat: 51.17 },
    { name: '義大利', aliases: ['義大利'], lon: 12.57, lat: 41.87 },
    { name: '美國舊金山灣區', aliases: ['Oakland', 'Stanford'], lon: -122.2, lat: 37.65 }
  ];

  var content = document.getElementById('content');
  var currentYear = '';
  var records = [];
  var onlineRecords = [];
  Array.prototype.forEach.call(content.children, function (node) {
    if (node.tagName === 'H2' && /20\d{2}/.test(node.textContent)) {
      currentYear = (node.textContent.match(/20\d{2}/) || [''])[0];
    }
    if (node.tagName !== 'UL' || !currentYear) return;
    Array.prototype.forEach.call(node.children, function (item) {
      if (item.tagName !== 'LI') return;
      var text = item.firstChild ? item.textContent.trim() : '';
      var summary = item.cloneNode(true);
      Array.prototype.forEach.call(summary.querySelectorAll('ul, ol'), function (nestedList) { nestedList.remove(); });
      if (text.indexOf('@ 線上') !== -1 || text.indexOf('@線上') !== -1) {
        onlineRecords.push({ year: currentYear, html: summary.innerHTML });
      }
      locations.forEach(function (location) {
        // 這筆合併行程的頁面只標示「@美國」；名稱中的 NYC 不另計為第二筆地點。
        if (text.indexOf('Code for America Summit + PDF NYC @美國') !== -1 && location.name === '美國紐約') return;
        if (location.aliases.some(function (alias) { return text.indexOf(alias) !== -1; })) {
          records.push({ year: currentYear, location: location, html: summary.innerHTML });
        }
      });
    });
  });

  var years = Array.from(new Set(records.map(function (record) { return record.year; }))).sort().reverse();
  var activeYear = '全部';
  var filters = root.querySelector('.overseas-map__filters');
  ['全部'].concat(years).forEach(function (year) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'overseas-map__filter';
    button.textContent = year;
    button.setAttribute('aria-pressed', year === activeYear ? 'true' : 'false');
    button.addEventListener('click', function () {
      activeYear = year;
      Array.prototype.forEach.call(filters.children, function (child) {
        child.setAttribute('aria-pressed', child === button ? 'true' : 'false');
      });
      drawMarkers();
      root.querySelector('.overseas-map__detail-content').innerHTML = '';
    });
    filters.appendChild(button);
  });

  var canvas = root.querySelector('.overseas-map__canvas');
  var mapBase = root.querySelector('.overseas-map__base');
  var onlineButton = root.querySelector('.overseas-map__online');
  var onlineCount = root.querySelector('.overseas-map__online-count');
  var loading = canvas.querySelector('.overseas-map__loading');
  var initialView = { center: [12, 18], zoom: 1.15 };
  var map = new maplibregl.Map({
    container: mapBase,
    style: 'https://tiles.openfreemap.org/styles/bright',
    center: initialView.center,
    zoom: initialView.zoom,
    minZoom: .7,
    maxZoom: 8,
    attributionControl: false
  });
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  var mapMarkers = [];
  var currentGroups = {};
  root.querySelector('[data-map-zoom="in"]').addEventListener('click', function () { map.zoomIn({ duration: 300 }); });
  root.querySelector('[data-map-zoom="out"]').addEventListener('click', function () { map.zoomOut({ duration: 300 }); });
  root.querySelector('[data-map-zoom="reset"]').addEventListener('click', function () {
    map.easeTo({ center: initialView.center, zoom: initialView.zoom, bearing: 0, pitch: 0, duration: 450 });
  });

  function selectedRecords() {
    return records.filter(function (record) { return activeYear === '全部' || record.year === activeYear; });
  }

  function selectedOnlineRecords() {
    return onlineRecords.filter(function (record) { return activeYear === '全部' || record.year === activeYear; });
  }

  onlineButton.addEventListener('click', function () {
    var selected = selectedOnlineRecords();
    onlineButton.classList.add('is-active');
    root.querySelector('.overseas-map__detail-content').innerHTML = '<strong>線上參與，' + selected.length + ' 筆紀錄</strong><ul>' + selected.map(function (record) {
      return '<li>' + record.html + '</li>';
    }).join('') + '</ul>';
  });

  function showDetail(group) {
    onlineButton.classList.remove('is-active');
    var detail = root.querySelector('.overseas-map__detail-content');
    var title = group.location.name + '，' + group.records.length + ' 筆紀錄';
    detail.innerHTML = '<strong>' + title + '</strong><ul>' + group.records.map(function (record) {
      return '<li>' + record.html + '</li>';
    }).join('') + '</ul>';
  }

  function drawMarkers() {
    var online = selectedOnlineRecords();
    onlineButton.hidden = online.length === 0;
    onlineButton.classList.remove('is-active');
    onlineCount.textContent = online.length;
    onlineButton.setAttribute('aria-label', '線上參與，' + online.length + ' 筆紀錄');
    var groupsByName = {};
    selectedRecords().forEach(function (record) {
      if (!groupsByName[record.location.name]) groupsByName[record.location.name] = { location: record.location, records: [] };
      groupsByName[record.location.name].records.push(record);
    });
    var grouped = Object.keys(groupsByName).map(function (name) { return groupsByName[name]; });
    currentGroups = groupsByName;
    window.overseasMapGroups = groupsByName;
    mapMarkers.forEach(function (marker) { marker.remove(); });
    mapMarkers = grouped.map(function (group, index) {
      var markerButton = document.createElement('button');
      markerButton.type = 'button';
      markerButton.className = 'overseas-map__point';
      markerButton.textContent = group.records.length;
      markerButton.dataset.locationName = group.location.name;
      markerButton.setAttribute('aria-label', group.location.name + '，' + group.records.length + ' 筆出訪紀錄');
      markerButton.style.setProperty('--pulse-delay', (-.28 * (index % 8)) + 's');
      markerButton.addEventListener('pointerdown', function (event) {
        showDetail(group);
        event.stopPropagation();
      });
      markerButton.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          showDetail(group);
        }
      });
      return new maplibregl.Marker({ element: markerButton, anchor: 'center' })
        .setLngLat([group.location.lon, group.location.lat])
        .addTo(map);
    });
  }

  mapBase.addEventListener('click', function (event) {
    var markerButton = event.target.closest('.overseas-map__point');
    if (!markerButton) return;
    var group = currentGroups[markerButton.dataset.locationName];
    if (group) showDetail(group);
    event.stopPropagation();
  });

  map.on('load', function () {
    if (loading) loading.remove();
    drawMarkers();
  });
  map.on('error', function () {
    if (loading) loading.textContent = '地圖暫時無法載入，請由下方年份清單查看完整紀錄。';
  });
});
</script>

## 2025 國際出訪

* 2025/11 國際公民社會週 ICSW 2025 @ 泰國曼谷 [會議官網](https://icsw.civicus.org/program/)
* 2025/11 亞洲民主大會 Asia Democracy Assembly 2025 @ 泰國曼谷 [會議官網](https://adnasia.org/asia-democracy-assembly-2025/)
* 2025/09 全球隱私大會 Global Privacy Assembly 2025 @ 韓國首爾 [會議官網](https://globalprivacyassembly.com/)
* 2025/09 Global Gathering 2025 @ Estoril, Portugal [會議官網](https://wiki.digitalrights.community/)
* 2025/08 亞太數位人權大會 DRAPAC 2025 @ 馬來西亞吉隆坡 [會議官網](https://drap.ac/25/)
* 2025/02 FOSDEM 2025 @ 比利時布魯塞爾 [會議官網](https://archive.fosdem.org/2025/)

## 2024 國際出訪

* 2024/09 Global Gathering 2024 @ Estoril, Portugal [參與議程分享、擺攤推廣](https://wiki.digitalrights.community/index.php?title=September_29_2024_Agenda)
* 2024/05 OONI Partner Meetup OONI 夥伴聚會 @ 馬來西亞吉隆坡 [認識 OCF & OONI專案](https://ocf.tw/p/ooni/)
* 2024/3 IETF 119 @澳洲布里斯本 [網路自由小聚-回國分享](https://ocftw.kktix.cc/events/internetfreedom-april2024)
* 2024/02 FOSDEM 2024 @ 比利時 [參與紀錄](https://ocf.tw/p/global/fosdem-2024/)

## 2023 國際出訪

* 2023/12 Open Source Summit Japan & Open Source Compliance Summit @ 日本東京 [會後分享簡報](https://docs.google.com/presentation/d/1p3HIpnvnUMhE4vSmyELMZQwj9GST5PJwpoi7bSGXRj0/edit#slide=id.g262636ebe2c_0_238)
* 2023/09 OGP Global Summit 國際開放政府高峰會 @ 愛沙尼亞 [參與紀錄共筆](https://docs.google.com/document/d/1oGsj22fMvPfDU5LH64Bk_0HftrSW10NOM1pDJ_NciZw/edit)
* 2023/09 IFF/ Global Gathering Summit & Feira @葡萄牙 [網路自由小聚特別場-會後分享](https://ocftw.kktix.cc/events/internetfreedom-october2023-special)
* 2023/06 RightsCon 全球數位人權大會 @ 哥斯大黎加 [網路自由小聚- 數位人權會後分享會](https://ocftw.kktix.cc/events/internetfreedom-july)
* 2023/05 DRAPAC, Asia-Pacific Digital Rights Festival 亞太數位人權大會 @泰國清邁 [網路自由小聚- 數位人權會後分享會](https://ocftw.kktix.cc/events/internetfreedom-july)
* 2023/04 Global Asia:Human Rights in Asia: Open and Closed Societies in a Post-Pandemic World @首爾 [會議分享文章](https://www.globalasia.org/v18no2/cover/digital-authoritarianism-and-threats-posed-to-human-rights-advocacy_szu-hui-huanglulu-kengsinging-li)
* 2023/02 FOSDEM 2023 @比利時 [出訪報告](https://docs.google.com/document/d/1cnM75_PJV2M_NQpMQ6EoybhGRXPRR62KMHL_VMA31zU/edit?usp=drive_link)

## 2022 國際出訪

* 2022/09_APrIGF 亞太網路治理論壇 @ 新加坡  [出訪紀錄](https://docs.google.com/document/d/1GVwqBFjO78fl4rA9y8IObV5LDJT7g0YoW4X_mGxPxV0/edit#heading=h.vfr2b5ubsh8)
* 2022/06_RightsCon 全球數位人權大會 @ 線上 
* 2022/06_Copenhagen Democracy Summit 哥本哈根民主高峰會 [出訪紀錄](https://docs.google.com/document/d/1cz_OMGVZeYuCqHA-a8pQzuu3mwQrVch_-IBJCngPz28/edit#heading=h.t08p63kpwv3d)
* 2022/02 FOSDEM 2022 @ 比利時

## 2019 國際出訪

* 2019/10_CocoNet 東南亞數位人權營隊 @ 菲律賓 [出訪紀錄](https://docs.google.com/document/d/1GH82H2ETaZC3IgVVpZByuMYebqXpoVgRDYMkjOz1gqY/edit)、[回國分享會](https://ocftw.kktix.cc/events/tw2019coconet-sharing?_ga=2.13027377.744453385.1588564060-961606443.1586844264)
* 2019/06_Hong Kong Open Source Conference 香港開源年會 @ 香港  [出訪紀錄](https://docs.google.com/document/d/1IcOvd8f2qREML_0Jsmjvg3sCyfyBguLhSu-rVenCtqA/edit)
* 2019/06_RightsCon 數位人權大會 @ 突尼西亞 [出訪紀錄](https://docs.google.com/document/d/1ojKKMW1hKmUgadBUP3JiaGuSRSF6Ton3XkkP1-w245Q/edit)、[回國分享會](https://ocftw.kktix.cc/events/2019rightscontaiwan?_ga=2.183537440.744453385.1588564060-961606443.1586844264)
* 2019/06_Facing the Ocean Meet and Hack 面海黑客松 @ 沖繩 [出訪紀錄](https://docs.google.com/document/d/1aHUddYAEcJvFFYKNPNDyBDpDG07TXr6CNROR5lER6K0/edit)
* 2019/05_OGP Summit 開放政府夥伴聯盟全球峰會 @ 加拿大 [出訪紀錄](https://docs.google.com/document/d/1oi8N-aJ2g55YFTF1YQmnQE28h0coV9CbV-x2o5y2fzw/edit)、[回國分享會](https://ocftw.kktix.cc/events/tw2019ogpsummit)
* 2019/04_IFF 網路自由節 @ 西班牙 [出訪紀錄](https://docs.google.com/document/d/1a5WC6RlKSTS-wpgb6l56nFCXpl58E6hdSEPMJysSoQQ/edit)
* 2019/03_TICTeC @ 巴黎 [出訪報告](https://docs.google.com/document/d/1KkDRF9P4l2C7o_5HFHkefagVoABHM4TjSSUTZkWjDCQ/edit#heading=h.86pbshub2q2z)

## 2018 國際出訪

* 2018/09_IODC 國際開放資料會議 @ 阿根廷 [出訪報告](https://docs.google.com/document/d/1Y81gnxlJp12prnM6Ixoqt74vMB-KdGcLtI_hPR1cB6w/edit)
* 2018/08_APrIGF 亞太網路治理論壇 @ 萬那杜 [出訪報告](https://docs.google.com/document/d/1GN6ncFj1ZKYZk3IbDb-KW7ntnEB8Osq2Mr9tME-Auj4/edit)
* 2018/07_OGP Summit 開放政府夥伴聯盟全球峰會 @喬治亞共和國 [出訪報告](https://docs.google.com/document/d/1YYlpDGasJ5e-M8uJXw67DOQCfwrm0Ix8wMS7Fo-sBIM/edit)，
	- [分享會直播(一)：整體觀察](https://www.facebook.com/events/1933693153386456)，
	- [分享會直播(二)：聚焦各國案例：公民科技 x 不實訊息 x 環境](https://www.facebook.com/events/1954284924869384)，
	- [分享會直播(三)：開放政府的虛實剖析](https://www.facebook.com/events/290972741697224/)
* 2018/06_Citizen Lab Summer Institute on Monitoring Internet Openness and Rights
* 2018/06-07 歐洲公民科技組織拜訪 [出訪報告](https://docs.google.com/document/d/1YO97MEyKXOXaYRyR_mEaQK4y34wsRBI0a7ka_EiyPFs/edit)
* 2018/05_Code for America Summit + PDF NYC @美國 [出訪報告](https://drive.google.com/file/d/1LBtK-GXChzKqsqJiEDsQA7Q-BkEG3ca1/view)
* 2018/06/02 美西哲五：科技可能中立嗎？科技與政治的協作與角力 [共筆](https://hackmd.io/TFnZv5I9QYy8gwj5Z_JUPw?view&fbclid=IwAR2CZKi1hDq7tzLx7xBMewZLScKVm3fJct7vEHFlDBWt9KHj3RD7UGSKMSk)
* 2018/05_RightsCon @加拿大 [分享會共筆](https://hackmd.io/5lRa67SAQLy_erJd62bdvQ)，[出訪報告](https://docs.google.com/document/d/1pxEMk0t-RtJCo9gtutige2cTFoU2fYBN6ZQE3qm4lws/edit#heading=h.fltmp54ouujx)
* 2018/04_TICTeC @葡萄牙 / PDF CEE @波蘭 [出訪報告](https://drive.google.com/file/d/102HT1saiVWcDeHzYqOs5l4C_xA6Q3Zks/view)

## 2017 國際出訪

* 2017/10_Coconet 東南亞數位人權營隊 @ 印尼 
* 2017/09_Code for Japan Summit @ 神戶
* 2017/07_APRIGF 亞太網路治理論壇 @曼谷 [臉書分享](https://www.facebook.com/www.ocf.tw/photos/a.1535385736737357/1964983983777528/?type=3&av=1502561953353069&eav=AfY1tTb4IJqpoPuH6br1XzSr_ycLPj4tl4WwG2kVwxzjqPbyl3DXHYdet1IQsYP2-Sibltz-LPGHZe4vvIBipUDD&theater)
* 2017/06_PDF NYC 個人民主論壇 @ 紐約 [臉書分享](https://www.facebook.com/www.ocf.tw/posts/1946469772295616)
* 2017/04_Datensummit @ 德國
* 2017/04_TICTeC @ 義大利

* 2017/03_RightsCon 數位人權大會 @ 比利時  [社群參與者 irvin 參與筆記](https://irvin.sto.tw/2017/06/rightscon-2017.html) 


## 2016 國際出訪

* 2016 OGP summit @巴黎 
	- [成果報告](https://docs.google.com/document/d/16NtkMWRpwBvL96u8gARsgMK_qSln6BBnzM8vJzomff0/edit#heading=h.ijnpxjmgktj9)
	- [公民審議成果報告](https://drive.google.com/open?id=0B0btxvSLjDAqSm1vdE44bXpCNWc)
	- 分享會 (一)開放政府中的公民力量，[共筆/資料](https://ocf-tw.hackpad.tw/OGP-summit--w1GhqSmsiHL)
	- 分享會 (二)開放政府中的公民審議，[共筆/資料](https://ocf-tw.hackpad.tw/OGP-summit--HNYIGTHQGxb)
* 2016 Code for American Summit @ Oakland 
	- [出訪報告](https://drive.google.com/file/d/1iOIZ3hT40SYvNhZAP24_xfsuvlyWI-HD/view)
	- g0v@Stanford [talk](https://g0v.hackpad.com/g0vStanford-Talk-Fork-and-Merge-an-Open-Government-Experiments-of-g0v-in-Taiwan-CCTD1E5e3xz)
	- 分享會[直播](https://https://www.youtube.com/watch?v=XI-uYe50dG4)
	- CfA 現場與分享會[照片](https://https://drive.google.com/drive/u/0/folders/0B62BopK8ZVZ2ajUzNDgzd3RjWms)
* 2016 g0v hackathon @NYC [活動紀錄](https://hackmd.io/OwTgTAxgLApgZgNgLQEYYEMVKgBhzJdAI2GSgFYJyATGBFG9EIA=)，Day 1 [Video](https://www.youtube.com/watch?v=fSV9rI2b3q8)，Day 2 [Video](https://www.youtube.com/watch?v=-yuGVXKg_BY)
