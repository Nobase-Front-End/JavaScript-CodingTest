const [INPUT_N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 두 괄호가 짝이 맞는지 확인하는 함수
function isMatch(char1, char2) {
  return char1 === "(" && char2 === ")" ? true : false;
}

// 주어진 괄호 문자열이 VPS인지 판단하는 함수
function isVPS(str) {
  // VPS 판단을 위해 사용할 stack
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    // 스택의 가장 위 괄호와 현재 확인중인 괄호가 짝이 맞으면 스택에서 가장 위 괄호 제거
    if (isMatch(stack[stack.length - 1], str[i])) stack.pop();
    // 그렇지 않으면 스택에 현재 확인중인 괄호 추가
    else stack.push(str[i]);
  }
  // 문자열을 모두 확인한 후 스택이 비어있으면 VPS, 그렇지 않으면 VPS 아님
  return stack.length === 0 ? true : false;
}

function solution(ARR) {
  return ARR.map((str) => (isVPS(str) ? "YES" : "NO"));
}

console.log(solution(ARR).join("\n"));
