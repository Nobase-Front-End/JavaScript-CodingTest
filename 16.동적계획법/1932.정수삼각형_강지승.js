const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const triangle = Array.from({ length: n }, (_, i) => input[i + 1].split(" ").map(Number));
  for (let i = 1; i < n; i++) {
    triangle[i][0] += triangle[i - 1][0];
    triangle[i][triangle[i].length - 1] += triangle[i - 1][triangle[i - 1].length - 1];
    for (let j = 1; j < triangle[i].length - 1; j++) {
      triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }
  console.log(Math.max(...triangle[n - 1]));
}
solution();
