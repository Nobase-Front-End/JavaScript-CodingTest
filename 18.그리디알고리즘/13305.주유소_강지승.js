const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const dist = input[1].split(" ").map(BigInt);
  const price = input[2].split(" ").map(BigInt);

  let answer = 0n;
  let tmp = price[0];

  for (let i = 0; i < n - 1; i++) {
    answer += tmp * dist[i];
    if (tmp > price[i + 1]) {
      tmp = price[i + 1];
    }
  }
  console.log(answer.toString());
}

solution();
