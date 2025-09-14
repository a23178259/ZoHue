# 網頁切版直播班專題：ZoHue

### 專案頁面

- index.html → 首頁
- about.html → 關於我們
- contact.html → 聯絡我們
- privacy.html → 隱私權政策
- userAgreement.html → 用戶條款

### 位置
- 圖片：assets/images → 以SVG格式儲存，可自由調整大小，不會壓縮圖片品質

### 常用 Bootstrap 類別

#### margin、padding 間距

```
-1：4px
-2：8px
-3：12px
-4：16px
-xl：20px
-5：24px
-6：48px
上：mt、pt
下：mb、pb
左：ms、ps
右：me、pe
上下：py、my
左右：px、mx
```

#### 顏色

- natural、primary、secondary
- 文字顏色：text-XXXX-300
- 背景顏色：bg-XXXX-300
- 外框顏色：border-XXXX-300
> ▲ XXXX 代換 natural、primary、secondary
- 固定背景色：background-01、background-02(變數) → bg-bg-01、bg-bg-02(class)
- 黑色：black、dark
- 白色：white、light

#### 字體大小

- fs-1：48px → 對應 h1
- fs-2：32px → 對應 h2
- fs-3：28px → 對應 h3
- fs-4：24px → 對應 h4
- fs-lg：20px
- fs-5：18px → 對應 h5
- fs-6：16px → 對應 h6
- sm：14px

#### 圓角
- rounded-0：無圓角
- rounded-sm：12px
- rounded：16px(Bootstrap預設)
- rounded-lg：24px
- rounded-xl：16px
- rounded-xxl：32px
- rounded-pill：膠囊型圓角
- rounded-circle：圓形圓角
- rounded-top：只針對上方兩圓角
- rounded-start：只針對左方兩圓角
- rounded-end：只針對右方兩圓角
- rounded-bottom：只針對下方兩圓角

### 圖庫 Icon

- fontawesome：https://fontawesome.com/?o=r
- fontawesome → 已使用 npm 全域安裝，可直接到官網複製class使用
- tabler：https://tabler.io/icons
- tabler → 使用 CDN 引入
- icon 庫：https://icon-sets.iconify.design/
- Google Material Design Icons：https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_drop_up:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3

### Node.js 版本

- 專案的 Node.js 版本需為 v18 以上
- 查看自己版本指令：`node -v`

### 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

### 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

## 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

### 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 gh-pages 流程說明

### Windows 版本

1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署
