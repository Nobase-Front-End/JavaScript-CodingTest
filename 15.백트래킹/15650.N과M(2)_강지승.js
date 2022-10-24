const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  let answer = "";

  let check = [];

  function backtracking(k, s) {
    if (check.length === M) return (answer += `${check.join(" ")}\n`);

    for (let i = s; i <= N; i++) {
      check.push(i);
      backtracking(k + 1, i + 1);
      check.pop();
    }
  }

  backtracking(0, 1);
  console.log(answer.trim());
}

solution();
