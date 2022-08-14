// 입력 M, N, string 출력 최소개수
let fs = require("fs");
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");
// 1. N(행), M(열) 분리 
const NM = input.shift().split(" ");
const [N, M] = [...NM];
// 2. input(문자열) => checkboard(배열 (B: 1, W: 0))
const inputarr = input.map(string => string.split(""));
const checkboard = inputarr.map(arr => arr.map(element => element === 'B' ? 1 : 0));

/* 
3. 8x8 중 한 줄(1x8) 입력받아서 [1,0,1,0,1,0,1,0]과 비교하여 변경해야 할 개수 반환
비교: row와 pattern이 다른 경우를 비교하기 위해서 XOR연산자(^) 사용
반환: 한줄을 [1,0,1,0,1,0,1,0]과 비교하면 다음줄은 [0,1,0,1,0,1,0,1]과 비교해야한다. 
이를 직접 계산하는 대신 idx를 입력받아 홀수번째는 8-([1,0,1,0,1,0,1,0]와 비교한 값) 반환
*/
function countRow(row, rowidx) {
  const pattern = [1, 0, 1, 0, 1, 0, 1, 0];
  const count = pattern.reduce((sum, element, idx) => {
    // XOR연산자는 element와 row[idx]가 다른 경우만 1 (e.g. 1 ^ 0 = 1, 0 ^ 1 = 1, 0 ^ 0 = 0, 1 ^ 1 = 0)
    return sum + (element ^ row[idx]);
  }, 0);
  return rowidx % 2 === 0 ? count : 8 - count;
}

/*
4. 8x8 입력받아서 총 변경해야할 개수 반환
비교: countRow호출하여 8줄 계산 
반환: 계산값과 64-계산값 비교하여 작은 값 반환
*/
function countTotal(arr8x8) {
  let totalcount = 0;
  for (let row = 0; row < 8; row++) {
    totalcount += countRow(arr8x8[row], row);
  }
  return Math.min(totalcount, 64 - totalcount);
}

/*
5. 전체 checkboard를 8x8씩 잘라서 countTotal계산
*/
function solution(N, M, checkboard) {
  let minCount = N * M;
  for (let row = 0; row <= N - 8; row++) {
    for (let col = 0; col <= M - 8; col++) {
      // 2차원 배열을 자르기 위해 map함수 내부에서 slice를 사용하여 Nx8을 만들고, 이후에 slice를 사용하여 8x8형태로 만든다.  
      const arr8x8 = checkboard.map(arr1xM => arr1xM.slice(col, col + 8)).slice(row, row + 8);
      minCount = Math.min(minCount, countTotal(arr8x8));
    }
  }
  return minCount;
}


console.log(solution(N, M, checkboard));