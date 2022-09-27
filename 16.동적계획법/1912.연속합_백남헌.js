const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
const graph = arr.map((string) => +string);
let max = Number.MIN_SAFE_INTEGER;
let calc = 0;
for (let i = 0; i < graph.length; i++) {
  max = max > graph[i] ? max : graph[i];
  calc = calc > 0 ? calc + graph[i] : graph[i];
  max = max > calc ? max : calc;
}
console.log(max);
