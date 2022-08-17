const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 문제에서 증가하는 순서란 오름차순을 의미합니다.
function solution() {
  // N에 좌표의 개수를 담아줍니다.
  const N = input.shift();
  // 좌표들을 담을 배열을 만들어줍니다.
  const coordinates = [];
  // input의 좌표들을 [ x좌표, y좌표 ] 형식으로 배열에 담아줍니다.
  input.forEach((x) => coordinates.push([+x.split(" ")[0], +x.split(" ")[1]]));
  // 좌표를 정렬합니다.
  coordinates.sort((a, b) => {
    // 만약 x좌표가 같다면 y좌표를 오름차순으로 정렬하고,
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    // x좌표가 같지 않다면 x좌표를 오름차순으로 정렬합니다.
    return a[0] - b[0];
  });
  // 결과를 담아줄 result를 만들어줍니다.
  let result = "";
  // 초기 방식) coordinates.forEach((x) => console.log(x.join(" "))); => 결과 : 시간 초과
  // console.log 여러 번 사용하여 출력하는 것 보다는
  // 아래와 같이 문자열로 처리하여 console.log 한 번만 사용하여 출력하니 시간 초과가 나오지 않고 통과되었습니다.
  coordinates.forEach((x) => (result += `${x[0]} ${x[1]}\n`));
  console.log(result);
}
solution();
