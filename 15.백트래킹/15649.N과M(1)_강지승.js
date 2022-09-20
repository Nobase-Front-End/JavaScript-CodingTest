const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  let answer = "";

  let check = [];
  let visited = Array.from({ length: N + 1 }, () => false);

  function backtracking(k) {
    if (k === M) return (answer += `${check.join(" ")}\n`);

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        check.push(i);
        backtracking(k + 1);
        check.pop();
        visited[i] = false;
      }
    }
  }

  backtracking(0);
  console.log(answer.trim());
}

solution();
