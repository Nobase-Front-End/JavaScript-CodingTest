const [N, ...NUMS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

function solution(NUMS) {
  // stack으로 사용할 배열
  const stack = [];
  // 마지막으로 push한 숫자를 저장할 변수
  let lastPushedNum = 0;
  // push, pop 과정을 저장할 배열
  const pushOrPop = [];

  // 입력된 수열(만들어야 하는 수열)의 숫자를 하나씩 확인
  for (let i = 0; i < N; i++) {
    // 마지막으로 push한 숫자의 바로 다음 숫자부터 현재 만들어야 하는 숫자까지 stack에 차례로 push
    // push할 때마다 마지막으로 push한 숫자 갱신 및 pushOrPop 배열에 "+" push
    for (let j = lastPushedNum + 1; j <= NUMS[i]; j++) {
      stack.push(j);
      lastPushedNum++;
      pushOrPop.push("+");
    }

    // stack 최상단의 숫자를 pop
    // pushOrPop 배열에 "-" push
    const poppedNum = stack.pop();
    pushOrPop.push("-");

    // 만약 최상단에서 pop된 숫자가 현재 만들어야 하는 숫자가 아니면 "NO" 문자열 반환
    if (NUMS[i] !== poppedNum) return "NO";
  }

  // 입력된 수열을 만들 수 있으므로 push, pop 과정을 반환
  return pushOrPop.join("\n");
}

console.log(solution(NUMS));
