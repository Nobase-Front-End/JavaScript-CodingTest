let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const N = input.shift();

function solution(N, input) {
  // 오름차순 정렬
  input.sort((x, y) => x - y);
  console.log(input);

  // 산술 평균 = 총합 / N (반올림)
  const mean = Math.round(input.reduce((sum, curr) => +sum + +curr, 0) / N);

  // 중앙값 = 가운데 값
  const medianIdx = Math.floor(N / 2);
  const median = input[medianIdx];

  // 최빈값
  const count = Array(N); // input의 빈도수를 세기 위한 배열
  input.reduce((prev, curr, idx) => {
    count[idx] = prev === curr ? count[idx - 1] + 1 : 1; // 이전값과 현재값이 같은 경우 1개씩 증가
    return curr;
  }, null);
  const maxCount = Math.max(...count); // count의 최댓값
  const maxIdx1 = count.indexOf(maxCount); // maxCount의 인덱스1
  const maxIdx2 = count.indexOf(maxCount, maxIdx1 + 1); // maxCount의 인덱스2
  const mode = maxIdx2 === -1 ? input[maxIdx1] : input[maxIdx2];
  // 인덱스2가 -1인 경우(최빈값이 1개인 경우) input의 인덱스1번째 값
  // 인덱스2가 -1이 아닌 경우(최빈값이 2개 이상인 경우) input의 인덱스2번째 값

  // 범위 = 최댓값 - 최솟값
  const range = input[N - 1] - input[0];

  return [mean, median, mode, range].join("\n");
}

console.log(solution(N, input));
