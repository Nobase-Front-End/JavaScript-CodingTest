const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
function createTest(str) {
  return str.split(" ").map((element) => Number(element));
}

function lcm(num1, num2) {
  const gcd = (n1, n2) => (n1 % n2 === 0 ? n2 : gcd(n2, n1 % n2));
  return (num1 * num2) / gcd(num1, num2);
}
const testList = arr.map((element) => createTest(element));
const answer = testList.reduce((acc, cur) => acc + "\n" + lcm(...cur), "");
testList.forEach((element) => console.log(lcm(...element)));
