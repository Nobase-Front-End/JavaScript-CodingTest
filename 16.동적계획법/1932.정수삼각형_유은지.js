const [INPUT_N, ...INPUT_ARR] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./BaekJoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = +INPUT_N;
const ARR = INPUT_ARR.map((e) => e.split(" ").map((e) => +e));

let dp = new Array(N).fill(0).map(() => new Array(N).fill(0));

dp[0][0] = ARR[0][0];

for (let i = 1; i < ARR.length; i++) {
  for (let j = 0; j < ARR[i].length; j++) {
    dp[i][j] = Math.max(dp[i - 1][j - 1] ?? 0, dp[i - 1][j] ?? 0) + ARR[i][j];
  }
}
console.log(Math.max(...dp[ARR.length - 1]));
