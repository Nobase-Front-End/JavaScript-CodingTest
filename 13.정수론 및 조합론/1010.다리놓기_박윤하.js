let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input.shift();

const combination = (M, N) => {
  let denominator = 1; // 분모
  let numerator = 1; // 분자
  for (let i = 1; i <= M; i++) {
    numerator *= i;
    denominator *= i <= N ? i : i - N;
  }
  return Math.round(numerator / denominator);
};

const solution = (input) => {
  return input.map((testcase) => {
    const [N, M] = testcase.split(" ");
    return combination(M, N);
  });
};

console.log(solution(input).join("\n"));
