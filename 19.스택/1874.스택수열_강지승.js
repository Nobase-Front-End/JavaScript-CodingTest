const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  let answer = [];
  const stack = [];
  let num = 1;

  for (let i = 1; i < n + 1; i++) {
    let current = +input[i];
    while (num <= current) {
      stack.push(num);
      answer.push("+");
      num += 1;
    }
    if (stack.at(-1) === current) {
      stack.pop();
      answer.push("-");
    } else {
      answer = "NO";
      break;
    }
  }

  if (answer === "NO") console.log(answer);
  else console.log(answer.join("\n"));
}

solution();
