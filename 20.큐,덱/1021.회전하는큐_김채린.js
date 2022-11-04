const [N, M, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

// N의 범위가 작고 deque에서 특정 요소의 인덱스를 구하기 위해 굳이 링크드리스트를 이용하지 않고 배열 이용
function solution(N, M, ARR) {
  const queue = Array.from({ length: N }, (_, idx) => idx + 1);

  // 2번 혹은 3번 연산 횟수를 저장할 변수
  let operateCnt = 0;

  ARR.forEach((targetNum) => {
    while (true) {
      // 원하는 수의 현재 인덱스 구하기
      const targetNumIdx = queue.indexOf(targetNum);

      // 원하는 수가 큐의 가장 앞에 있으면 1번 연산(첫 번쨰 요소 추출) 수행
      if (targetNumIdx === 0) {
        queue.shift();
        break;
      }

      // 원하는 수가 큐의 가운데 혹은 그 앞에 위치하면 2번 연산(모든 요소를 왼쪽으로 한 칸 이동) 수행
      if (targetNumIdx <= queue.length / 2) queue.push(queue.shift());
      // 원하는 수가 큐의 가운데보다 뒤에 위치하면 3번 연산(모든 요소를 오른쪽으로 한 칸 이동) 수행
      else queue.unshift(queue.pop());

      // 2번 혹은 3번 연산 횟수 1 증가
      operateCnt += 1;
    }
  });

  return operateCnt;
}

console.log(solution(N, M, ARR));
