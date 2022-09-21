let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const N = +input[0];
const numseq = input[1].split(" ");
const opcount = input[2].split(" ");

function solution(N, numseq, opcount) {
  let max = -Infinity;
  let min = Infinity;
  const op = ["+", "-", "*", "/"];
  function backtracking(level, result) {
    if (level === N - 1) {
      max = Math.max(max, result);
      min = Math.min(min, result);
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (+opcount[i] === 0) continue;
      opcount[i]--;
      backtracking(level + 1, cal(result, numseq[level + 1], op[i]));
      opcount[i]++;
    }
  }

  backtracking(0, numseq[0]);

  return [max, min].join("\n");
}

function cal(a, b, op) {
  let result;
  switch (op) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "*":
      result = +a * +b;
      break;
    case "/":
      result =
        a * b < 0
          ? Math.floor(Math.abs(+a) / Math.abs(+b)) * -1
          : Math.floor(+a / +b);
  }
  return result;
}

console.log(solution(N, numseq, opcount));
