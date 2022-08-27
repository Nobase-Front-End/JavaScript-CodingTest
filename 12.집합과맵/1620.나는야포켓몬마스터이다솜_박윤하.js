let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [N, _] = input.shift().split(" ");
const list = input.slice(0, N);
const quest = input.slice(N);

function solution(list, quest) {
  const objlist = {};
  list.forEach((element, idx) => {
    objlist[element] = idx + 1;
    objlist[idx + 1] = element;
  });
  const answer = quest.map((element) => objlist[element]);
  return answer;
}

console.log(solution(list, quest).join("\n"));
