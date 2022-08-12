const [N, M, ...CARDS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((el) => parseInt(el));

// 우리는 '브루트포스' 유형의 문제라는 것을 알고 풀지만.. 실제 코딩테스트에서는 유형을 알려주지 않는다!
// -> 카드의 개수(N)가 최대 100개이므로 모든 경우의 수를 다 시도(브루트포스)해봐도 좋겠다고 생각

// 답(카드 세 장의 합 중 M을 넘지 않으면서 M에 최대한 가까운 값)을 저장할 변수
let maxSum = 0;
// 조합을 사용할 수도 있었겠지만, 카드 3장만 고르면 되므로 for문을 세 번 사용하기로 결정!
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      // 세 카드의 합을 SUM에 저장
      const SUM = CARDS[i] + CARDS[j] + CARDS[k];
      // 세 카드의 합이 M을 넘지 않으면서 이전에 나온 SUM의 최댓값보다 큰 경우 SUM의 최댓값을 갱신
      if (SUM <= M && SUM > maxSum) maxSum = SUM;
      // SUM이 M과 일치하는 경우, 더이상 다른 값들을 확인할 필요가 없으므로 정답을 출력하고 return을 이용해서 프로그램 실행 중단
      if (SUM === M) {
        console.log(maxSum);
        return;
      }
    }
  }
}

// 결과 출력
console.log(maxSum);
