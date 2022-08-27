let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const arrA = input[1].split(" ");
const arrB = input[2].split(" ");

function solution(arrA, arrB) {
  const numa = arrA.length; // 배열 arrA의 크기
  const numb = arrB.length; // 배열 arrB의 크기
  const arrAB = [...arrA, ...arrB];
  const numunion = new Set(arrAB).size; // 합집합의 크기
  return 2 * numunion - numa - numb; // 차집합의 크기 = (합집합 - A) + (합집합 - B)
}

console.log(solution(arrA, arrB));
