const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const numbers = input
  .match(/[0-9]*/g)
  .filter((e) => e !== "")
  .map((str) => +str);
const operators = input.match(/[+-]*/g).filter((e) => e !== "");
let now = 1;
let sum = numbers[0];
for (let i = 0; i < operators.length; i++) {
  if (operators[i] === "-") now = -1;
  if (now === -1) {
    sum -= numbers[i + 1];
  } else sum += numbers[i + 1];
}

console.log(sum);
