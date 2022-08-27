const [NM, arr1, arr2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const a1 = arr1.split(" ");
const a2 = arr2.split(" ");

function getDiffSet(arr1, arr2) {
  const map = new Map();

  arr1.forEach((v) => map.set(v, 0));
  return arr2.filter((v) => !map.has(v)).length;
}

console.log(getDiffSet(a1, a2) + getDiffSet(a2, a1));
