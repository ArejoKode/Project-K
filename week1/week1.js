



// HK1 
// 給定 n（1<=n<=30），依照規律「印出」正確圖形

const printStars = function (n) {
  if (n < 1 || n > 30) {
    return ('數字必須是1~30')
  }
  else {
    for (let i = 0; i < n; i++) {
      console.log('*');
    }
  }
}
printStars(4)

printStars(31)


// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

const capitalize = function (str) {

  const cap = str[0]
  const rest = str.slice(1)
  const unicode = cap.charCodeAt(0)
  if ((unicode >= 65 && unicode <= 90) || (unicode >= 97 && unicode <= 122)) {
    return cap.toUpperCase() + rest;
  }
  else {
    return str;
  }

}
console.log(capitalize('~~zasdfadsfick'));




// hw3：反轉字串
// 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）

const reverse = function (str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);

};
reverse('1abc2')
reverse('yoyoyo')
reverse('ACBDEFG');
reverse('1,2,3,2,1')

// hw4：印出因數
// 先幫大家複習一下數學，給定一個數字 n，因數就是所有小於等於 n 又可以被 n 整除的數，
// 所以最明顯的例子就是 1 跟 n，這兩個數一定是 n 的因數。現在請寫出一個函式來「印出」所有的因數
const factor = function (n) {
  for (let i = 0; i <= n; i++)
    if (n % i === 0) {
      console.log(i);
    }
}
factor(999)

// hw5：自己的函式自己寫
// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！
// 我們要實作的函式有兩個：join 以及 repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）
// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
// repeat 的話就是回傳重複 n 次之後的字串。

// join
const join = function (arr, sep) {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i !== arr.length - 1) {
      result += sep;
    }
  }
  return result
}
console.log(join([1, 3, 5, 7, 9], 'avo'));


