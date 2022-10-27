const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function solution() {
  const [N, K] = input.map((n) => +n);
  const result = [];

  const people = Array.from({ length: N }, (_, i) => i + 1);

  while (people.length !== 0) {
    for (let i = 0; i < K - 1; i++) {
      people.push(people.shift());
    }
    result.push(people.shift());
  }
  console.log("<" + result.join(", ") + ">");
}
solution();
