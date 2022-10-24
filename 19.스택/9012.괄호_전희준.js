const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";
  for (let i = 1; i < input.length; i++) {
    result += `${isVPS(input[i])}\n`;
  }

  console.log(result);
}

function isVPS(ps) {
  const stack = [];

  for (let i = 0; i < ps.length; i++) {
    if (ps[i] === "(") stack.push(ps[i]);
    else {
      if (stack.length > 0) stack.pop();
      else return "NO";
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
solution();
