const [n, w, g] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const way = w.split(" ").map((str) => +str);
const gas = g.split(" ").map((str) => +str);
let min = Number.MAX_SAFE_INTEGER;
let sum = 0;
for (let i = 0; i < gas.length - 1; i++) {
  if (min > gas[i]) {
    min = gas[i];
  } else {
    gas[i] = min;
  }
  sum += gas[i] * way[i];
}
console.log(sum);
