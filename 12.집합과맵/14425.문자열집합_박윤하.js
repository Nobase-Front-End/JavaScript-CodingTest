let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [N, M] = input.shift().split(" ");
const setS = input.slice(0, N);
const test = input.slice(N);

function solution(setS = [], test = []) {
  const objS = {};
  setS.forEach((element) => (objS[element] = true));
  return test.filter((element) => objS[element]).length;
}

console.log(solution(setS, test));
