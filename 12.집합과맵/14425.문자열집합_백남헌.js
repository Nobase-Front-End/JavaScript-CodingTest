const [nm, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map((element) => Number(element));
const nList = arr.slice(0, n);
let count = 0;
const map = {};
nList.map((element) => (map[element] = 1));
const mList = arr.slice(n);

for (let i = 0; i < mList.length; i++) {
  if (map[mList[i]] === 1) {
    count++;
  }
}
console.log(count);
