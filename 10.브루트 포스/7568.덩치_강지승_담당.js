const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  const N = +input[0][0];

  const people = [];
  // 사람 수 만큼 1로 초기화
  const answer = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N; i++) {
    people.push(input[1 + i].map(Number));
  }

  // i번째 사람보다 덩치가 큰 사람의 개수 구하기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 자신(i)을 제외하고
      if (i === j) continue;
      // 자신(i)보다 덩치가 큰 사람(j)을 발견하면 카운트 수를 늘린다.
      if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        answer[i]++;
      }
    }
  }
  console.log(answer.join(" "));
}

solution();
