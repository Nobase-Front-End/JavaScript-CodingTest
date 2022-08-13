const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = input[0];
let testCaseArray = [];
for (let i = 1; i <= N; i++) {
  let temp = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ W: temp[0], H: temp[1] });
}
solution(N, testCaseArray);
// H : height W: weight
function solution(N, Person) {
  let arr = [];

  // 덩치가 작을수록 rank가 증가함
  for (let i = 0; i < N; i++) {
    // 1부터 시작
    let rank = 1;
    for (let j = 0; j < N; j++) {
      // i와 j가 다른경우
      if (i !== j) {
        //두 사람의 키와 몸무게를 비교해서 더 작으면 rank 증가
        if (Person[i].W < Person[j].W && Person[i].H < Person[j].H) {
          rank++;
        }
      }
    }
    arr.push(rank);
  }
  console.log(arr.join(" "));
}