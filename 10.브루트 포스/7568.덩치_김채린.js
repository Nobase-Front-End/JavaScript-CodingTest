const [N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/);

const SIZE = ARR.map((e) => e.split(" ")).map((e) => e.map((ie) => +ie));

const RANK = Array.from({ length: N }, (_) => 1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (SIZE[i][0] < SIZE[j][0] && SIZE[i][1] < SIZE[j][1]) RANK[i]++;
  }
}

console.log(RANK.join(" "));
