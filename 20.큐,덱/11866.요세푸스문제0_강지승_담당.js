const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let [n, k] = input[0].split(" ").map(Number);
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [];
  k -= 1;

  let current = k;
  while (answer.length !== n) {
    answer.push(arr[current]);
    arr = arr.slice(0, current).concat(arr.slice(current + 1));
    current = current + k < arr.length ? current + k : (current + k) % arr.length;
  }
  console.log("<" + answer.join(", ") + ">");
}

solution();
