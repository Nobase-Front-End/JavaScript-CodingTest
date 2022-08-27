/*
N번째 까지 set에 저장해 filter를 통해 나머지 문자열을 돌아가면서 검사 
*/
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0].split(" ").map((n) => +n)[0];
const set = new Set(input.slice(1, 1 + N));
const check = input.slice(1 + N);

console.log(check.filter((str) => set.has(str)).length);
