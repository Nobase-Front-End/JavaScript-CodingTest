let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [N, M] = input[0].split(" ");

function solution(N, M) {
  const answer = [];
  function backtracking(level, seq) {
    if (level === +M) {
      answer.push(seq);
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (i <= seq.slice(-2, -1)) continue;
      backtracking(level + 1, seq + `${i} `);
    }
  }
  backtracking(0, "");
  return answer.join("\n");
}

console.log(solution(N, M));
