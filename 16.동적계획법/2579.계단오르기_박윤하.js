let fs = require("fs");
let [N, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((element) => +element);
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경
input = [0, ...input];

const solution = (n, input) => {
  const dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = input[1];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3 < 0 ? 0 : i - 3] + input[i - 1] + input[i],
      dp[i - 2] + input[i]
    );
  }
  return dp[n];
};

console.log(solution(N, input));
