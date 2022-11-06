const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const ans = [];

outer: for (let i = 0; i < input.length; i++) {
  // 테스트케이스마다 새로운 스택 생성
  const stack = [];
  const pStr = input[i].trim();
  for (let j = 0; j < pStr.length; j++) {
    // 새로 추가할 문자열이 닫는 괄호일 때, 짝이 맞지 않으면 'NO'를 추가하고 해당 문자열 검사 종료
    if (pStr[j] === ")") {
      if (stack.at(-1) !== "(") {
        ans.push("NO");
        continue outer;
      } else {
        stack.pop();
      }
    } else {
      stack.push("(");
    }
  }
  // 검사가 끝나고 스택이 모두 비워진 경우 'YES' 아니면 'NO'를 추가
  ans.push(stack.length === 0 ? "YES" : "NO");
}

console.log(ans.join("\n"));
