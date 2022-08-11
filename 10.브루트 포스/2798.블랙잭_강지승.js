const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

function solution() {
  const [N, M] = input[0];
  const cards = input[1];
  let answer = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        answer = answer < sum && sum <= M ? sum : answer;
      }
    }
  }
  console.log(answer);
}

solution();
