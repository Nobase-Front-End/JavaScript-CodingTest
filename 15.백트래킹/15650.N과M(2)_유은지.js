/*
 제귀 종료 조건 : 길이가 M일때 종료 + 이미 들어가있는 조합 배열마지막 요소가 새로 들어갈 요소보다 크면 종료
 */

const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const answer = [];
const array = Array.from({ length: N }, (_, i) => i + 1);
const visited = Array.from({ length: N }, () => false);

const getCombinations = (arr, M, combination) => {
  if (combination.length === M) {
    answer.push(combination.join(" "));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] || array[i] < combination[combination.length - 1]) continue;

    combination.push(array[i]);
    visited[i] = true;
    getCombinations(arr, M, combination);
    combination.pop();
    visited[i] = false;
  }
};
getCombinations(array, M, []);

console.log(answer.join("\n"));
