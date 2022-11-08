const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

const isEnoughHeight = (height) => {
  let woodsLength = 0;
  for (let i = 0; i < N; i++) {
    woodsLength += Math.max(trees[i] - height, 0);
    if (woodsLength >= M) {
      break;
    }
  }
  return woodsLength >= M;
};

let left = 0;
let right = Math.max(...trees);
let maxHeight = Math.floor((left + right) / 2);

while (left <= right) {
  if (isEnoughHeight(maxHeight)) {
    left = maxHeight + 1;
  } else {
    right = maxHeight - 1;
  }
  maxHeight = Math.floor((left + right) / 2);
}

console.log(maxHeight);
