const [INPUT_T, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +INPUT_T;
const ARR = INPUT_ARR.map((e) => e.split(" ").map((e) => +e));

const gcd = (num1, num2) => (num2 ? gcd(num2, num1 % num2) : num1);
function solution(T, ARR) {
  return ARR.map((e) => (e[0] * e[1]) / gcd(e[0], e[1]));
}

console.log(solution(T, ARR).join("\n"));
