let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const N = input.shift();
let S = input.map((val) => val.split(" "));

function solution(N, S) {
  // 팀 나누기
  const teams = [];

  function backtracking(seq, level) {
    if (seq.length === N / 2) {
      teams.push(seq);
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (seq.length !== 0 && seq[seq.length - 1] >= i) continue;
      backtracking([...seq, i], ++level);
    }
  }

  backtracking([], 0);

  // 능력치 계산
  function calculateStat(team) {
    let stat = 0;
    for (let i = 0; i < team.length - 1; i++) {
      for (let j = i + 1; j < team.length; j++) {
        const idx1 = team[i] - 1;
        const idx2 = team[j] - 1;
        stat += +S[idx1][idx2] + +S[idx2][idx1];
      }
    }
    return stat;
  }

  let min = Infinity;
  for (let i = 0; i < teams.length / 2; i++) {
    const diffStat = Math.abs(
      calculateStat(teams[i]) - calculateStat(teams[teams.length - i - 1])
    );
    min = Math.min(diffStat, min);
  }

  return min;
}

console.log(solution(N, S));
