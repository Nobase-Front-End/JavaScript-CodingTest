const [INPUT_N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +INPUT_N;
const COMMANDS = ARR.map((e) => e.split(" ").map((e) => (isNaN(+e) ? e : +e)));

function solution(N, COMMANDS) {
  // stack의 역할을 할 배열
  const stack = [];

  // 매번 console.log()로 출력값을 출력하면 시간초과가 나므로 answer에 저장해뒀다가 마지막에 한번에 출력
  const answer = [];

  for (let i = 0; i < N; i++) {
    const command = COMMANDS[i][0];

    switch (command) {
      case "push":
        stack.push(COMMANDS[i][1]);
        break;
      case "pop":
        if (stack.length) answer.push(stack.pop());
        else answer.push(-1);
        break;
      case "size":
        answer.push(stack.length);
        break;
      case "empty":
        answer.push(stack.length ? 0 : 1);
        break;
      case "top":
        answer.push(stack.length ? stack[stack.length - 1] : -1);
    }
  }

  return answer;
}

console.log(solution(N, COMMANDS).join("\n"));
