



// HK1 
// 給定 n（1<=n<=30），依照規律「印出」正確圖形

const printStars = function (n) {
  if (n < 1 || n > 30)
    return "不是喔，數字不是這樣喔"
  for (i = 1; i <= n; i++) {
    console.log('*');
  }
}
printStars(4);
printStars(30);
console.log(printStars(99));


// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

const capitalize = function (str) {
  const cap = str[0];
  const rest = str.slice(1);
  const unicode = cap.charCodeAt(0);
  if ((unicode >= 65 && unicode <= 90) || (unicode >= 97 && unicode <= 122)) {
    return cap.toUpperCase() + rest;
  }
  return str;
}


console.log(capitalize('fuck'));
console.log(capitalize('~~zasdfadsfick'));




// hw3：反轉字串
// 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）

const reverser = function (n) {
  let result = '';
  for (let i = n.length - 1; i >= 0; i--) {
    result += n[i];
  }
  return result;
}
console.log(reverser('roror'));
console.log(reverser('123456789'));



// hw4：印出因數
// 先幫大家複習一下數學，給定一個數字 n，因數就是所有小於等於 n 又可以被 n 整除的數，
// 所以最明顯的例子就是 1 跟 n，這兩個數一定是 n 的因數。現在請寫出一個函式來「印出」所有的因數
const factor = function (n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
// factor(12345);
//1
//3
//5
//15
//823
//2469
//4115
//12345

// hw5：自己的函式自己寫
// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！
// 我們要實作的函式有兩個：join 以及 repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）
// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
// repeat 的話就是回傳重複 n 次之後的字串。


//-------------join-------------
const join = function (arr, sep) {
  let result = '';
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i];
    if (i !== arr.length - 1) {
      result += sep;
    }
  }
  return result; //12345
}
console.log(join([3, 4, 5, 6, 7, 8], 0) //3040506070
);

//-------------repeat-------------
const repeat = function (str, n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += str;
  }
  return result;
}
console.log(repeat('你好嗎?', 5)); //你好嗎?你好嗎?你好嗎?你好嗎?你好嗎?

// hw7:挑戰題
// 現在有一個排序好的陣列 arr，裡面的元素都是正整數而且保證不會重複。

// 給你一個數字 n，請寫出一個函式 search 回傳 n 在這個陣列裡面的 index，沒有的話請回傳 -1。
const search = function (arr, n) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === n) {
      return mid;
    }
    else if (arr[mid] < n) {
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }
  return -1;
}
console.log(search([1, 3, 10, 14, 39], 14));  // 3
console.log(search([1, 3, 10, 14, 39], 299)); // -1
console.log(search([1, 3, 10, 14, 39], 1));   // 0
console.log(search([1, 3, 10, 14, 39], 39));  // 4
