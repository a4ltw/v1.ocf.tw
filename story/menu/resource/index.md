---
layout: global
og_title: 各項成果與資源下載
og_description: "研究報告、推廣手冊都在這裡"
og_image: 

---

<style>
/* 頁面專屬 CSS，讓版面瞬間升級 */
.resource-container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 18px 48px;
}

.section-title {
    border-left: 5px solid #2c3e50; /* 左側裝飾線 */
    padding-left: 15px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.8em;
    color: #333;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 30px;
}

.resource-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    text-decoration: none !important; /* 移除預設底線 */
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
}

.resource-card:hover {
    transform: translateY(-5px); /* 懸浮上移效果 */
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-color: #ddd;
}

.resource-card:focus-visible {
    outline: 3px solid #6455a5;
    outline-offset: 3px;
}

.resource-card__visual {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: linear-gradient(135deg, #5a4b9b, #8171c2);
}

.resource-card__visual img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.35s ease;
}

.resource-card:hover .resource-card__visual img {
    transform: scale(1.035);
}

.resource-card__visual--icon {
    display: grid;
    place-items: center;
}

.resource-card__visual--icon i {
    margin: 0;
    color: rgba(255, 255, 255, 0.92);
    font-size: 3.2rem;
}

.resource-card__visual--security { background: linear-gradient(135deg, #176b77, #40a6a4); }
.resource-card__visual--rights { background: linear-gradient(135deg, #8b3d68, #ca6a8d); }
.resource-card__visual--freedom { background: linear-gradient(135deg, #165c91, #47a2c6); }
.resource-card__visual--international { background: linear-gradient(135deg, #bf672f, #e9a34a); }
.resource-card__visual--anniversary { background: linear-gradient(135deg, #a83c55, #e07478); }

.resource-card__tag {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 5px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.94);
    color: #3d355e;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.resource-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 18px 20px 20px;
}

.resource-card h3 {
    margin-top: 0;
    font-size: 1.1em;
    color: #2c3e50;
    margin-bottom: 10px;
}

.resource-card p {
    font-size: 0.9em;
    color: #666;
    margin: 0;
    line-height: 1.5;
}

@media (max-width: 700px) {
    .resource-container { padding-inline: 14px; }
    .card-grid { grid-template-columns: 1fr; gap: 18px; }
    .section-title { font-size: 1.5em; }
    .resource-card__visual { aspect-ratio: 2 / 1; }
}

/* 針對年度報告的特殊按鈕樣式 */
.report-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.report-btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 20px;
    background-color: #f8f9fa;
    color: #333;
    border-radius: 50px;
    text-decoration: none;
    border: 1px solid #ddd;
    transition: all 0.2s;
}

.report-btn:hover {
    background-color: #D7DCF0;
    color: #fff;
}

.report-btn i {
    margin-right: 8px;
}
</style>


<div class="resource-container">

<h1>各項成果、資源下載</h1>


<h2 class="section-title">開放科技與倡議</h2>
<div class="card-grid">
    <a href="/p/opentech/ai-ready-data/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/ai-ready.webp" alt="" fetchpriority="high"><span class="resource-card__tag">研究報告</span></div>
        <div class="resource-card__body"><h3>從開放資料到 AI-READY 國際實踐研究</h3><p>從 5 個國際案例，整理 AI 時代開放資料治理的實務路徑</p></div>
    </a>
    <a href="https://ocf.tw/p/opentech/otguide/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/opentech-guide.webp" alt=""><span class="resource-card__tag">推廣手冊</span></div>
        <div class="resource-card__body"><h3>關於開放科技</h3><p>從原始碼、資料到政府：開放，如何塑造新時代數位社會</p></div>
    </a>
    <a href="https://openstartervillage.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/openstarter.webp" alt="" loading="lazy"><span class="resource-card__tag">桌遊與教案</span></div>
        <div class="resource-card__body"><h3>開源星手村</h3><p>桌遊及教案資源，輕鬆了解開源文化</p></div>
    </a>
    <a href="https://docs.google.com/presentation/d/1WAh6lcLDfof_iZzuGmvw-ztIWZfP7QZSdHJu7HScTlA/edit" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon"><i class="university icon" aria-hidden="true"></i><span class="resource-card__tag">研究報告</span></div>
        <div class="resource-card__body"><h3>開放國會研究報告</h3><p>如何改善工作追蹤與開放國會委員會內部協力（CC BY 4.0）</p></div>
    </a>
    <a href="https://opengovreport.ocf.tw/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon"><i class="chart bar icon" aria-hidden="true"></i><span class="resource-card__tag">觀察報告</span></div>
        <div class="resource-card__body"><h3>開放政府觀察報告</h3><p>2014-2016，中英文版（CC BY-SA 4.0）</p></div>
    </a>
    <a href="https://github.com/moda-gov-tw" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon"><i class="code icon" aria-hidden="true"></i><span class="resource-card__tag">開源專案</span></div>
        <div class="resource-card__body"><h3>數位部中文化成果</h3><p>GitHub 上的開源軟體在地化專案</p></div>
    </a>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/opentech/">開放科技與倡議專案</a></small></p>


<h2 class="section-title">公民社會數位防禦</h2>
<div class="card-grid">
    <a href="https://ssd.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/ssd.webp" alt="" loading="lazy"><span class="resource-card__tag">學習網站</span></div>
        <div class="resource-card__body"><h3>資安新手村 | Shield of Self-Defense (SSD) 網頁版</h3><p>從日常情境開始，學習個人與組織的資安自我防護</p></div>
    </a>
    <a href="https://ssd.ocf.tw/play/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--security"><i class="gamepad icon" aria-hidden="true"></i><span class="resource-card__tag">互動遊戲</span></div>
        <div class="resource-card__body"><h3>資安新手村 | Shield of Self-Defense (SSD) 遊戲版</h3><p>透過互動遊戲理解數位安全風險與防護做法</p></div>
    </a>
    <a href="https://drive.google.com/file/d/1wgYdObezFzlI6OJLozzqQF5Vt11B7gCd/view?usp=drive_link" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/safeguarding-advocacy.webp" alt="" loading="lazy"><span class="resource-card__tag">成果報告</span></div>
        <div class="resource-card__body"><h3>【報告】守護倡議之聲：公民團體與人權工作者資安陪伴計畫成果報告</h3><p>公民團體與人權工作者資安陪伴計畫的成果整理</p></div>
    </a>
    <a href="https://drive.google.com/file/d/1VwZwVXpOjTBZibVCTbIF1wUdPhQU_wJz/view?usp=drive_link" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/cost-of-trust.webp" alt="" loading="lazy"><span class="resource-card__tag">事件報告</span></div>
        <div class="resource-card__body"><h3>【報告】信任的代價：一場針對臺灣人權工作者的資安攻擊與防守實錄</h3><p>記錄針對臺灣人權工作者的攻擊事件與防守經驗</p></div>
    </a>
    <a href="https://digitalsecurityhandbook.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/cso-defense.webp" alt="" loading="lazy"><span class="resource-card__tag">線上手冊</span></div>
        <div class="resource-card__body"><h3>CSOs 數位防禦手冊（網頁版）</h3><p>注重隱私與安全的開放原始碼工具指南</p></div>
    </a>
    <a href="https://ocf.tw/story/menu/resource/(public)CSOs數位防禦手冊_注重隱私與安全的開放原始碼工具V2.pdf" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/cso-defense.webp" alt="" loading="lazy"><span class="resource-card__tag">PDF 手冊</span></div>
        <div class="resource-card__body"><h3>CSOs 數位防禦手冊（PDF）</h3><p>2024.07 更新版</p></div>
    </a>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/csodefense/">公民社會數位防禦計畫</a></small></p>


<h2 class="section-title">數位人權</h2>
<div class="card-grid">
    <a href="https://ocf.tw/p/pdr/pdr-report-2026.pdf" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/platform-data-report.webp" alt="" loading="lazy"><span class="resource-card__tag">研究報告</span></div>
        <div class="resource-card__body"><h3>配合政府執法，數位平臺該交出民眾資料嗎？</h3><p>政府、平臺與公民權利的拉鋸</p></div>
    </a>
    <a href="https://ocf.tw/p/rdr" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/digital-rights.webp" alt="" loading="lazy"><span class="resource-card__tag">評比報告</span></div>
        <div class="resource-card__body"><h3>企業數位人權報告</h3><p>檢視企業在數位時代的人權責任</p></div>
    </a>
    <a href="https://drive.google.com/file/d/1VV12Rp7IKkWexNTKQRuWIA4Zfd8ztN9X/view?usp=sharing" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--rights"><i class="shield alternate icon" aria-hidden="true"></i><span class="resource-card__tag">English report</span></div>
        <div class="resource-card__body"><h3>數位威脅概況（English）</h3><p>台灣人權與民主倡議團體面臨的挑戰</p></div>
    </a>
    <a href="https://drive.google.com/file/d/1sxAFmSiJL6DzdO3ezq_hJSBROuGXNLAA/view?usp=sharing" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--rights"><i class="shield alternate icon" aria-hidden="true"></i><span class="resource-card__tag">中文摘要</span></div>
        <div class="resource-card__body"><h3>數位威脅概況（中文摘要）</h3><p>台灣人權與民主倡議團體面臨的挑戰</p></div>
    </a>
    <a href="https://ocf.tw/p/dra/ep/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/empowering-privacy.webp" alt="" loading="lazy"><span class="resource-card__tag">研究報告</span></div>
        <div class="resource-card__body"><h3>強化隱私報告</h3><p>東亞數位人權及所處環境之下，公民社會的行動策略</p></div>
    </a>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/dra/">數位人權與倡議</a></small></p>


<h2 class="section-title">網路自由</h2>
<div class="card-grid">
    <a href="https://resilience.ocf.tw/web/report/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--freedom"><i class="signal icon" aria-hidden="true"></i><span class="resource-card__tag">檢測報告</span></div>
        <div class="resource-card__body"><h3>網路韌性檢測報告</h3><p>海纜斷光會怎樣？認識台灣的國際網路中斷風險</p></div>
    </a>
    <a href="https://resilience.ocf.tw/web/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--freedom"><i class="sitemap icon" aria-hidden="true"></i><span class="resource-card__tag">線上工具</span></div>
        <div class="resource-card__body"><h3>網路韌性檢測工具</h3><p>海纜斷掉時，台灣人常用的網站會動嗎？</p></div>
    </a>
    <a href="https://hackmd.io/efBMZl4ITImkxUOjlmByHg?view" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--freedom"><i class="edit icon" aria-hidden="true"></i><span class="resource-card__tag">活動共筆</span></div>
        <div class="resource-card__body"><h3>網路自由小聚共筆</h3><p>社群討論記錄與知識分享</p></div>
    </a>
    <a href="https://youtu.be/04fsSK3q7Oo?si=iNItWnSuPDtELc-J" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--freedom"><i class="podcast icon" aria-hidden="true"></i><span class="resource-card__tag">Podcast</span></div>
        <div class="resource-card__body"><h3>小劇場 Podcast</h3><p>用聽的了解網路自由議題</p></div>
    </a>
    <a href="https://www.youtube.com/watch?v=ek2XjW7Q3wI&list=PLFuYOsppHDrlYquISvSfOjrT5g_mjMGot" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--freedom"><i class="video icon" aria-hidden="true"></i><span class="resource-card__tag">短影音</span></div>
        <div class="resource-card__body"><h3>網路自由小聚短影音</h3><p>2024 重要的幾場活動</p></div>
    </a>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/infr/">網路自由</a></small></p>


<h2 class="section-title">國際夥伴串聯</h2>
<div class="card-grid">
    <a href="https://ocf.tw/story/menu/overseas" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--international"><i class="globe icon" aria-hidden="true"></i><span class="resource-card__tag">出訪記錄</span></div>
        <div class="resource-card__body"><h3>國際會議出訪記錄</h3><p>OCF 接軌國際開源社群的足跡</p></div>
    </a>
</div>


<h2 class="section-title">十週年開源祭</h2>
<div class="card-grid">
    <a href="https://10years.ocf.tw" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/10years.webp" alt="" loading="lazy"><span class="resource-card__tag">活動網站</span></div>
        <div class="resource-card__body"><h3>開源祭官方網站</h3><p>OCF 十週年特別活動首頁</p></div>
    </a>
    <a href="https://ocf.tw/story/change-the-world" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--anniversary"><i class="code branch icon" aria-hidden="true"></i><span class="resource-card__tag">開源祭特刊 #1</span></div>
        <div class="resource-card__body"><h3>開源祭特刊 #1</h3><p>他們用程式碼改變世界：臺灣開源運動的前世今生</p></div>
    </a>
    <a href="https://ocf.tw/story/find-your-place" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--anniversary"><i class="users icon" aria-hidden="true"></i><span class="resource-card__tag">開源祭特刊 #2</span></div>
        <div class="resource-card__body"><h3>開源祭特刊 #2</h3><p>沒寫過程式，也能當開源大神！走進開源祭，找到自己的位子</p></div>
    </a>
    <a href="https://ocf.tw/story/ten-years-of-ocf" class="resource-card">
        <div class="resource-card__visual resource-card__visual--icon resource-card__visual--anniversary"><i class="flag icon" aria-hidden="true"></i><span class="resource-card__tag">開源祭特刊 #3</span></div>
        <div class="resource-card__body"><h3>開源祭特刊 #3</h3><p>從協助社群帳務到登上國際舞台，OCF 推動開源文化的十年之路</p></div>
    </a>
</div>


<h2 class="section-title">歷年成果報告</h2>
<div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
<p>
OCF 的經費來源主要是透過對社群收取服務費用、專案承攬、定期定額的捐款，以及單次性的捐贈等。這些經費除了使用在每月固定的行政開銷費用（行政、辦公室營運等）之外，多使用於專案支持、活動辦理等業務進行。OCF 主要業務之一為協助開源社群行政及財務管理，其各社群在 OCF 的捐款收入皆為各自社群專款專用，OCF 僅盡代管之責。<br>
每年業務成果、收支情形及社群協助狀況等，詳細請見 OCF 年度報告：
</p>

    <div class="report-grid">
        {% assign i = site.data.settings.current %}
        {% for item in site.data.reports %}
        {% unless item[0] contains "_" %}
        {% assign i = i | minus:1 %}
            <a href="/p/{{ i }}" target="_blank" class="report-btn">
                <i class="globe icon"></i>
                {{ i }} 年成果報告
            </a>
        {% endunless %}
        {% endfor %}
    </div>
</div>

</div>
