const [N, ...times] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

const SORTED_TIMES = times.sort((a, b) => a - b);
let sumTime = 0;
let minTime = 0;

SORTED_TIMES.forEach((time) => {
  minTime += time;
  sumTime += minTime;
});

console.log(sumTime);
