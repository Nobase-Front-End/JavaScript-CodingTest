const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const P = input[1].split(" ").map(Number);
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 증가하는 부분수열 최대 개수를 dp배열에 갱신
      if (P[j] > P[i]) dp[j] = Math.max(dp[j], dp[i] + 1);
    }
  }
  console.log(Math.max(...dp));
}
solution();
