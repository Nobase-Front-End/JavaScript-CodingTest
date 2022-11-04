const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

const stack = [];
const ans = [];

let n = 1;
let targetIdx = 0;
while (n <= +N && targetIdx < +N) {
  const target = input[targetIdx];
  if (target === stack.at(-1)) {
    stack.pop();
    ans.push("-");
    targetIdx += 1;
  } else {
    stack.push(n);
    ans.push("+");
    n += 1;
  }
}
while (targetIdx < +N) {
  if (stack.at(-1) === input[targetIdx]) {
    stack.pop();
    ans.push("-");
    targetIdx += 1;
  } else {
    console.log("NO");
    return;
  }
}
console.log(ans.join("\n"));
