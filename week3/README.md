# Week 3 作業：YouTube v3 API 資料抓取

## 作業目標

練習使用 YouTube Data API v3 抓取資料，並用 `console.log` 印出結果。

## 作業內容

寫一隻 `index.js`，執行後用 `console.log` 印出以下資料：

### 1. Playlist 內容抓取

拉取指定 YouTube Playlist 的所有影片，印出：

- 影片標題
- 影片 ID
- 發布日期

### 2. 影片搜尋功能

根據關鍵字搜尋影片（前 10 筆），印出：

- 影片標題
- 頻道名稱
- 發布時間

### 3. 影片詳細資訊

根據影片 ID 取得影片統計，印出：

- 觀看次數
- 按讚數
- 留言數

### 4. 頻道資訊查詢

根據頻道 ID 取得頻道資訊，印出：

- 頻道名稱
- 訂閱人數
- 總影片數

### 5. 影片留言抓取

抓取指定影片的留言（前 20 則），印出：

- 留言者名稱
- 留言內容
- 按讚數

## 環境設定

### API Key 取得方式

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案
3. 啟用 YouTube Data API v3
4. 建立 API 金鑰

### 設定方式

將 API Key 存放在 `.env` 檔案中：

```
YOUTUBE_API_KEY=your_api_key_here
```

**注意：** `.env` 檔案不要上傳到 Git！

## 程式結構建議

```
week1/
├── index.js           # 主程式
├── .env              # API Key（不上傳）
├── .env.example      # 環境變數範例
├── package.json      # 專案設定
└── README.md         # 說明文件
```

## 執行方式

```bash
# 安裝依賴
npm install

# 執行程式
node index.js
```

## 參考資源

- [YouTube Data API v3 官方文件](https://developers.google.com/youtube/v3/docs)
- [API 使用配額說明](https://developers.google.com/youtube/v3/getting-started#quota)
