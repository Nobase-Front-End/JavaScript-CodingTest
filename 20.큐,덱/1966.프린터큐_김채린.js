let [T, ...INPUT] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

// N의 범위가 작고 큐의 요소들 중 최댓값을 구해야 하므로 굳이 링크드리스트를 이용하지 않고 배열 이용
while (T--) {
  const N = INPUT.shift();
  let targetIdx = INPUT.shift();
  const queue = INPUT.splice(0, N);

  let printCnt = 0;

  while (true) {
    // 현재 큐의 중요도 최댓값
    const max = Math.max(...queue);
    // 현재 큐의 가장 앞에 있는 문서
    const firstDocument = queue.shift();

    // 현재 큐의 가장 앞에 있는 문서가 다른 모든 문서들보다 중요도가 높으면
    if (firstDocument === max) {
      // 인쇄
      printCnt += 1;
      // 몇 번째로 인쇄되었는지 궁금한 문서가 출력되었으면 연산 중단
      if (targetIdx === 0) break;
    }
    // 현재 큐의 가장 앞에 있는 문서보다 중요도가 높은 문서가 있으면
    else {
      // 가장 앞에 있는 문서를 가장 뒤에 재배치
      queue.push(firstDocument);
    }

    targetIdx -= 1;
    if (targetIdx < 0) targetIdx = queue.length - 1;
  }

  console.log(printCnt);
}
