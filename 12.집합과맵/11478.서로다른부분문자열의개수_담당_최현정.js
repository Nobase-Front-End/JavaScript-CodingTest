const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// 중복을 걸러주기 위한 set 생성.
const set = new Set();

// 첫번째 반복문. 문자열을 자르는 길이를 체크
// 두번째 반복문. 시작하는 인덱스를 체크
for (let i = 1; i < input.length + 1; i++) {
  for (let j = 0; j + i < input.length + 1; j++) {
    // j 부터 길이가 i 인 문자열을 집합의 원소로 추가.
    set.add(input.slice(j, j + i));
  }
}

console.log(set.size);
