const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const p = input[1].split(" ").map(Number);
  p.sort((a, b) => a - b);
  let answer = 0;
  p.forEach((v, i) => {
    answer += v * (n - i);
  });
  console.log(answer);
}

solution();
