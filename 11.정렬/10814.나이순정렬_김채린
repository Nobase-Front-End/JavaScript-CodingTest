const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +INPUT.shift();
const MEMBERS = INPUT.map((e) => e.split(" ")).map((e) => [+e[0], e[1]]);

function solution(N, MEMBERS) {
  // 자바스크립트의 sort는 안정정렬이므로 나이가 증가하는 순으로 정렬하면 가입한 순서는 유지됨
  return MEMBERS.sort((member1, member2) => member1[0] - member2[0]);
}

console.log(
  solution(N, MEMBERS)
    .map((e) => e.join(" "))
    .join("\n")
);
