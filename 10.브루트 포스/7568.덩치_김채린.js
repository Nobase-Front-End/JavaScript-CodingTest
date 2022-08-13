const [N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/);

const SIZE = ARR.map((e) => e.split(" ")).map((e) => e.map((ie) => +ie));

function solution(N, SIZE) {
  // 각 사람의 순위를 저장할 배열: 모든 사람의 순위 초기값을 1로 설정
  const RANK = Array.from({ length: N }, (_) => 1);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      // 나보다 키도 크고 몸무게도 많이 나가는 사람이 있으면 나의 순위값 1 증가
      if (SIZE[i][0] < SIZE[j][0] && SIZE[i][1] < SIZE[j][1]) RANK[i]++;
    }
  }
  return RANK.join(" ");
}

console.log(solution(N, SIZE));
