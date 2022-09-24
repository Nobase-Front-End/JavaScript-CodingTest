let fs = require("fs");
let N = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const solution = (N) => {
  let answer = 0;
  const queen = [];
  const diagonal_diff = [];
  const diagonal_sum = [];
  function backtracking(queen, diagonal_sum, diagonal_diff) {
    if (queen.length === +N) {
      answer++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (
        queen.includes(i) ||
        diagonal_sum.includes(queen.length + i) ||
        diagonal_diff.includes(queen.length - i)
      )
        continue;
      queen.push(i);
      const len = queen.length;
      const sum = len - 1 + i;
      const diff = len - 1 - i;
      diagonal_sum.push(sum);
      diagonal_diff.push(diff);
      backtracking(queen, diagonal_sum, diagonal_diff);
      diagonal_sum.pop(sum);
      diagonal_diff.pop(diff);
      queen.pop(i);
    }
  }
  backtracking(queen, diagonal_sum, diagonal_diff);
  return answer;
};

console.log(solution(N));
