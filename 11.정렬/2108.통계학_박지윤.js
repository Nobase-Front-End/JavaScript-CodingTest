let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input.map(Number);
let length = arr.shift();

// 산술평균
let a = arr.reduce((a, b) => a + b, 0);
let avg = Math.round(a / length);

// 중앙값
arr.sort((a, b) => a - b);
let answer =
  length % 2 === 0
    ? arr[length / 2] + arr[length / 2 - 1]
    : arr[Math.floor(length / 2)];

// 최빈값
function getMostValue() {
  const map = new Map();
  for (let i in arr) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  let maxValue = 0;
  let arr2 = [];
  map.forEach((ele, key) => {
    if (maxValue < ele) {
      maxValue = ele;
      arr2 = [];
      arr2.push(key);
    } else if (maxValue === map.get(key)) {
      arr2.push(key);
    }
  });
  return arr2.length !== 1 ? arr2[1] : arr2[0];
}

// 범위
let max = Math.max(...arr);
let min = Math.min(...arr);
let range = max - min;

console.log(avg === -0 ? 0 : avg);
console.log(answer);
console.log(getMostValue());
console.log(range);
