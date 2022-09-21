let fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");

N = +input.shift();
input = input[0].split(" ").map((element) => +element);

const solution = (N, input) => {
  const dp = Array(N);
  dp[0] = 1;
  for (let i = 1; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (input[j] < input[i]) {
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};

console.log(solution(N, input));
