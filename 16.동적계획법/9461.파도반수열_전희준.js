const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";
  const testCases = input.slice(1).map((n) => +n);
  const max = Math.max(...testCases);
  const dp = [1, 1, 1];
  for (let i = 3; i <= max; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }

  testCases.forEach((testCase) => (result += `${dp[testCase - 1]}\n`));
  console.log(result);
}
solution();
