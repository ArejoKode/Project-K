# Week2: HTTP 網路基礎知識

## 學習目標

本週重點是理解 HTTP 協議和網路通訊的基本概念，為後續的 API 開發奠定基礎。

---

## 學習關鍵字

### HTML 基礎

- **HTML (HyperText Markup Language)**: 網頁的標記語言
- **標籤 (Tags)**: HTML 的基本單位，如 `<div>`、`<p>`、`<form>` 等
- **屬性 (Attributes)**: 標籤的配置，如 `class`、`id`、`src`、`href`
- **表單 (Form)**: 用於收集用戶輸入的 HTML 元素
- **DOM (Document Object Model)**: 網頁在記憶體中的樹狀結構表示

### HTTP 協議

- **HTTP (HyperText Transfer Protocol)**: 應用層網路傳輸協議
- **Request (請求)**: 客戶端發送給伺服器的訊息
- **Response (回應)**: 伺服器回傳給客戶端的訊息
- **Methods (方法)**: HTTP 操作類型
  - **GET**: 從伺服器獲取資源
  - **POST**: 將資料提交到伺服器
  - **PUT**: 更新伺服器上的資源
  - **DELETE**: 刪除伺服器上的資源
  - **PATCH**: 部分更新資源
- **Status Codes (狀態碼)**: 伺服器回應的結果代碼
  - **2xx**: 成功 (例如 200 OK)
  - **3xx**: 重新導向 (例如 301 Moved Permanently)
  - **4xx**: 客戶端錯誤 (例如 404 Not Found)
  - **5xx**: 伺服器錯誤 (例如 500 Internal Server Error)
- **Headers (標頭)**: HTTP 請求/回應的元資料
  - `Content-Type`: 內容類型
  - `Content-Length`: 內容長度
  - `Authorization`: 授權訊息
  - `User-Agent`: 客戶端資訊

### Web APIs

- **fetch API**: 現代的 JavaScript HTTP 請求方式
- **XMLHttpRequest**: 舊版的 HTTP 請求方式
- **RESTful API**: 基於 HTTP 的 API 設計風格
- **JSON (JavaScript Object Notation)**: 常見的資料格式
- **AJAX (Asynchronous JavaScript and XML)**: 非同步網頁通訊技術

### 進階主題

- **CORS (Cross-Origin Resource Sharing)**: 跨域資源共享機制
- **Cookie**: 儲存在客戶端的小資料檔案
- **Session**: 伺服器端的使用者會話管理
- **HTTPS**: HTTP + SSL/TLS 加密
- **Cache (快取)**: 儲存已取得的資源以提高效能

---

## HTTP 基礎知識

### 什麼是 HTML？

HTML 是用來建構網頁的標記語言。每個網頁都是由 HTML 標籤組成的文檔。

範例：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>我的網頁</title>
  </head>
  <body>
    <h1>歡迎來到我的網站</h1>
    <p>這是一個段落。</p>
  </body>
</html>
```

### 什麼是 HTTP？

HTTP 是應用層協議，定義了客戶端和伺服器之間如何通訊。

**基本流程：**

1. 客戶端建立連線
2. 客戶端發送 HTTP Request
3. 伺服器處理請求
4. 伺服器發送 HTTP Response
5. 連線關閉

### HTTP Request/Response 循環

**Request 結構：**

```
[Method] [URL] [HTTP Version]
[Headers]

[Body (optional)]
```

例如：

```
GET /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json

```

**Response 結構：**

```
[HTTP Version] [Status Code] [Status Message]
[Headers]

[Body]
```

例如：

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 25

{"name": "John", "age": 30}
```

### HTTP Methods（方法）

| 方法   | 用途         | 有無 Body |
| ------ | ------------ | --------- |
| GET    | 取得資源     | 否        |
| POST   | 建立資源     | 是        |
| PUT    | 完整更新資源 | 是        |
| DELETE | 刪除資源     | 否        |
| PATCH  | 部分更新資源 | 是        |

### HTTP Status Codes（狀態碼）

| 代碼 | 含義       | 範例               |
| ---- | ---------- | ------------------ |
| 200  | 成功       | 成功取得或建立資源 |
| 201  | 已建立     | 成功建立新資源     |
| 400  | 錯誤請求   | 請求格式不正確     |
| 401  | 未授權     | 需要身份驗證       |
| 403  | 禁止       | 沒有權限訪問       |
| 404  | 找不到     | 資源不存在         |
| 500  | 伺服器錯誤 | 伺服器發生錯誤     |

---

## 作業：HTTP 知識測驗

請回答以下問題，展示對 HTTP 和網路基礎的理解。

### 基礎概念題

**Q1: 什麼是 HTTP？它的主要用途是什麼？**

- 答案應包含：HTTP 是協議、用於客戶端和伺服器通訊、基於請求-回應模型

**Q2: HTML 與 HTTP 的區別是什麼？**

- 答案應包含：HTML 是標記語言用於定義內容，HTTP 是協議用於傳輸

**Q3: 列舉上面沒有出現的五個 HTTP Status Codes 及解釋含義。**

- 答案應包含：至少 5 個正確的狀態碼和解釋

---

### HTTP Methods 題

**Q4: GET 和 POST 方法有什麼區別？**

- 答案應包含：
  - GET 用於取得資源，POST 用於提交資料
  - GET 的參數在 URL 中，POST 的參數在 Body 中
  - GET 有長度限制，POST 沒有
  - GET 是冪等的（重複執行結果相同），POST 不是

**Q5: 什麼時候應該使用 PUT，什麼時候應該使用 PATCH？**

- 答案應包含：
  - PUT 用於完整替換資源
  - PATCH 用於部分更新資源

---

### 實務理解題

**Q6: 請解釋一個完整的 HTTP Request 包含哪些部分？**

- 答案應包含：Method、URL、HTTP Version、Headers、Body（可選）

**Q7: 當你在瀏覽器中輸入一個 URL 並按下 Enter，會發生什麼？（簡述）**

- 答案應包含：
  - 瀏覽器發送 HTTP GET Request
  - 伺服器處理請求並返回 Response
  - 瀏覽器解析 HTML 並顯示網頁

**Q8: 為什麼要有 HTTP Request Headers? 他要解決什麼問題？**

---

### 進階思考題

**Q9: 為什麼需要 HTTPS 而不是 HTTP？**

- 答案應包含：安全性、加密、防止資料洩露、網路安全

**Q10: 簡單解釋什麼是 CORS，以及為什麼存在這個限制？**

- 答案應包含：CORS 是跨域資源共享機制、安全原因、瀏覽器同源政策

---

## 延伸資源

### 推薦閱讀

- [MDN - HTTP](https://developer.mozilla.org/zh-TW/docs/Web/HTTP)
- [MDN - HTML 基礎](https://developer.mozilla.org/zh-TW/docs/Learn/HTML)
- [MDN - fetch API](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API)
- [RESTful API 設計最佳實踐](https://restfulapi.net/)

### 推薦工具，你可以練習使用看看

- **Postman**: 用於測試 API 的工具
- **curl**: 命令行 HTTP 請求工具
- **瀏覽器開發者工具**: 檢查 Network 頁籤查看 HTTP 請求

### 建議可以：

1. 使用瀏覽器開發者工具（F12 -> Network 頁籤）觀察真實的 HTTP 請求
2. 使用 fetch API 發送簡單的 HTTP 請求
3. 實驗不同的 HTTP Methods
4. 觀察不同的 Status Codes 響應

---

## 提交要求

答案寫在 hw.md 裡面，放到 week 下方
