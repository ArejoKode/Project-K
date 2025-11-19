# Week4 作業 - 這週的作業內容不准用 AI，全部都要自己寫出來，作業有任何問題都可以問我 ❤️

## hw1

這是某一個會回傳獎項的 API 網址：<https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery>

用 GET 即可，API 會回傳一個 JSON 格式的物件，內容為：

```
{
  prize: "獎項名稱"
}
```

API 會按照機率回傳不同的獎項名稱，請你針對不同的獎項名稱做處理。

獎項名稱一共有四種：FIRST、SECOND、THIRD 以及 NONE。

1. FIRST，頭獎，在網頁上顯示字樣：「恭喜你中頭獎了！日本東京來回雙人遊！」，並且把背景改成[這張圖片](https://pixabay.com/photos/flight-plane-close-look-airplane-4315953/)。
2. SECOND，二獎，在網頁上顯示字樣：「二獎！90 吋電視一台！」，並且把背景換成[這張圖片](https://pixabay.com/photos/living-room-tv-table-a-drawer-home-1872192/)。
3. THIRD，三獎，在網頁上顯示字樣：「恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！」，並且在網頁上放[這張圖片](https://pixabay.com/photos/youtube-iphone-smartphone-mobile-2617510/)。
4. NONE，銘謝惠顧，在網頁上顯示字樣：「銘謝惠顧」，文字部分變成白色，背景整個畫面都變成黑色。

有一點要特別注意，API 偶爾可能會不太穩定，會回傳錯誤。如果發生任何預期之外的情形（回傳的獎項不是以上四種，或是 Server 直接回傳錯誤），請跳出提示視窗（alert）：「系統不穩定，請再試一次」。

### 進階挑戰題

請問這四種的機率為何？

## hw2

你進到了一間公司，但這間公司的 PM 很隨性，這間公司開發也都不用設計稿，他開了一張票請你完成下面功能：

使用 Tweet(X) api v2 完成以下功能

SPEC 如下：

1. 整個畫面不能滾動，會有一個 header，上面有兩個標籤：搜尋推文 和 搜尋用戶
2. 點擊標籤切換不同的內容，內容大致上長這樣：

---

「搜尋欄」

「搜尋結果」

---

--- 內的 context 上下左右不可以 scroll，但是搜尋結果本身可以上下滾動，因為可能內容很多

`GET /2/tweets/recent` 搜尋指定關鍵詞的最新推文。

`GET /2/users/by/username` 查找特定用戶資訊（例如用戶名稱、ID、描述）。

(上述內容不一定是對的，以 R&D 這邊為主)
