const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const size = +input.shift();
  const buffer = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "0") buffer.shift();
    else if (input[i] === "-1") break;
    else {
      if (buffer[size - 1] !== undefined) continue;
      else buffer.push(input[i]);
    }
  }
  console.log(buffer.join(" "));
}
solution();
