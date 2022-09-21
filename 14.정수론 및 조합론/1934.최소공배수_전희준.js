const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";
  const nums = input.slice(1).map((tc) => tc.split(" ").map((n) => +n));
  function euclidLcm(num1, num2) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return lcm(num1, num2);
  }
  nums.map((num) => {
    [A, B] = num;
    result += `${euclidLcm(A, B)}\n`;
  });
  console.log(result);
}
solution();
