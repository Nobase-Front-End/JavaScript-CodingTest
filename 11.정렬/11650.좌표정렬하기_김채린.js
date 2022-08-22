const [INPUT_N, ...INPUT_DOTS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +INPUT_N;
const DOTS = INPUT_DOTS.map((e) => e.split(" ").map((e) => +e));

function solution(N, DOTS) {
  DOTS.sort((dot1, dot2) => (dot1[0] !== dot2[0] ? dot1[0] - dot2[0] : dot1[1] - dot2[1]));
  return DOTS;
}

console.log(
  solution(N, DOTS)
    .map((e) => e.join(" "))
    .join("\n")
);
