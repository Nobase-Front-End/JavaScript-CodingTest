const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const bracket = {
  "]": "[",
  ")": "(",
};
// yes no 결과를 담는 배열
let isBalanced = [];

// 각 input을 돌면서 괄호를 담는 스택배열
let stack = [];

// 종료를 나타내는 마지막 직전배열까지 순회
inputs.slice(0, inputs.length - 1).forEach((input) => {
  // 처음부터 닫힌 괄호가 나왔거나 틀린 짝의 괄호가 들어가면 해당 변수를 false 로 바꿔준다.
  // 해당변수가 없으면 괄호가 올바른짝을 이뤄서 스택이 모두 비워진 것인지, 애초에 잘못된 짝으로 스택에 push 가 된 적이 없었는지 구분하지 못한다.
  let isClose = true;
  // 매 턴마다 스택을 비워준다
  stack = [];

  // 괄호만 남기고 제거 (빈문자열처리)
  input = input.replace(/[^\(\)\[\]]/gi, "");

  // 괄호만 남은 input 순회
  for (let i of input) {
    // 닫힌괄호가 들어왔는데 스택의 마지막 원소와 짝이 맞지 않거나 스택이 비어있을때는 no를 push한다.
    if (i in bracket && (stack[stack.length - 1] !== bracket[i] || stack.length === 0)) {
      isBalanced.push("no");
      // 올바른 짝을 이루지 않았으니 변수에 false를 재할당해준다.
      isClose = false;
      // 이후 문자열은 검사할 필요가 없으니 break.
      break;
    }
    // 닫힌괄호가 들어왔는데 스택의 마지막 원소가 짝이 일치할 때 스택을 pop 해준다.
    else if (i in bracket && stack[stack.length - 1] === bracket[i]) {
      stack.pop();
    }
    // 그 외 열린괄호가 들어오면 스택에 push 한다.
    else stack.push(i);
  }

  // input을 모두 검사한 후 스택이 비어있고, isclose 가 true일 경우에만 yes를 push한다.
  if (stack.length === 0 && isClose) {
    isBalanced.push("yes");
  }
  // 스택이 비어있지 않지만, 닫힌괄호가 들어온 적이 없어 isclose 변수가 변경되지 않은 경우를 고려해야한다.
  else if (stack.length !== 0 && isClose) isBalanced.push("no");
});

console.log(isBalanced.join("\n"));

// 반례를 찾느라 오래걸린 경우....
// 소요시간 한시간
