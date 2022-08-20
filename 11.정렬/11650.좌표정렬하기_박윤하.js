let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const N = input.shift();
input.forEach((element, idx, arr) => {
  arr[idx] = element.split(" ");
});

function solution(N, input) {
  input.sort((x, y) => (x[0] === y[0] ? x[1] - y[1] : x[0] - y[0]));
  input.forEach((element, idx, arr) => (arr[idx] = element.join(" ")));
  return input.join("\n");
}

console.log(solution(N, input));
