let fs = require("fs");
const [N, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((e) => e.split(" "));
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const solution = (input) => {
  const stack = [];

  // 각 명령어별 하는 동작
  const execute = (instruction, args) => {
    if (instruction === "push") {
      stack.push(args);
      return;
    }
    if (instruction === "pop") {
      return stack.pop() ?? -1;
    }
    if (instruction === "size") {
      return stack.length;
    }
    if (instruction === "empty") {
      return stack.length === 0 ? 1 : 0;
    }
    if (instruction === "top") {
      return stack[stack.length - 1] ?? -1;
    }
  };

  // instruction[0]: 명령어(push, pop, size, empty, top)
  // instruction[1]: 인수
  const answer = input
    .map((instruction) => execute(instruction[0], instruction[1]))
    .filter((x) => x !== undefined);

  return answer.join("\n");
};

console.log(solution(input));
