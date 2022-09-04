let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [A, B] = input.sort((x, y) => y - x);

const gcd = (a, b) => {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const solution = (A, B) => [gcd(A, B), (A * B) / gcd(A, B)];

console.log(solution(A, B).join("\n"));
