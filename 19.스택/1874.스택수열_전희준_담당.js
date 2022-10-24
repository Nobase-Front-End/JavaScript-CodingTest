const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

// 1부터 n까지의 숫자를 stack에 push하고 이를 pop하여 주어진 수열을 만들어야 한다.
// 즉, 수열을 만들 수 있는 경우 주어진 수열의 길이만큼 pop을 해야한다.
// (출력할 결과(result)의 - 개수 === 주어진 수열의 길이)
function solution() {
  const [N, ...arr] = input;
  let result = "";
  // 1부터 n까지의 숫자를 카운팅하기 위한 count 변수
  let count = 1;
  const stack = [];

  for (let i = 0; i < N; i++) {
    // 해당 숫자(arr[i])까지 stack에 넣어야 pop하여 해당 수열의 숫자를 빼낼 수 있다.
    // while문을 통해서 count를 올려가며 해당 숫자까지 stack에 넣는다.
    while (count <= arr[i]) {
      stack.push(count++);
      result += "+\n";
    }

    // 위 while문 조건(count <= arr[i]) 후에
    // stack의 마지막 값이 arr[i]와 같지 않다면, 주어진 수열을 만들 수 없기에 "NO"를 출력하고 함수를 종료한다.
    if (stack[stack.length - 1] !== arr[i]) {
      console.log("NO");
      return;
    }
    // stack의 마지막 값이 arr[i]와 같다면, pop하고 출력할 결과(result)에 -를 추가한다
    stack.pop();
    result += "-\n";
  }

  console.log(result);
}
solution();
