const [n, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [standard, ...list] = arr.split(" ");

const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));
const numberedList = list.map((element) => {
  const gcd = getGcd(Number(standard), Number(element));
  return [standard / gcd, element / gcd];
});
numberedList.forEach((element) => console.log(element[0] + "/" + element[1]));
