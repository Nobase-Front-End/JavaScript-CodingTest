const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [A, B, C] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const modular = (num) => {
  if (num === BigInt(1)) return A % C;
  if (num % BigInt(2) === BigInt(0)) {
    return modular(num / BigInt(2)) ** BigInt(2) % C;
  } else {
    return (modular((num - BigInt(1)) / BigInt(2)) ** BigInt(2) * A) % C;
  }
};

console.log(Number(modular(B)));
