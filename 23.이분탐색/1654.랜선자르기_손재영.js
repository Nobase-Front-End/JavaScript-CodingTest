const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [kn, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [K, N] = kn.split(" ").map(Number);
const lines = input.map(Number);

const getNumberOfLANs = (len) =>
  lines.reduce((acc, curr) => acc + Math.floor(curr / len), 0);

let left = 0;
let right = Math.max(...lines);
let maxLength = Math.floor((left + right) / 2);

while (left <= right) {
  const numberOfLANs = getNumberOfLANs(maxLength);
  if (numberOfLANs < N) {
    right = maxLength - 1;
  } else {
    left = maxLength + 1;
  }
  maxLength = Math.floor((left + right) / 2);
}

console.log(maxLength);
