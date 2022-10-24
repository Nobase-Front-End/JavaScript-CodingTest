const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

function solution() {
  const stack = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== 0) stack.push(input[i]);
    else stack.pop();
  }

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
}
solution();
