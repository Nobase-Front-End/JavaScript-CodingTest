const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const stack = [];
  const answer = [];

  for (let i = 1; i < n + 1; i++) {
    const command = input[i];
    if (command === "pop") {
      if (stack.length) {
        answer.push(stack.pop());
      } else {
        answer.push("-1");
      }
    } else if (command === "size") answer.push(stack.length);
    else if (command === "empty") answer.push(stack.length === 0 ? "1" : "0");
    else if (command === "top") answer.push(stack.length ? stack.at(-1) : "-1");
    else {
      const num = command.split(" ")[1];
      stack.push(num);
    }
  }

  console.log(answer.join("\n"));
}

solution();
