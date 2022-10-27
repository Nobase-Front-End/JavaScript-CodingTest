const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const result = [];
  const testCase = input.map((test) => test.split(" ").map((n) => +n));

  for (let i = 1; i < testCase.length; i += 2) {
    const [N, M] = testCase[i];
    // 각 테스트케이스의 결과값들을 result에 담아준다.
    result.push(checkPrintOrder(testCase[i + 1], M));
  }
  console.log(result.join("\n"));
}

// 몇 번째로 인쇄되었는지 궁금한 문서의 위치를 기억하고 있어야 한다. (이를 point 변수로 관리한다)
function checkPrintOrder(arr, point) {
  // 출력되는 순서를 체크하기 위한 변수
  let printOrder = 1;
  while (true) {
    // 첫 번째로 인쇄가능한 문서는 해당 문서들 중 우선순위(중요도)가 가장 높아야 한다.
    // if) 첫 번째 문서가 우선순위의 최대값보다 작다면 가장 뒤로 재배치한다.
    // if) 첫 번째 문서가 우선순위의 최대값과 같거나 크다면 프린트한다.
    const max = Math.max(...arr);
    // 첫 번째 문서의 우선순위를 담은 변수
    const firstDoc = arr[0];
    // 1. 첫 번째 문서가 내가 원하는 문서가 아닐시
    if (point !== 0) {
      if (firstDoc < max) arr.push(arr.shift());
      else {
        arr.shift();
        printOrder++;
      }
      // 포인트 위치를 1씩 빼준다.
      point--;
    } else {
      // 2. 첫 번째 문서가 내가 원하는 문서일 시
      if (firstDoc < max) {
        // 우선순위보다 작다면 뒤로 재배치하고,
        arr.push(arr.shift());
        // point의 위치를 마지막 위치로 초기화 시켜준다.
        point = arr.length - 1;
      } else return printOrder;
    }
  }
}

solution();
