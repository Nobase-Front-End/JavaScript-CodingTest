let fs = require("fs");
const [N, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const solution = (input) => {
  const result = input.map((ps) => {
    const stack = [];
    for (let i = 0; i < ps.length; i++) {
      if (ps[i] === "(") stack.push(ps[i]);
      else {
        const pop = stack.pop();
        if (!pop) return "NO";
      }
    }
    if (stack.length !== 0) return "NO";
    else return "YES";
  });
  return result;
};

console.log(solution(input));
