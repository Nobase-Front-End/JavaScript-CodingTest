const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const stack = [];

  let result = "";

  const stackFun = {
    push: (x) => {
      stack.push(x);
    },
    pop: () => {
      return stack.length === 0 ? -1 : stack.pop();
    },
    size: () => {
      return stack.length;
    },
    empty: () => {
      return stack.length === 0 ? 1 : 0;
    },
    top: () => {
      return stack.length !== 0 ? stack[stack.length - 1] : -1;
    },
  };

  for (let i = 1; i < input.length; i++) {
    const [cmd, num] = input[i].split(" ");

    if (cmd === "push") stackFun[cmd](+num);
    else result += `${stackFun[cmd]()}\n`;
  }
  console.log(result);
}

solution();
