const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map((n) => +n);
  const totalList = input.slice(1, 1 + N);
  const checkList = input.slice(1 + N);
  const nameList = totalList.map((name, idx) => [name, (idx + 1).toString()]);
  const numList = totalList.map((name, idx) => [(idx + 1).toString(), name]);
  const map = new Map([...nameList, ...numList]);
  let result = "";
  checkList.map((input) => (result += `${map.get(input)}\n`));
  console.log(result);
}
solution();
