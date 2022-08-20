const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

// filter 메소드를 이용해서 좌표값을 받아옵니다.
const coordinate = input.filter((v, i) => i >= 0).map((v) => v.split(" "));

let answer = "";
coordinate
  // sort 함수를 이용해서 정렬을 해줍니다!
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // x좌표 값이 같다면, y좌표 정렬
    else return a[0] - b[0]; // x좌표 값이 다르다면, x좌표값 정렬
  })
  .forEach((arr) => {
    answer += `${arr[0]} ${arr[1]}\n`;
  }); // 그리고 값을 담아주고

console.log(answer); // 출력하면 완료!
