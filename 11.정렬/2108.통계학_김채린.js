const [INPUT_N, ...INPUT_NUMS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +INPUT_N;
const NUMS = INPUT_NUMS.map((e) => +e);

// 정렬
NUMS.sort((a, b) => a - b);

// 1. 산술평균: N개의 수들의 합을 N으로 나눈 값
const average = Math.round(NUMS.reduce((total, cur) => total + cur, 0) / N);
console.log(average === -0 ? 0 : average);

// 2. 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
console.log(NUMS[Math.floor(N / 2)]);

// 3. 최빈값 : N개의 수들 중 가장 많이 나타나는 값
const appearCntObj = {};
NUMS.forEach((e) => {
  appearCntObj[e] ? appearCntObj[e]++ : (appearCntObj[e] = 1);
});
const appearCntArr = Object.entries(appearCntObj);
appearCntArr.sort((a, b) => {
  return a[1] !== b[1] ? b[1] - a[1] : a[0] - b[0];
});
if (N === 1) console.log(NUMS[0]);
else
  console.log(appearCntArr[0][1] === appearCntArr[1][1] ? appearCntArr[1][0] : appearCntArr[0][0]);

// 4. 범위 : N개의 수들 중 최댓값과 최솟값의 차이
console.log(NUMS[N - 1] - NUMS[0]);
