const [_, ...orders] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let stack = [];
let answer = [];

orders.forEach((order) => {
  if (order.split(" ")[0] === "push") stack.push(+order.split(" ")[1]);
  if (order === "pop") stack.length === 0 ? answer.push(-1) : answer.push(+stack.pop());
  if (order === "size") answer.push(stack.length);
  if (order === "empty") stack.length === 0 ? answer.push(1) : answer.push(0);
  if (order === "top") stack.length === 0 ? answer.push(-1) : answer.push(+stack[stack.length - 1]);
});

console.log(answer.join("\n"));
