const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const graph = arr.map((str) => +str);
const N = +n;
let dp = [];
dp[0] = [graph[0], 0];
dp[1] = [graph[1], graph[0] + graph[1]];
for (let i = 2; i < N; i++) {
  dp[i] = [Math.max(...dp[i - 2]) + graph[i], dp[i - 1][0] + graph[i]];
}
if (N === 1) {
  console.log(graph[0]);
} else {
  console.log(Math.max(...dp[N - 1]));
}
