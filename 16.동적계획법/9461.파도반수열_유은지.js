const [INPUT_N, ...INPUT_ARR] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./BaekJoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = +INPUT_N;
const ARR = INPUT_ARR.map((v) => +v);

let answer = [];

for (let i = 0; i < N; i++) {
  let dp = [1, 1, 1];

  for (let j = 3; j < ARR[i]; j++) {
    dp[j] = dp[j - 2] + dp[j - 3];
  }
  answer[i] = dp[dp.length - 1];
}
console.log(answer.join("\n"));
