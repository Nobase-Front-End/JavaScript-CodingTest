const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
input.pop();

const ans = [];
const pairs = {
  ")": "(",
  "]": "[",
};
outer: for (let i = 0; i < input.length; i++) {
  const stack = [];
  const pStr = input[i].trim();
  for (let j = 0; j < pStr.length; j++) {
    if (pStr[j] === "(" || pStr[j] === "[") {
      stack.push(pStr[j]);
    } else if (pStr[j] === ")" || pStr[j] === "]") {
      if (stack.at(-1) !== pairs[pStr[j]]) {
        ans.push("no");
        continue outer;
      } else {
        stack.pop();
      }
    }
  }

  ans.push(stack.length === 0 ? "yes" : "no");
}

console.log(ans.join("\n"));
