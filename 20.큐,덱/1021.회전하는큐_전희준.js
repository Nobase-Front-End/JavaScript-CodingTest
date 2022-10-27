const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = 0;
  // prettier-ignore
  const [N, M] = input.shift().split(" ").map((n) => +n);
  // prettier-ignore
  const list = input.shift().split(" ").map((n) => +n);
  const numList = Array.from({ length: N }, (_, i) => i + 1);

  for (let i = 0; i < list.length; i++) {
    let count = 0;
    const numIdx = numList.indexOf(list[i]);
    if (numList.length / 2 < numIdx) {
      while (count !== numList.length - numIdx) {
        numList.unshift(numList.pop());
        count++;
      }
    } else {
      while (count !== numIdx) {
        numList.push(numList.shift());
        count++;
      }
    }
    numList.shift();
    result += count;
  }

  console.log(result);
}

solution();
