const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const k = +input[0];
  const answers = [];

  for (let i = 1; i < k + 1; i++) {
    const stack = [];
    const arr = input[i].split("");
    let answer = "YES";

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "(") stack.push(arr[j]);
      else {
        if (stack.at(-1) === "(") stack.pop();
        else {
          answer = "NO";
          break;
        }
      }
    }
    if (stack.length > 0) answer = "NO";

    answers.push(answer);
  }
  console.log(answers.join("\n"));
}

solution();
