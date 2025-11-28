/**
 * 題目三：async/await 基礎（8 分鐘）
 *
 * 以下有一個模擬 API 的函式 fakeAPI()，
 * 它有 50% 機率成功、50% 機率失敗。
 *
 * 請補完 getData 函式，使用 async/await 語法：
 * - 如果成功，用 console.log 印出回傳的 name
 * - 如果失敗，用 console.log 印出「發生錯誤」
 */

// 模擬 API（不用修改這個函式）
function fakeAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ name: "小明" })
      } else {
        reject(new Error("網路錯誤"))
      }
    }, 500)
  })
}

// 請補完這個函式
async function getData() {
  // 請在這裡寫你的程式碼


}

// 執行測試（多跑幾次看看成功和失敗的情況）
getData()
