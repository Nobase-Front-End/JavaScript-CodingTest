let fs = require("fs");
let [N, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input = input.map((str) => {
  const [start, end] = str.split(" ");
  return [+start, +end];
});

// 회의 끝나는 시간을 기준으로 오름차순으로 정렬하고 끝나는 시간이 같은 경우 시작 시간을 기준으로 정렬한다.
input.sort((x, y) => (x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]));

const solution = (input) => {
  let answer = 1;

  input.reduce((prev, curr) => {
    // 이전 회의(prev)의 끝나는 시간보다 다음 회의(curr)의 시작 시간이 늦는 경우(회의가 가능한 경우)
    // 회의 개수(answer)를 1개 추가하고
    // 현재 회의(curr) 시간을 반환해준다. (curr->prev)
    // 그렇지 않은 경우 이전 회의(prev) 시간을 반환해준다.
    if (curr[0] >= prev[1]) {
      answer += 1;
      return curr;
    } else {
      return prev;
    }
  });

  return answer;
};

console.log(solution(input));
