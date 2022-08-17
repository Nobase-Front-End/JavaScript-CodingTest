const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  const N = +input[0];
  const nums = [];
  for (let i = 0; i < N; i++) {
    nums.push(+input[i + 1]);
  }
  nums.sort((a, b) => a - b);

  // 최빈값
  const cntNums = {};

  // 빈도수를 카운트
  nums.forEach((num) => {
    cntNums[num] = cntNums[num] ? cntNums[num] + 1 : 1;
  });

  // 최빈값
  let maxNum = Math.max(...Object.values(cntNums));
  let arr = [];

  // 최빈값 배열
  for (let num in cntNums) {
    if (cntNums[num] === maxNum) {
      arr.push(num);
    }
  }
  arr.sort((a, b) => a - b);

  // 평균
  const avg = Math.round(nums.reduce((prev, cur) => prev + cur, 0) / N);
  console.log(avg === -0 ? 0 : avg);
  // 중앙값
  console.log(nums[Math.floor(nums.length / 2)]);
  // 최빈값
  console.log(arr[1] ? arr[1] : arr[0]);
  // 최댓값 - 최솟값
  console.log(nums[nums.length - 1] - nums[0]);
}

solution();
