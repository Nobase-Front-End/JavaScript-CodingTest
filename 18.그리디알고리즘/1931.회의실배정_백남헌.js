const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const info = {
  count: 0,
  last: 0,
};

const graph = arr
  .map((element) => element.split(" ").map((str) => +str))
  .sort((a, b) => a[0] - b[0])
  .sort((a, b) => a[1] - b[1]);
for (let i = 0; i < graph.length; i += 1) {
  if (info.last <= graph[i][0]) {
    info.count += 1;
    info.last = graph[i][1];
  }
}
console.log(info.count);
