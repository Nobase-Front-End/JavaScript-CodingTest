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
    // 종료조건: 길이가 M인 경우 answer에 push
    if (level === +M) {
      answer.push(seq);
      return;
    }

    for (let i = 1; i <= N; i++) {
      // 1부터 N까지 중 seq에 포함되어 있는 수는 건너뛰고
      if (seq.includes(i)) continue;

      // seq에 포함되어 있지 않는 수는 seq에 공백과 함께 추가
      backtracking(level + 1, seq + `${i} `);
    }
  }

  backtracking(0, "");

  return answer.join("\n");
}

console.log(solution(N, M));
