let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

let [_, ...triangle] = input;
triangle = triangle.map((row) => row.split(" "));

const solution = (triangle) => {
  const length = triangle.length;
  let answer = triangle.pop();
  for (let i = 0; i < length - 1; i++) {
    answer = triangle
      .pop()
      .map((element, idx) => +element + Math.max(answer[idx], answer[idx + 1]));
  }
  return answer[0];
};

console.log(solution(triangle));
