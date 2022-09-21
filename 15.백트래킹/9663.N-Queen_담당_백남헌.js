/*
N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

input N × N의 N이다.
*/
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const getQueenN = (requiredNumber) => {
  let queenN = 0; //가능한 queen의 경우의 수
  const board = []; //현재 board위치
  const isPromising = (positionX) => {//백트레킹, 유망한 조건
    for (let i = 0; i < positionX; i++) {
      if (board[i] === board[positionX]) { //같은 줄이면 제외
        return false;
      }
      if (Math.abs(board[positionX] - board[i]) === positionX - i) {//데각선 상에 있으면 제외
        return false;
      }
    }
    return true;
  };
  const backTracking = (num) => {
    if (requiredNumber === num) {//N개만큼 queen의 갯수를 채웠다면 queenN의 경우의 수에 더해준다
      queenN++;
      return;
    }
    for (let i = 0; i < requiredNumber; i++) {
      board[num] = i;
      if (isPromising(num)) {//유망하다면 다음의 케이스를 검토한다.
        backTracking(num + 1);
      }
    }
  };
  backTracking(0);
  return queenN;
};
//문제를 보면, X축만 중복을 체크하는 이유가 궁금할 수 있다
//지금 문제의 경우는, y축 1개당 1개씩 카운트를 하기 때문에, y에 대해서는 체크를 하지 않아도 된다.
console.log(getQueenN(+input));
