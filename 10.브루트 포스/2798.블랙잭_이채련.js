const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

const firstLine = inputs[0].split(" ");
const secondLine = inputs[1].split(" ").map((el) => parseInt(el));

const N = parseInt(firstLine[0]);
const M = parseInt(firstLine[1]);

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i == j || i == k || j == k) {
        continue;
      }
      const sum = secondLine[i] + secondLine[j] + secondLine[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
      if (max == M) {
        break;
      }
    }
  }
}

console.log(max);
