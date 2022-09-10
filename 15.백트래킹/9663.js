/*
!! 퀸 : 가로, 세로, 대각선으로 이동가능
1. N X N이니깐 한 열에 하나의 퀸이 들어감 -> 열이나 행 고정
2. 하나의 열/ 행에 퀸이 1개씩 들어감 (근데 대각선이나 좌우에 퀸이 없어야 함)
*/
const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let answer = 0;

const board = new Array(N).fill(1).map((v) => new Array(N).fill(false));

function search(n, row) {
  if (n === row) {
    answer++;
    return;
  }

  for (let col = 0; col < N; col++) {
    if (!isValid(row, col, board)) continue;

    board[row][col] = true;
    search(n, row + 1);
    board[row][col] = false;
  }
}

function isValid(row, col, board) {
  for (let i = 0; i < row; i++) {
    // 상하 확인
    if (board[i][col]) return false;

    // 왼쪽 대각선 확인 \
    if (col - row + i >= 0 && board[i][col - row + i]) return false;

    // 오른쪽 대각선 확인 /
    if (row + col - i < board.length && board[i][row + col - i]) return false;
  }

  return true;
}

search(N, 0);

console.log(answer);
