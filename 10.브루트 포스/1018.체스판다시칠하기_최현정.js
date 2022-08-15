const [MN, ...board] = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/);

const board1 = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];
const board2 = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

let [M, N] = MN.split(/\s/).map(Number);
let minCount1 = 64;
let minCount2 = 64;

function chessBoard() {
  for (let i = 0; i < M - 7; i++) {
    for (let j = 0; j < N - 7; j++) {
      let count1 = 0;
      let count2 = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (board[i + x][j + y] !== board1[x][y]) {
            count1++;
          }
          if (board[i + x][j + y] !== board2[x][y]) {
            count2++;
          }
        }
      }
      minCount1 = Math.min(count1, minCount1);
      minCount2 = Math.min(count2, minCount2);
    }
  }
  return Math.min(minCount1, minCount2);
}

console.log(chessBoard());
