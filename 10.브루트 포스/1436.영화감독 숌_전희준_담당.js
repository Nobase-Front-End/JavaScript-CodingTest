const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  // 666 -> 1666 -> 2666 -> 3666 -> 4666 -> 5666 -> (6666이 아니라) 6661 ->  6662 -> 6663... 순서로 증가한다.
  // 제일 작은 종말의 숫자는 666이므로 초기 숫자를 666으로 설정한다.
  let resultNum = 666;
  // 초기 숫자가 666이므로 초기 순서는 1으로 한다.
  // 여기서 order 값은 숌이 만들 영화 제목의 순서를 의미한다. (현재 1번째 영화제목에 들어갈 숫자 : 666)
  let order = 1;
  // 그래서 이 order 값을 문제에서 주어진 N번째에 해당하는 input 값과 맞추려고 한다.
  // order === input 때 까지 반복문을 수행한다.
  while (order !== +input) {
    // 반복문이 수행될 때마다 resultNum의 값이 1씩 증가하며,
    resultNum++;
    // 값에 666이 포함되었을 경우 order가 1씩 증가한다.
    if (`${resultNum}`.includes("666")) order++;
  }
  // 마지막으로 'order === input' 때의 resultNum을 출력한다.
  console.log(resultNum);
}

solution();
