const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [K, N] = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const lines = input.map((n) => +n);

  let min = 1;
  let max = Math.max(...lines);

  while (min <= max) {
    const mid = parseInt((max + min) / 2);
    const lineCount = lines
      .map((line) => parseInt(line / mid))
      .reduce((pre, cur) => pre + cur, 0);

    if (lineCount < N) max = mid - 1;
    else min = mid + 1;
  }
  console.log(max);
}
solution();
