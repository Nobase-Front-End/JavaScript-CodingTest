/**
 * 기준 인덱스(i)를 두고 기준 인덱스보다 이전 인덱스(j)를 돌면서 기준 인덱스보다 큰 요소가 없고 dp에 저장되어 있는 해당 인덱스의 max값보다 작으면 dp에 추가해줌
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const num = +input[0];
const arr = input[1].split(" ").map((v) => +v);
const dp = [];

for (let i = 0; i < num; i++) {
  let max = 0;

  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1; 
}

console.log(Math.max(...dp));
