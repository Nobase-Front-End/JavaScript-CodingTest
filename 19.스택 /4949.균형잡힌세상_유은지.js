let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var stack = [];
const open = ["(", "["];
const closed = [")", "]"];
var answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] == ".") break;
  stack = [];
  let check = true;
  for (let j = 0; j < input[i].length; j++) {
    if (open.includes(input[i][j])) {
      stack.push(input[i][j]);
    } else if (closed.includes(input[i][j])) {
      if (stack.length == 0) {
        check = false;
        break;
      } else if (stack.pop() != open[closed.indexOf(input[i][j])]) {
        check = false;
        break;
      }
    }
  }

  if (check && stack.length === 0) {
    answer.push("yes");
  } else {
    answer.push("no");
  }
}
console.log(answer.join("\n"));
