const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  const members = [];
  input.forEach((x) => members.push(x.split(" ")));
  members.sort((a, b) => +a[0] - +b[0]);

  let result = "";
  members.forEach((x) => (result += `${x[0]} ${x[1]} \n`));
  console.log(result);
}
solution();
