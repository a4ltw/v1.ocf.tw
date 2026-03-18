# OCF Website — CLAUDE.md

OCF（開放文化基金會）官方網站。Jekyll 4.4 靜態網站，部署於 GitHub Pages（gh-pages branch），自訂網域 ocf.tw。

---

## 技術棧

- **Jekyll 4.4** — 靜態網站生成器（Ruby）
- **Liquid** — 模板語言
- **Semantic UI** — CSS UI 框架
- **jQuery 3.7.0** — DOM 操作
- **FontAwesome 6.5.1** — 圖示庫
- **GitHub Pages** — 部署平台（gh-pages branch）
- **Docker** — 本地開發環境（`./run_docker.sh`）

---

## 專案結構總覽

```
/
├── _config.yml          # Jekyll 核心設定（url, plugins, encoding）
├── Gemfile              # Ruby gem 相依（jekyll, jekyll-feed, jekyll-redirect-from, jekyll-sitemap）
├── CNAME                # GitHub Pages 自訂網域（ocf.tw）
├── feed.xml             # RSS feed
│
├── _data/               # 資料層（YAML）— 所有動態內容的資料來源
├── _layouts/            # 版面模板（HTML + Liquid）
├── _includes/           # 可重複使用的 HTML 元件
├── _plugins/            # Jekyll 自訂外掛
├── _site/               # Jekyll 產生的靜態輸出（不需編輯）
│
├── assets/              # 靜態資源（CSS、JS、字型、圖片、函式庫）
│
├── p/                   # 專案頁面（HTML，70+ 子目錄）
├── en/                  # 英文版頁面
├── story/               # 文章 / 電子報文章
├── journal/             # 活動頁
├── news/                # 電子報
├── about/               # 關於頁面
├── people/              # 工作夥伴頁面
├── supportus/           # 捐款頁面
└── design/              # 設計系統展示頁
```

---

## _data/ — 資料層（最常修改）

```
_data/
├── settings.yml         # 全站設定：current 年度、主選單（menu/menu_en）
├── titles.yml           # 頁面標題對應
│
├── p/                   # 各專案資料（70+ 子目錄）
│   └── {project_id}/
│       ├── project.yml  # 專案基本資料（name, description, tags, links, organizers 等）
│       ├── events.yml   # 該專案的活動列表
│       └── {year}/      # 年度特定資料
│
├── people/
│   ├── settings.yml     # 人員頁設定
│   ├── individuals/     # 個人 YAML（96 個人，nick, name, name_en, role, avatar...）
│   ├── orgs/            # 組織 YAML（116+ 個組織）
│   └── relations/       # 關係對應（staff, volunteers, board 等）
│
├── news/                # 電子報資料（依年度，2016–2025）
├── reports/             # 年報資料（依年度）
├── events/              # 活動資料
├── projects/            # 舊版專案資料（2014–2025）
└── about/               # 關於頁內容
```

**重要設定 — `_data/settings.yml`：**
- `current: 2026` — 影響專案頁年度顯示、首頁進行中專案來源
- `menu` / `menu_en` — 主選單結構（中 / 英）

---

## _layouts/ — 版面模板（13 個）

| 檔案 | 用途 |
|------|------|
| `global.html` | 主模板：meta/OG tags、載入 CSS/JS、header/footer、Google Analytics |
| `p.html` | 專案頁：左側 meta sidebar + 主內容（活動、贊助商、捐款人） |
| `event.html` | 活動頁 |
| `story.html` | 文章 / 電子報文章頁 |
| `plist.html` | 專案列表頁 |
| `report.html` | 年報頁 |
| `e.html` | 活動列表頁 |
| `f.html` | 自由版面頁 |
| `project.html` | 舊版專案頁（2016） |
| `design.html` | 設計系統展示頁 |
| `compress.html` | HTML 壓縮用 |

---

## _includes/ — 可重複元件

