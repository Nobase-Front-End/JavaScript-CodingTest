let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input.pop();

const solution = (input) => {
  const result = input.map((str) => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "[" || str[i] === "(") stack.push(str[i]);
      else if (str[i] === "]" && stack.pop() !== "[") {
        return "no";
      } else if (str[i] === ")" && stack.pop() !== "(") {
        return "no";
      }
    }
    return stack.length === 0 ? "yes" : "no";
  });
  return result;
};

console.log(solution(input).join("\n"));
