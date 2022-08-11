const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  let N = +input[0][0] - 1;
  let tmp = 666;
  while (N > 0) {
    tmp += 1;
    if (String(tmp).includes("666")) N--;
  }
  console.log(tmp);
}

solution();
