const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    return this.stack.pop() ?? -1;
  }
  get size() {
    return this.stack.length;
  }
  get empty() {
    return this.stack.length === 0 ? 1 : 0;
  }
  get top() {
    return this.stack.at(-1) ?? -1;
  }
}

const stack = new Stack();
const ans = [];

input.forEach((command) => {
  const [operator, value] = command.trim().split(" ");
  switch (operator) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      ans.push(stack.pop() ?? -1);
      break;
    case "size":
      ans.push(stack.size);
      break;
    case "empty":
      ans.push(stack.empty);
      break;
    case "top":
      ans.push(stack.top);
      break;
    default:
      break;
  }
});

console.log(ans.join("\n"));
