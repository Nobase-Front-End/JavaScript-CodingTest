const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  // input 값 가져오기
  const [N, ...array] = input;
  const person = [...array];
  // start
  // 초기값은 모두 1등으로 설정한다.
  // 본인보다 덩치가 큰 사람이 있을 경우 등수가 내려가는 형식
  let result = new Array(+N).fill(1);

  for (let i = 0; i < person.length; i++) {
    // 한 사람씩 뽑아와서
    [aWeight, aHeight] = person[i].split(" ");
    for (let j = 0; j < person.length; j++) {
      // 본인과 본인을 비교하는 것은 제외하고
      if (i === j) continue;
      // 다른 사람과 키와 몸무게를 비교한다.
      [bWeight, bHeight] = person[j].split(" ");
      // 본인보다 덩치가 클 경우 등수가 내려간다
      if (+aWeight < +bWeight && +aHeight < +bHeight) result[i]++;
    }
  }
  console.log(result.join(" "));
}

solution();
