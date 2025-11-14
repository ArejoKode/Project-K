# week2基礎概念題
### Q1: 什麼是 HTTP？它的主要用途是什麼？
---
### ANS:
### HTTP是位於應用層的網路傳輸協議，它的主要用途是作為網路中客戶端（例如您的瀏覽器）和伺服器之間進行資料交換的通訊基礎，並基於請求-回應模型：
### 請求 (Request)： 客戶端向伺服器發送請求，例如要求獲取一個網頁。
### 回應 (Response)： 伺服器接收請求並回傳一個回應，
### 傳輸的過程:你打開網頁→[HTTP] 產生請求 → "GET /index.html" → [TCP] 把請求切成小包，編號、簽收、重傳→[IP] 加上地址，送上網路公路 → 伺服器收到後用 TCP 拼回 → 交給 HTTP 處理 → [HTTP] 產生回應 → "200 OK + <html>..." → [TCP] 再切成小包、編號、簽收、重傳（**反方向**）→ [IP] 加上地址，送回網路公路 → 瀏覽器收到 → 用 TCP 拼回 → 交給 HTTP 解析 → 顯示網頁
### TCP可以理解為物流大哥，但現階段多使用https協定，多了一個secure，並使用TLS技術來加密確保密碼、信用卡資料等安全性!!

### Q2 :HTML 與 HTTP 的區別是什麼？
### ANS:
### HTML是一種標記語言，用來描述網頁的內容和結構，HTTP是一種網路傳輸協議，用來定義客戶端和伺服器之間通訊的規則和訊息的格式

### Q3: 列舉上面沒有出現的五個 HTTP Status Codes 及解釋含義。
### ANS:
### 201:資源已建立成功。常在客戶端發送 POST 請求成功建立新資源後返回（例如註冊新用戶）。
### 301:永久移動。請求的資源已經永久性地移動到新的 URL。瀏覽器會將舊網址快取並在將來自動導向到新網址。
### 403:禁止訪問/無權限。 伺服器理解請求，但拒絕提供服務。客戶端身份已知，但沒有足夠權限訪問資源。
### 500:伺服器內部錯誤。 伺服器在處理請求時遇到了一個無法預期的錯誤。這是最常見的通用伺服器端錯誤。
### 503:服務暫時不可用。 伺服器目前無法處理請求，通常是因為過載或停機維護。通常會短暫恢復。

### Q4: GET 和 POST 方法有什麼區別？
### ANS:
### GET 用於取得資源(ex.載入網頁)，POST 用於提交資料(ex.帳號登入) 
### GET 的參數在 URL 中，位置： 參數緊跟在 URL 的路徑之後，以問號（?）開始，參數之間用「與號」（&）連接，每個參數由「鍵值對」（key=value）組成。
### 特性： 由於參數暴露在 URL 中，它們會被記錄在瀏覽器歷史、伺服器日誌中，因此不適合傳輸敏感資訊（如密碼或 token）。此外，URL 有長度限制。
### POST 的參數在 Body 中，位置： 參數（通常是 JSON、表單數據或其他格式）放在 HTTP 請求的消息主體 (Message Body) 中。特性： 參數不會顯示在 URL 中，因此可以傳輸大量數據（沒有 URL 長度限制），並且相對更適合傳輸敏感資訊。
### GET 是冪等的（ex.F5重複載入網頁，執行結果相同），POST 重複繳交訂單 會多很多筆訂單XD

### Q5: 什麼時候應該使用 PUT，什麼時候應該使用 PATCH？
### ANS: PUT為完整替換資源的所有資料，而PATCH方法為部分修改資源的特定欄位，雖然兩種都是更新的方法，但PUT有冪等性，而PATCH沒有!!!!!!

### Q6: 請解釋一個完整的 HTTP Request 包含哪些部分？
### ANS:
### HTTP Request主要分為三部分**Request Line** → 我要做什麼事？（例：GET /login HTTP/1.1）**Headers** → 我要附帶的資訊（像信封上的寄件人、地址、郵戳）**Body** → 信裡面真正的內容（要送給伺服器的資料）
### 一:**Request Line**主要由**Method**(get,post,put...)/**URL**(www.google.com)/**HTTP版本**）：指定協定版(HTTP/1.1 或 HTTP/2)
### 二:**Headers**用來攜帶額外的「請求資訊」與「客戶端環境描述」。
```
Host: www.example.com 指定主機名稱（HTTP/1.1 必填）
User-Agent: Mozilla/5.0 描述使用者的瀏覽器或應用程式
Accept: text/html,application/json 指定可接受的資料格式
Content-Type: application/json 若有主體（body），說明內容格式（如 JSON、表單等）
Authorization: Bearer <token> 用於攜帶驗證資訊
```
### 三:**Body主體**可選，用於傳送資料(純文字/表單/json物件給伺服器，多見於 POST、PUT）。
```
{
  "username": "arejo",
  "password": "12345"
}
```
### Q7: 當你在瀏覽器中輸入一個 URL 並按下 Enter，會發生什麼？（簡述）
### ANS:
### **DNS**查詢(把網址轉乘ip)→建立**TCP**連線(司機大哥上路囉)瀏覽器和伺服器建立連線(HTTPS 的話還會做TLS加密握手) → 發送 **HTTP Request**(GET 請求拿首頁 HTML。)→伺服器處理請求(伺服器接到請求，找對應資源，生成 HTTP Response（包含狀態碼、Header、Body）。) → 瀏覽器接收並解析 Response(解析 HTML，遇到 CSS、JS、圖片、字型等資源就發第二輪 Request並渲染出畫面給使用者看。)

### Q8: 為什麼要有 HTTP Request Headers? 他要解決什麼問題？
### ANS:
### 伺服器可以知道你是什麼瀏覽器、用戶身分，或者你有沒有登入(User-Agent、Authorization、Cookie)或是我希望怎麼處理回應(語言格式都可以設定)還有資料傳輸的細節(讓伺服器知道你 Body 的格式（JSON、表單、檔案等）和大小)，最後是控制快取、決定連線要不要保持開啟(Cache-Control、Connection)。
### 最後解決了Headers解決了什麼問題？身份識別與安全問題、資源格式與語言匹配、資料完整性與正確解析、網路效率與控制。

### Q9: 為什麼需要 HTTPS 而不是 HTTP？
### ANS:HTTPS = HTTP + TLS(加密技術) 簡單說就是透過加密技術來發Request跟收Response

### Q10:簡單解釋什麼是 CORS，以及為什麼存在這個限制？
### ANS:CORS 是瀏覽器基於同源政策的安全機制，用來控制跨域請求，確保只有被允許的來源可以存取伺服器資源。Ex.註冊帳號時可以用line/fb/google註冊 
### 補充：現代網頁常用 AJAX（fetch）來非同步向伺服器拿資料。
```js
fetch('https://api.example.com/data')
.then(response => response.json())  
.then(data => console.log(data))  
.catch(error => console.error(error));
```