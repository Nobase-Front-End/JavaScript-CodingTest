const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const steps = Array.from({ length: n }, (_, i) => [+input[i + 1], +input[i + 1]]);

  if (n < 2) {
    console.log(Math.max(...steps[n - 1]));
    return;
  }

  steps[1][1] += steps[0][0];
  for (let i = 2; i < n; i++) {
    steps[i][0] += Math.max(steps[i - 2][0], steps[i - 2][1]);
    steps[i][1] += steps[i - 1][0];
  }

  console.log(Math.max(...steps[n - 1]));
}
solution();
