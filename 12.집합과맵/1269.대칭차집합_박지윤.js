const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const arrA = new Set(input[1].split(" "));
const arrB = new Set(input[2].split(" "));

console.log(arrA.difference(arrB).size + arrB.difference(arrA).size);
