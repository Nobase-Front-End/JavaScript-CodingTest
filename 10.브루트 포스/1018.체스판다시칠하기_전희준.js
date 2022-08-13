const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const NM = input.shift().split(" ");
  const N = Number(NM.shift());
  const M = Number(NM.shift());
  const result = [];

  // 만들려는 최종 whiteBoard
  const whiteBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  // 만들려는 최종 blackBoard
  const blackBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  // whiteBoard 기준 다시 칠해야 하는 정사각형의 개수
  function whiteBoardCheck(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (input[x + i][y + j] !== whiteBoard[i][j]) count++;
      }
    }
    return count;
  }

  // blackBoard 기준 다시 칠해야 하는 정사각형의 개수
  function blackBoardCheck(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (input[x + i][y + j] !== blackBoard[i][j]) count++;
      }
    }
    return count;
  }

  // whiteBoard, blackBoard 기준 다시 칠해야 하는 정사각형의 개수를 result 배열에 모두 담는다
  for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
      result.push(whiteBoardCheck(i, j));
      result.push(blackBoardCheck(i, j));
    }
  }

  // result 배열 안에 있는 최소값을 출력한다
  console.log(Math.min(...result));
}

solution();
