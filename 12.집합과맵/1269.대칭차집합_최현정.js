const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/);

const [, data1, data2] = input;
const [A, B] = [new Set(data1.split(/\ /)), new Set(data2.split(/\ /))];
let [diff1, diff2] = [[...A].filter((a) => !B.has(a)), [...B].filter((b) => !A.has(b))];
console.log([...diff1, ...diff2].length);
