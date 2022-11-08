const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function solution() {
  const [A, B, C] = input.map((n) => BigInt(n));

  function pow(a, b) {
    if (b === BigInt(0)) {
      return BigInt(1);
    }
    const temp = pow(a, BigInt(parseInt(b / BigInt(2))));
    return b % BigInt(2) === 0 ? (temp * temp * a) % C : (temp * temp) % C;
  }
  console.log(Number(pow(A, B)));
}
solution();
