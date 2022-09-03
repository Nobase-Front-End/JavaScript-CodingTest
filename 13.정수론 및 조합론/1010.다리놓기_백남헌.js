const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const list = arr.map((element) => element.split(" "));

const combination = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let m = BigInt(1);
  for (let i = max; i > max - min; i--) {
    m = m * BigInt(i);
  }
  for (let j = 1; j < min + 1; j++) {
    m = m / BigInt(j);
  }
  return m;
};

list.forEach((element) => console.log(Number(combination(...element))));
