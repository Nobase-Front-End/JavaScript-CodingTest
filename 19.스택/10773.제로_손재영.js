const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

const stack = [];
input.forEach((num) => (num === 0 ? stack.pop() : stack.push(num)));
console.log(stack.reduce((acc, curr) => acc + curr, 0));
