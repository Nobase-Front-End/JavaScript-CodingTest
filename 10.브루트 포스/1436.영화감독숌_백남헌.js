const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution(n) {
  const list = [];
  let count = 0;
  while (list.length <= n) {
    count++;
    if ((count + "").includes("666")) {
      list.push(count);
    }
  }
  console.log(list[n - 1]);
}
solution(n);
