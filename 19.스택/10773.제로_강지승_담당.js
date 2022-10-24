const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const k = +input[0];
  const stack = [];

  for (let i = 1; i < k + 1; i++) {
    const n = +input[i];
    if (n === 0) {
      stack.pop();
    } else {
      stack.push(n);
    }
  }
  console.log(stack.reduce((acc, prev) => acc + prev, 0));
}

solution();
