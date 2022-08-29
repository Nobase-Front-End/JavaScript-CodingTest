const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const duddo = new Set(input.slice(1, N + 1));
  const bodo = new Set(input.slice(N + 1, N + M + 1));
  const answer = [];
  duddo.forEach((d) => {
    if (bodo.has(d)) answer.push(d);
  });
  answer.sort();
  console.log(answer.length);
  console.log(answer.join("\n"));
}

solution();
