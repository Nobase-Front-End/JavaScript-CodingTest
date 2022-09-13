let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [_, testcase] = input;
const [A, ...arrB] = testcase.split(" ");

const gcd = (a, b) => {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const solution = (A, arrB) =>
  arrB.map((B) => {
    const gcd_AB = gcd(A, B);
    return `${A / gcd_AB}/${B / gcd_AB}`;
  });

console.log(solution(A, arrB).join("\n"));
