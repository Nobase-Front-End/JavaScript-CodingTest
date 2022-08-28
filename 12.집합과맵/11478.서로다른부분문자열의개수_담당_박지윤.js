const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const answer = new Set(); // set 생성자함수를 생성하여, 후에 answer 값으로 들어온 요소들 중에서 중복값을 제거해줍니다.
// 처음부터 끝까지 반복문 돌리고요
for (let i = 0; i < input.length; i++) {
  // 문자열의 길이가 1 이상이라고 했으니, i보다 1 증가시킨 수로 끝까지 또 반복문을 돌립니다.
  for (let j = i + 1; j <= input.length; j++) {
    // answer에 인수를 추가할건데, i부터 j까지 범위로 자른 인수를 넣어줍니다.
    answer.add(input.slice(i, j));
  }
}
// 그렇게 나온 최종 size를 반환합니다.
console.log(answer.size);
