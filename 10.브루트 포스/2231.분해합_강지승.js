const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  let answer = 0;
  const N = input[0][0];
  for (let i = +N - N.length * 9; i <= N; i++) {
    const num =
      i +
      String(i)
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    if (num == N) {
      answer = i;
      break;
    }
  }
  console.log(answer);
}

solution();
