const [INPUT_N, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +INPUT_N;
const MEETING_DATA = INPUT_ARR.map((meeting) => meeting.split(" ").map((e) => +e));

function solution(N, MEETING_DATA) {
  // 회의 종료 시간 오름차순, 회의 종료 시간이 같으면 회의 시작 시간 오름차순으로 회의 정렬
  MEETING_DATA.sort(([m1Start, m1End], [m2Start, m2End]) =>
    m1End === m2End ? m1Start - m2Start : m1End - m2End
  );

  let totalMeeting = 0;

  // 이전 회의가 끝나는 시간보다 현재 고려중인 회의의 시작 시간이 같거나 늦으면 예약 가능
  let beforeEnd = 0;
  for (const [start, end] of MEETING_DATA) {
    if (beforeEnd <= start) {
      totalMeeting += 1;
      beforeEnd = end;
    }
  }

  return totalMeeting;
}

console.log(solution(N, MEETING_DATA));
