<!-- @format -->

# 網頁切版直播班專題：ZoHue

## 專案頁面

- index.html → 首頁
- about.html → 關於我們
- contact.html → 聯絡我們
- privacy.html → 隱私權政策
- userAgreement.html → 用戶條款

## 常用 Bootstrap 類別

### 組件(固定 class)

#### 橘底白字按鈕(含 hover 效果)

- btn btn-secondaryL bg-primary-500 btn-primaryL text-white fw-semibold

### margin、padding 間距

```
- mx-auto：水平置中(等於 margin:0 auto)
-0：移除該間距
-1：4px
-2：8px
-3：12px
-4：16px
-xl：20px
-5：24px
-xxl:32px
-2xl：40px
-6：48px
-3xl：56px
-7：80px
上：mt、pt
下：mb、pb
左：ms、ps
右：me、pe
上下：my、py
左右：mx、px
```

### gap 間距

⚠️ gap 間距跟 margin、padding 共用，需搭配 d-flex 使用

設定方法：

- 所有方向：gap-x
- 垂直方向(行與行之間)：row-gap-x
- 水平方向(列與列之間)：col-gap-x

### display

#### flexbox

- d-flex
- d-inline-flex

#### flex direction（方向）

- flex-row：水平，從左到右（預設）
- flex-row-reverse：水平，從右到左
- flex-column：垂直，從上到下
- flex-column-reverse：垂直，從下到上

#### flex wrap（換行）

- flex-wrap：允許換行
- flex-nowrap：不換行（預設）
- flex-wrap-reverse：反向換行

#### justify content（主軸對齊）

- justify-content-start：靠左/上
- justify-content-end：靠右/下
- justify-content-center：置中
- justify-content-between：兩端對齊
- justify-content-around：環繞分配
- justify-content-evenly：平均分配

#### align items（交叉軸對齊）

- align-items-start：靠上/左
- align-items-end：靠下/右
- align-items-center：置中
- align-items-baseline：基線對齊
- align-items-stretch：拉伸填滿（預設）

#### align content（多行對齊）

- align-content-start：靠上
- align-content-end：靠下
- align-content-center：置中
- align-content-between：兩端對齊
- align-content-around：環繞分配
- align-content-evenly：拉伸填滿

#### align self（單個子項對齊）

- align-self-start：靠上/左
- align-self-end：靠下/右
- align-self-center：置中
- align-self-baseline：基線對齊
- align-self-stretch：拉伸填滿

#### flex（子項伸縮）

- flex-fill：填滿可用空間
- flex-grow-0：不放大
- flex-grow-1：可放大
- flex-shrink-0：不縮減
- flex-shrink-1：可縮減

### 顏色

- natural、primary、secondary
- 文字顏色：text-XXXX-300
- 背景顏色：bg-XXXX-300
- 外框顏色：border-XXXX-300
  > ▲ XXXX 代換 natural、primary、secondary
- 固定背景色：background-01、background-02(變數) → bg-bg-01、bg-bg-02(class)
- 黑色：black、dark
- 白色：white、light
- 剩下的顏色變數沒有改，可依照需求自行調整顏色，class設定方式同上，class名稱可參考 Bootstrap 官方文件：https://bootstrap5.hexschool.com/docs/5.1/customize/color/

### 邊框

#### 添加邊框

- border：四邊框
- border-top：上方邊框
- border-bottom：下方邊框
- border-left：左方邊框
- border-right：右方邊框

#### 移除邊框

- border-0：移除所有邊框
- border-top-0：上方無邊框
- border-bottom-0：下方無邊框
- border-left-0：左方無邊框
- border-right-0：右方無邊框

#### 邊框寬度

- border-1：1px 的邊框
- border-2：2px 的邊框
- border-3：3px 的邊框
- border-4：4px 的邊框
- border-5：5px 的邊框

### 圓角

