/*
 방문 배열을 만들어서 방문 했으면 contunue 안했으면 순열배열에 넣고 재귀 돌리기 
 제귀 종료 조건 : 길이가 M일때 종료 
 */

const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const answer = [];
const array = Array.from({ length: N }, (_, i) => i + 1);
const visited = Array.from({ length: N }, (v) => false);

const getPermutations = (arr, M, permutation) => {
  if (permutation.length === M) {
    answer.push(permutation.join(" "));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;

    permutation.push(array[i]);
    visited[i] = true;
    getPermutations(arr, M, permutation);
    permutation.pop();
    visited[i] = false;
  }
};
getPermutations(array, M, []);

console.log(answer.join("\n"));
