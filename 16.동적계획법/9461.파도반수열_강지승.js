const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const cases = input.slice(1).map(Number);

  const P = [1, 1, 1, 2, 2];
  const answer = [];

  cases.forEach((i) => {
    while (!P[i - 1]) {
      P[P.length] = P[P.length - 1] + P[P.length - 5];
    }
    answer.push(P[i - 1]);
  });

  console.log(answer.join(`\n`));
}
solution();
