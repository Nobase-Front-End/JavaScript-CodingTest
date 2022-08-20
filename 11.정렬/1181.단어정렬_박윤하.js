let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input.shift();

function solution(input) {
  const inputset = new Set(input);
  const inputarr = Array.from(inputset);
  inputarr.sort();
  inputarr.sort((x, y) => x.length - y.length);
  return inputarr;
}

console.log(solution(input).join("\n"));
