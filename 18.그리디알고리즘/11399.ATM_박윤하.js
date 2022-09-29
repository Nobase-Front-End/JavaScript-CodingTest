let fs = require("fs");
let [, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");

input = input[0].split(" ");

const solution = (input) => {
  input.sort((x, y) => x - y);
  return input.reduce((acc, x, idx) => acc + x * (input.length - idx), 0);
};
console.log(solution(input));
