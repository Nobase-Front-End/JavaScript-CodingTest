let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [N, M] = input.shift().split(" ");
const arrA = input.slice(0, N);
const arrB = input.slice(N);

function solution(arrA = [], arrB = []) {
  const objA = {};
  arrA.forEach((element) => (objA[element] = true));
  const intersection = arrB.filter((element) => objA[element]);
  const sorted = [...intersection].sort();
  return [sorted.length, ...sorted];
}

console.log(solution(arrA, arrB).join("\n"));
