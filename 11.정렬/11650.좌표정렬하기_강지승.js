const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  const N = +input[0];
  const dots = [];
  for (let i = 0; i < N; i++) {
    dots.push(input[i + 1].map(Number));
  }

  dots.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let answer = "";
  dots.forEach((dot) => {
    answer += dot.join(" ") + "\n";
  });

  console.log(answer);
}

solution();
