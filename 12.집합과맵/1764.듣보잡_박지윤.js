const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

Set.prototype.intersection = function (set) {
  return [...this].filter((v) => set.has(v));
};

const [N, M] = input[0].split(" ").map((n) => +n);
const neverHeard = new Set(input.slice(1, N + 1));
const neverSeen = new Set(input.slice(N + 1));
const who = neverHeard.intersection(neverSeen);

who.sort();
console.log(who.length);
console.log([...who].join("\n"));
