const [INPUT_N, ...INPUT_ARR] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./BaekJoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +INPUT_N;
const ARR = INPUT_ARR[0].split(" ").map((v) => +v);
const dp = [ARR[0]];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + ARR[i], ARR[i]);
}

console.log(Math.max(...dp));
