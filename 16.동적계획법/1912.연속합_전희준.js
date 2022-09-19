const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const dp = input[1].split(" ").map((n) => +n);
  for (let i = dp.length - 2; i >= 0; i--) {
    dp[i] = Math.max(dp[i], dp[i] + dp[i + 1]);
  }
  console.log(Math.max(...dp));
}
solution();
