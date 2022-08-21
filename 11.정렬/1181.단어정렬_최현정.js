const [N, ...datas] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let words = Array.from(new Set(datas)).sort();

words.sort((a, b) => a.length - b.length);

console.log(words.join("\n"));
