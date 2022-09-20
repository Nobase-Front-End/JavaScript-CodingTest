const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const P = input[1].split(" ").map(Number);
  for (let i = 1; i < +input[0]; i++) {
    P[i] = Math.max(P[i - 1] + P[i], P[i]);
  }
  console.log(Math.max(...P));
}
solution();
