const [_, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let stack = [];

inputs.forEach((input) => {
  if (input === "0") stack.pop();
  else stack.push(+input);
});

console.log(stack.reduce((i, sum) => i + sum, 0));
