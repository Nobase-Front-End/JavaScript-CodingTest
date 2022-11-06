const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input.slice(1, N + 1).map((row) => row.split(" ").map(Number));
const [, K] = input[N + 1].split(" ").map(Number);
const B = input.slice(N + 2).map((row) => row.split(" ").map(Number));

const merged = [];

for (let row = 0; row < A.length; row++) {
  merged[row] = [];
  for (let col = 0; col < B[0].length; col++) {
    const mergedVal = A[row].reduce(
      (acc, curr, idx) => acc + curr * B[idx][col],
      0
    );
    merged[row].push(mergedVal);
  }
  merged[row] = merged[row].join(" ");
}

console.log(merged.join("\n"));
