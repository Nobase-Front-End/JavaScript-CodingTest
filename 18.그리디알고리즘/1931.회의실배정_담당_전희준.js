const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let answer = 0;
  // 최대한 회의실을 사용하기 위해서는 끝나는 시간이 빨라야 한다.
  // 끝나는 시간이 같을 경우에는 일찍 시작을 해야 최대한 더 많이 이용을 할 수 있다.
  // 입력 받은 배열을 끝나는 시간 기준으로 오름차순 정렬을 해주고, 끝나는 시간이 같을 경우 시작 시간 기준으로 오름차순 정렬을 해준다.
  const times = arr
    .map((num) => num.split(" ").map((num) => +num))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  // 시작시간이 변수 tmp(최근에 회의실이 끝난 시간)의 값보다 크거나 같다면 answer의 값을 증가 시키면서 회의실을 이용한 횟수를 누적
  let tmp = 0;
  times.forEach((time) => {
    if (time[0] >= tmp) {
      answer++;
      tmp = time[1];
    }
  });

  console.log(answer);
}
solution();
