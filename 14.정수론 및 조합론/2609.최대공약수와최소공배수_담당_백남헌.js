const firstLine = require("fs").readFileSync("/dev/stdin").toString().trim();
const [num1, num2] = firstLine.split(" ").map((element) => Number(element));
function gcdLcm(n1, n2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(n1, n2);
  console.log(gcd(n1, n2) + "\n" + lcm(n1, n2));
}

gcdLcm(num1, num2);