```
_includes/
├── _var/                # 資料提取元件（Liquid 邏輯，不輸出 HTML）
│   ├── p.html           # 提取當前專案資料
│   ├── e.html           # 提取活動資料
│   ├── lang.html        # 語言偵測（中/英）
│   ├── now.html         # 當前時間
│   ├── og/              # 各版面的 OpenGraph 標籤生成
│   │   ├── p.html, e.html, story.html ...
│   └── plist/           # 專案列表變數
│
├── _shared/             # 共用顯示元件
│   ├── link.html        # 連結渲染
│   ├── org_name.html    # 組織名稱顯示
│   ├── individual_name.html  # 個人姓名顯示
│   ├── logos.html       # Logo 牆
│   └── titles.html      # 標題查詢
│
├── nav/                 # 導航元件
│   ├── header/
│   │   ├── global.html  # 主站 header（讀取 settings.yml menu）
│   │   └── design.html  # 設計系統 header
│   ├── footer.html      # 站腳
│   └── sidebar.html     # 手機側選單
│
├── _plugins/            # 外部函式庫載入器
│   ├── slick.html       # 輪播庫
│   ├── fancybox.html    # 圖片燈箱
│   └── tablesort.html   # 表格排序
│
├── p/                   # 專案頁元件（header, meta, events）
├── event/               # 活動頁元件
├── about/               # 關於頁元件
└── design/              # 設計系統元件
```

---

## assets/ — 靜態資源

```
assets/
├── styles/              # CSS（20+ 檔）
│   ├── global.css       # 全站基礎樣式
│   ├── p.css            # 專案頁樣式
│   ├── story.css        # 文章頁樣式
│   └── {layout}.css     # 各版面專屬樣式
│
├── scripts/             # JavaScript（12+ 檔）
│   ├── global.js        # 核心功能
│   ├── layout.js        # 版面輔助
│   ├── homepage.js      # 首頁功能
│   ├── p.js             # 專案頁互動
│   ├── plist.js         # 專案列表篩選
│   └── {layout}.js      # 各版面專屬 JS
│
├── fonts/               # 字型（Chiron 自訂字型 + FontAwesome）
├── images/              # 全站圖片
└── libs/                # 第三方函式庫（Semantic UI、Slick、FancyBox、jQuery）
```

---

## 頁面目錄

| 目錄 | 說明 |
|------|------|
| `/p/{id}/index.html` | 中文專案頁（對應 `_data/p/{id}/project.yml`） |
| `/en/p/{id}/index.html` | 英文專案頁 |
| `/story/` | 文章、電子報文章（Markdown） |
| `/journal/` | 活動頁 |
| `/news/` | 電子報 |
| `/about/` | 關於頁面（20 個子目錄） |
| `/people/` | 工作夥伴 |
| `/supportus/` | 捐款支持 |
| `/design/` | 設計系統 |

---

## 新增內容的標準流程

### 新增專案
1. 建立 `_data/p/{project_id}/project.yml`（專案資料）
2. 建立 `p/{project_id}/index.html`（中文頁面）
3. 建立 `en/p/{project_id}/index.html`（英文頁面）
4. 圖片放在 `p/{project_id}/`

### 新增人員
1. 在 `_data/people/individuals/{nick}.yml` 新增個人 YAML
2. 在 `_data/people/relations/` 對應關係檔案加入 nick

### 修改導航選單
- 編輯 `_data/settings.yml` 的 `menu`（中文）或 `menu_en`（英文）

### 更新當前年度
- 修改 `_data/settings.yml` 的 `current` 欄位

---

## 本地開發

```bash
# 啟動 Docker 開發環境
./run_docker.sh

# Jekyll 在容器內會自動執行：
# jekyll serve --watch --host 0.0.0.0 --livereload --incremental
# 瀏覽器開啟 http://localhost:4000
```

建置輸出在 `_site/`（不需手動編輯，由 Jekyll 生成）。

---

## 多語言架構

- 中文：`/`（根目錄）
- 英文：`/en/`
- 語言偵測：`_includes/_var/lang.html`
- YAML 資料欄位：`name` / `name_en`、`description` / `description_en`

---

## Google Analytics

追蹤代碼 `G-X3DG2E5E3W`，在 `_layouts/global.html` 載入。
