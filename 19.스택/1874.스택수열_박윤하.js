let fs = require("fs");
const [N, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const solution = (input) => {
  const result = [];
  const stack = [];
  let lastpop = null;
  for (let i = 0; i < N; i++) {
    if (stack[stack.length - 1] == input[i]) {
      lastpop = Math.max(stack.pop(), lastpop);
      result.push("-");
    } else {
      for (let j = (lastpop ?? 0) + 1; j <= input[i]; j++) {
        stack.push(j);
        result.push("+");
      }
      if (stack[stack.length - 1] != input[i]) return "NO";
      lastpop = Math.max(stack.pop(), lastpop);
      result.push("-");
    }
  }
  return result.join("\n");
};

console.log(solution(input));
