const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const str = input[0];
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      set.add(str.substring(i, i + j + 1));
    }
  }
  console.log(set.size);
}

solution();
