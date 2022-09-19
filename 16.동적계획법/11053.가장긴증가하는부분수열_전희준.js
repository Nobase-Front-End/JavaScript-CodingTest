const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);

function solution() {
  const N = +n;
  const numSeq = arr.map((n) => +n);
  const dp = new Array(N).fill(1);
  for (let i = 0; i < numSeq.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numSeq[j] < numSeq[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(Math.max(...dp));
}
solution();
