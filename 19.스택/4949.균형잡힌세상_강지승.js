const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const answers = [];
  let i = 0;

  while (input[i] !== ".") {
    const stack = [];
    const arr = input[i++].split("");
    let answer = "yes";

    for (let j = 0; j < arr.length; j++) {
      if (!["(", ")", "[", "]"].includes(arr[j])) continue;

      if (arr[j] === "(" || arr[j] === "[") stack.push(arr[j]);
      else if (arr[j] === ")" || arr[j] === "]") {
        if (arr[j] === ")" && stack.at(-1) === "(") stack.pop();
        else if (arr[j] === "]" && stack.at(-1) === "[") stack.pop();
        else {
          answer = "no";
          break;
        }
      }
    }
    if (stack.length > 0) answer = "no";
    answers.push(answer);
  }

  console.log(answers.join("\n"));
}

solution();
