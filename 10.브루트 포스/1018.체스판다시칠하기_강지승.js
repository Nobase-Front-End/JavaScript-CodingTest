const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  let answer = 64;
  const [N, M] = input[0].map(Number);

  const chess = [];
  for (let i = 0; i < N; i++) {
    chess.push(input[i + 1][0]);
  }
  const wb = "WBWBWBWB";
  const bw = "BWBWBWBW";
  const case1 = [];
  const case2 = [];

  for (let i = 0; i < 4; i++) {
    case1.push(wb);
    case1.push(bw);
    case2.push(bw);
    case2.push(wb);
  }

  function check(a, b) {
    let answer1 = 0;
    let answer2 = 0;
    for (let i = a; i < a + 8; i++) {
      for (let j = b; j < b + 8; j++) {
        if (chess[i][j] !== case1[i - a][j - b]) answer1++;
        if (chess[i][j] !== case2[i - a][j - b]) answer2++;
      }
    }
    return answer1 > answer2 ? answer2 : answer1;
  }

  for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
      const change = check(i, j);
      answer = answer < change ? answer : change;
    }
  }

  console.log(answer);
}

solution();
