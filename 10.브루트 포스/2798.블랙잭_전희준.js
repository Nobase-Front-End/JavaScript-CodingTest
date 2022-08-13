const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  // input 값 가져오기
  const NM = input
    .shift()
    .split(" ")
    .map((num) => Number(num));
  const N = NM.shift();
  const M = NM.shift();
  const cards = input
    .shift()
    .split(" ")
    .map((num) => Number(num));
  // start
  let result = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum <= M) {
          result = Math.max(result, sum);
        }
      }
    }
  }
  console.log(result);
}

solution();
