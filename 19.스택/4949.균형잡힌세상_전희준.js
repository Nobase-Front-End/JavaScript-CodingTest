const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") continue;
    isBalanced(input[i]) ? (result += "yes\n") : (result += "no\n");
  }

  console.log(result);
}

function isBalanced(sentence) {
  const stack = [];
  const openBracket = ["(", "["];
  const closeBracket = [")", "]"];

  for (let i = 0; i < sentence.length; i++) {
    if (openBracket.includes(sentence[i])) {
      stack.push(sentence[i]);
    } else if (closeBracket.includes(sentence[i])) {
      if (
        stack[stack.length - 1] !==
        openBracket[closeBracket.indexOf(sentence[i])]
      ) {
        return false;
      } else stack.pop();
    }
  }

  if (stack.length > 0) return false;
  return true;
}

solution();
