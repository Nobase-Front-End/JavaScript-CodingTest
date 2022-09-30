const [N, K, ...COINS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

const solution = (N, K, COINS) => {
  // [접근 방법]
  // 'A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수'라는 조건 덕분에 가치가 큰 동전부터 고려하며 그리디로 풀 수 있음!
  // 만약 위와 같은 조건이 없고 동전의 가치가 50, 30이라면 120원을 만들기 위해 30원 4개가 필요! -> 그리디로 풀 수 없음!

  // 가치가 큰 동전부터 고려하기 위해 이미 오름차순으로 정렬되어있는 COINS 배열을 뒤집음
  const REVERSE_COINS = COINS.reverse();

  // 필요한 동전 개수를 저장할 변수
  let coinCnt = 0;
  REVERSE_COINS.forEach((coin) => {
    coinCnt += Math.floor(K / coin);
    K = K % coin;
  });

  return coinCnt;
};

console.log(solution(N, K, COINS));
