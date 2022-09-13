let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input.shift();

// 유클리드 호제법(최대 공약수)
const gcd = (a, b) => {
  while (b != 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const solution = (input) => {
  return input.map((testcase) => {
    const [A, B] = testcase.split(" ");
    return (A * B) / gcd(B, A);
  });
};

console.log(solution(input).join("\n"));
