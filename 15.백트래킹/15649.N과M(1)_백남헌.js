const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [lastNumber, requiredNumber] = input.split(" ");
const numberList = [];
const visited = Array(requiredNumber).fill(false);
for (let i = 1; i < +lastNumber + 1; i++) {
  numberList.push(i);
}
const backtracking = (answer, defaultValue, depth) => {
  if (depth === +requiredNumber) {
    answer.push([...defaultValue]);
    return;
  }
  for (let i = 0; i < numberList.length; i++) {
    if (visited[i]) continue;
    defaultValue[depth] = numberList[i];
    visited[i] = true;
    backtracking(answer, defaultValue, depth + 1);
    visited[i] = false;
  }
};
const getCombination = () => {
  const answer = [];
  const defaultValue = Array(requiredNumber).fill(0);
  backtracking(answer, defaultValue, 0);
  return answer.map((element) => element.join(" ")).join("\n");
};
console.log(getCombination());
