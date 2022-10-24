const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let [N, K] = input[0].split(" ").map(Number);
  const money = Array.from({ length: N }, (_, i) => +input[i + 1]).sort((a, b) => b - a);
  let answer = 0;
  money.forEach((value) => {
    answer += Math.floor(K / value);
    K %= value;
  });
  console.log(answer);
}
solution();
