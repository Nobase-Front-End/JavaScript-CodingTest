const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const set = new Set(input.slice(1, N + 1));
  const str = input.slice(N + 1, N + M + 1);
  let result = 0;
  str.forEach((s) => {
    if (set.has(s)) result++;
  });
  console.log(result);
}

solution();
