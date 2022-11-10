const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [N, C] = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const homes = input.map((n) => +n).sort((a, b) => a - b);

  let min = 1;
  let max = homes[N - 1] - homes[0];
  let result = 0;

  while (min <= max) {
    const mid = parseInt((min + max) / 2);
    let count = 1;
    let routerPoint = homes[0];

    for (let i = 1; i < homes.length; i++) {
      if (homes[i] - routerPoint >= mid) {
        count++;
        routerPoint = homes[i];
      }
    }

    if (count < C) max = mid - 1;
    else {
      result = mid;
      min = mid + 1;
    }
  }
  console.log(result);
}
solution();
