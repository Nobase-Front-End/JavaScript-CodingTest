/**
 * 문제 풀때 +0과 -0이 있다는 것을 유의해야함
 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[1].split(" ").map((v) => +v);
let operator = input[2].split(" ").map((v) => +v);

let min = 1000000000;
let max = -1000000000;

// 초기 dfs
dfs(0, num[0]);
console.log(`${max}\n${min}`);

// dfs를 돌 때 횟수를 세는 count와 현재 돌고 있는 num을 넣어준다.
function dfs(cnt, val) {
  const originVal = val; //다시 초기화 할 때 사용.

  if (cnt == input[0] - 1) {
    //탈출조건 :  연산을 모두 했으면 최대 최소 비교
    if (val > max) max = val;
    if (val < min) min = val;
    return;
  } else {
    // 연산자가 있으면 각 연산자에 대한 계산
    for (let i = 0; i < 4; i++) {
      if (operator[i] > 0) {
        switch (i) {
          case 0:
            val += num[cnt + 1];
            break;
          case 1:
            val -= num[cnt + 1];
            break;
          case 2:
            val *= num[cnt + 1];
            break;
          case 3:
            if (val >= 0) {
              val = Math.floor(val / num[cnt + 1]);
            } else {
              val = Math.floor((-1 * val) / num[cnt + 1]);
              if (val > 0) val = val * -1; // -0이 나올 수도 있기 때문에
            }
            break;
        }

        operator[i]--;
        dfs(cnt + 1, val);
        val = originVal;
        operator[i]++;
      }
    }
  }
  return;
}
