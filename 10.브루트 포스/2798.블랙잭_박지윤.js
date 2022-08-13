const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let NM = input[0].split(" ").map((item) => +item);
let N = NM[0];
let M = NM[1];

let cardNum = input[1].split(" ").map((item) => +item);

solution(N, M, cardNum);

function solution(N, M, cardNum) {
  let answer = 0;
  // 1번 카드
  for (let i = 0; i < N; i++) {
    // 2번 카드
    for (let j = i + 1; j < N; j++) {
      // 3번 카드
      for (let k = j + 1; k < N; k++) {
        // 3장 뽑아서 더하기
        sum = cardNum[i] + cardNum[j] + cardNum[k];
        // sum이 M보다 작거나 같을 경우
        // answer와 비교하기
        if (sum <= M) {
          answer = Math.max(sum, answer);
        }
      }
    }
  }
  console.log(answer);
}