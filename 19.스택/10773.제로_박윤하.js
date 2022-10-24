let fs = require("fs");
const [N, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((str) => +str);
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const solution = (input) => {
  const stack = [];
  input.forEach((element) => {
    if (element === 0) stack.pop();
    else stack.push(element);
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution(input));
