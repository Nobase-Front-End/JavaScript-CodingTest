const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);

function solution() {
  const N = +n;
  const stair = [0, ...arr.map((n) => +n)];
  const dp = new Array(N + 1).fill(0);
  dp[1] = stair[1];
  dp[2] = dp[1] + stair[2];
  dp[3] = Math.max(stair[1], stair[2]) + stair[3];
  for (let i = 4; i <= N; i++) {
    dp[i] = Math.max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i]);
  }
  console.log(dp[N]);
}
solution();
