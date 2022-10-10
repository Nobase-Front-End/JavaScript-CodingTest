const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);
const N = input[0];
const DISTANCES = input.slice(1, N);
const PRICES = input.slice(N);

// // [최초 풀이]
// // - 서브태스크 1: 통과, 서브태스크 2: 통과, 서브태스크 3: 시간 초과
// function solution(N, DISTANCES, PRICES) {
//   // 가장 오른쪽 도시(도착지점)의 리터당 가격은 의미가 없으므로 제거
//   PRICES.pop();

//   // 가장 왼쪽 도시(출발지점)에서 가장 오른쪽 도시(도착지점)까지 이동하는 최소 비용을 저장할 변수
//   let totalCost = 0;

//   while (DISTANCES.length) {
//     // 리터당 가격이 가장 저렴한 주유소를 찾고, 해당 도시에서 가장 오른쪽 도시(도착지점)까지 가는 데 필요한 기름 다 넣기
//     const minCost = Math.min(...PRICES);
//     const minIdx = PRICES.indexOf(minCost);
//     totalCost +=
//       minCost *
//       DISTANCES.splice(minIdx).reduce((accDistance, curDistance) => accDistance + curDistance, 0);
//     PRICES.splice(minIdx);
//   }

//   return totalCost;
// }

// [두 번째 풀이]
// - splice는 성능이 좋지 않으므로 사용을 지양하고, 서브태스크 3을 통과하기 위해 BigInt 사용
// - 서브태스크 1: 통과, 서브태스크 2: 통과, 서브태스크 3: 통과
function solution2(N, DISTANCES, PRICES) {
  // 아이디어: 가장 왼쪽 도시부터 가장 오른쪽 도시 직전의 도시까지 각 도시마다
  // 현재까지의 최소 리터당 가격에 바로 다음 도시까지의 거리를 곱한 값 누적

  // 현재까지의 최소 리터당 가격을 저장할 변수
  let currentMinCost = BigInt(PRICES[0] + 1);

  // 가장 왼쪽 도시(출발지점)에서 가장 오른쪽 도시(도착지점)까지 이동하는 최소 비용을 저장할 변수
  let totalCost = 0;

  // 가장 오른쪽 도시(도착지점)의 리터당 가격은 의미가 없으므로 N이 아닌 N-1 전까지만 순회
  for (i = 0; i < N - 1; i++) {
    // 만약 현재 도시의 리터당 가격이 최소 리터당 가격보다 낮으면 갱신
    if (BigInt(PRICES[i]) < currentMinCost) currentMinCost = BigInt(PRICES[i]);
    // 현재까지의 최소 리터당 가격에 바로 다음 도시까지의 거리를 곱한 값을 누적해서 더해줌
    totalCost = BigInt(totalCost) + BigInt(currentMinCost) * BigInt(DISTANCES[i]);
  }

  return totalCost;
}

console.log(solution2(N, DISTANCES, PRICES).toString());
