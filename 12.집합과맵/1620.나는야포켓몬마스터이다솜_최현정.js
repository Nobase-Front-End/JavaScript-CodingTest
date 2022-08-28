const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = n.split(/\ /);
const [datas, checks] = [arr.slice(0, N), arr.slice(N)];
const map = new Map(datas.map((data, idx) => [data, idx + 1]));
let answer = checks.map((check) => (check.match(/^[0-9]/) ? datas[check - 1] : map.get(check)));
console.log(answer.join("\n"));
