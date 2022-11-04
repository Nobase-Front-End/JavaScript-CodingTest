const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N] = input[0].split(" ").map((e) => +e);
const targets = input[1].split(" ").map((e) => +e);

let answer = 0;
let deque = Array.from({ length: N }, (_, idx) => idx + 1);

targets.forEach((target) => {
  const idx = deque.indexOf(target);
  const prevs = deque.slice(0, idx);
  const nexts = deque.slice(idx + 1);
  console.log(prevs, nexts);
  deque = [...nexts, ...prevs];
  answer += Math.min(prevs.length, nexts.length + 1);
});

console.log(answer);