- rounded-0：無圓角
- rounded-sm：12px
- rounded：16px(Bootstrap 預設)
- rounded-lg：24px
- rounded-xl：32px
- rounded-6: 40px
- rounded-pill：膠囊型圓角
- rounded-circle：圓形圓角
- rounded-top：只針對上方兩圓角
- rounded-start：只針對左方兩圓角
- rounded-end：只針對右方兩圓角
- rounded-bottom：只針對下方兩圓角

### 字體大小

#### 內容文字大小

- fs-1：48px → 對應 h1
- fs-2：32px → 對應 h2
- fs-3：28px → 對應 h3
- fs-4：24px → 對應 h4
- fs-lg：20px
- fs-5：18px → 對應 h5
- fs-6：16px → 對應 h6
- fs-7、small：14px

#### 標題文字大小

- display-1：80px
- display-2：72px
- display-3：64px
- display-4：56px
- display-5：48px
- display-6：40px

### 字體寬度

- fw-lighter：lighter(比父元素更窄)
- fw-light：300px
- fw-normal：400px(預設)
- fw-medium：500px
- fw-semibold：600px
- fw-bold：700px
- fw-bolder：bolder(比父元素更粗)

### 垂直對齊

- align-baseline：預設，元素與父元素的基準線對齊
- align-top：元素及其後代與行高的頂部對齊
- align-middle：元素與行高的中間對齊
- align-bottom：元素及其後代與行高的底部對齊
- align-text-top：元素與父元素字體的頂部對齊
- align-text-bottom：元素與父元素字體的底部對齊

### button

- btn-py: 16px
- btn-px: 24px
- radius: 100px

### 隱藏元素

- d-none：在所有螢幕尺寸下都隱藏
- d-none d-sm-block：在超小型螢幕上隱藏，但在小型 (sm) 及更大的螢幕上顯示
- d-md-none：在中型 (md) 及更大的螢幕上隱藏
- d-none d-lg-block：在大型 (lg) 及更大的螢幕上顯示，但在小於 lg 的螢幕上隱藏

```
斷點尺寸：
1.sm (small): ≥576px
2.md (medium): ≥768px
3.lg (large): ≥992px
4.xl (extra large): ≥1200px
5.xxl (extra extra large): ≥1400px
```

## 圖庫 Icon

- icon 庫：https://icon-sets.iconify.design/
- fontawesome：https://fontawesome.com/?o=r
- fontawesome → 已使用 npm 全域安裝，可直接到官網複製使用
- tabler：https://tabler.io/icons
- tabler → 已使用 npm 全域安裝，可直接到官網複製使用
- Google Material Design Icons：https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_drop_up:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3
- Google Material Design Icons → 已使用 npm 全域安裝，可直接到官網複製使用

```
安裝了兩個版本一個是新版Google icon、一個是舊版Google icon。
1.新版Google icon使用的class是：material-symbols-outlined
2.舊版Google icon使用的class是：material-icons 和 material-icons-outlined
3.新版與舊版的差異，差別在於舊版只有1000+個icon，新版有2500+個icon且新版的icon官網會持續更新，
  舊版不更新且能使用的也較少，故而安裝了兩種版本的 Google Material icons
4.因為新版Google icon沒有實心的圖標，所以也安裝了舊版的安裝包，
  舊版的Google icon可以使用實心和非實心兩種icon型態，使用方式如下：

<!-- 實心 material-icons -->
<span class="material-icons">notifications</span>

<!-- 非實心 material-icons-outlined -->
<span class="material-icons-outlined">notifications</span>

<!-- 如果 material-icons-outlined 沒有效果，就直接使用 material-symbols-outlined -->
<span class="material-symbols-outlined">notifications</span>
```

## Node.js 版本

- 專案的 Node.js 版本需為 v18 以上
- 查看自己版本指令：`node -v`

## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處 → assets/images，以 SVG 格式儲存，可自由調整大小，不會壓縮圖片品質
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案
- ejs 模板若有 JavaScript，可直接寫在下方

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
