const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function solution() {
  [num1, num2] = input.map((n) => +n);
  function euclid(num1, num2) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
  }
  console.log(euclid(num1, num2).join("\n"));
}
solution();
