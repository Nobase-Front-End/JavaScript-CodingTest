const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);
const BOARD = input.splice(1);

function solution(N, M, BOARD) {
  // 맨 왼쪽 위 칸이 흰색인 체스판
  const WHITE_FIRST = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  // 맨 왼쪽 위 칸이 검은색인 체스판
  const BLACK_FIRST = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  // BOARD의 startRow행, startCol열 부터 8 * 8크기로 잘라냈을 때 다시 칠해야 하는 정사각형의 최솟값을 구하는 함수
  const cntDiff = function (startRow, startCol) {
    let whiteFirstDiff = 0;
    let blackFirstDiff = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (WHITE_FIRST[i][j] !== BOARD[startRow + i][startCol + j]) whiteFirstDiff++;
        if (BLACK_FIRST[i][j] !== BOARD[startRow + i][startCol + j]) blackFirstDiff++;
      }
    }
    return Math.min(whiteFirstDiff, blackFirstDiff);
  };

  // 다시 칠해야 하는 정사각형 개수의 최솟값을 저장할 변수
  let minDiff = N * M;

  // 브루트포스
  for (let row = 0; row <= N - 8; row++) {
    for (let col = 0; col <= M - 8; col++) {
      minDiff = Math.min(minDiff, cntDiff(row, col));
    }
  }

  return minDiff;
}

console.log(solution(N, M, BOARD));
