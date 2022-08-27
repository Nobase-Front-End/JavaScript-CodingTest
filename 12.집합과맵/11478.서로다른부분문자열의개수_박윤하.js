let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution(input) {
  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      set.add(input.substring(i, j + 1));
    }
  }
  return set.size;
}

console.log(solution(input));
