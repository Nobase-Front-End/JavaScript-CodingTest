const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [nc, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [N, C] = nc.split(" ").map(Number);
const positions = input.map(Number).sort((a, b) => a - b);

const isPossible = (dist) => {
  let count = 1;
  let prev = positions[0];
  for (let i = 1; i < N; i++) {
    const currDist = positions[i] - prev;
    if (currDist >= dist) {
      count += 1;
      prev = positions[i];
    }
  }
  return count >= C;
};

let left = 1;
let right = positions.at(-1) - positions[0];
let mid = Math.floor((left + right) / 2);

while (left <= right) {
  if (isPossible(mid)) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  mid = Math.floor((left + right) / 2);
}

console.log(mid);
