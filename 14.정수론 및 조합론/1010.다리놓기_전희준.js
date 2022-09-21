const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";
  const bridges = input.slice(1).map((tc) => tc.split(" ").map((n) => +n));
  bridges.map((bridge) => {
    [N, M] = bridge;
    const dp = Array.from(Array(N + 1), () => Array(0));

    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        if (i === 1) {
          dp[i][j] = j;
        } else if (i === j) {
          dp[i][j] = 1;
        } else if (j > i) {
          dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
        }
      }
    }
    result += `${dp[N][M]}\n`;
  });
  console.log(result);
}
solution();
