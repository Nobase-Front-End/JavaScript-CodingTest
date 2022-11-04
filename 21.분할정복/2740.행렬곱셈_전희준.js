const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const sizeA = input[0].split(" ").map((n) => +n);
  const matrixA = input
    .slice(1, 1 + sizeA[0])
    .map((row) => row.split(" ").map((n) => +n));
  // const sizeB = input[1 + sizeA[0]].split(" ").map((n) => +n);
  const matrixB = input
    .slice(2 + sizeA[0])
    .map((row) => row.split(" ").map((n) => +n));

  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    const value = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = matrixA[i]
        .map((el, idx) => el * matrixB[idx][j])
        .reduce((pre, cur) => pre + cur, 0);
      value.push(sum);
    }
    result.push(value);
  }

  console.log(result.map((row) => row.join(" ")).join("\n"));
}
solution();
