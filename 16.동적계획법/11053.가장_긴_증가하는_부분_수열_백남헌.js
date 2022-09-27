const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
const graph = arr.map((str) => +str);
const list = Array.from({ length: graph.length }).fill(1);
for (let i = 0; i < graph.length; i++) {
  const lengthList = [];
  for (let j = 0; j < i + 1; j++) {
    if (graph[j] < graph[i]) {
      lengthList.push(list[j]);
    }
  }
  list[i] = Math.max(...lengthList, 0) + 1;
}

console.log(Math.max(...list));
