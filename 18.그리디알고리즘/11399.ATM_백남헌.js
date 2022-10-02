const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const graph = arr[0]
  .split(" ")
  .map((str) => +str)
  .sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < graph.length; i++) {
  answer += graph[i] * (+n - i);
}
console.log(answer);
