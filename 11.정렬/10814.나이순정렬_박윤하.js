let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input.shift();

function solution(input) {
  input.sort((x, y) => x.split(" ")[0] - y.split(" ")[0]);
  return input.join("\n");
}

console.log(solution(input));
