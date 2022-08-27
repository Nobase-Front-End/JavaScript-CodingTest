const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 교집합 문제이기 때문에 Set을 활용할 것이고,
// 교집합 프로토타입 메서드를 만들어준다.
Set.prototype.intersection = function (set) {
  return [...this].filter((v) => set.has(v));
};

function solution() {
  // 배열 디스트럭처링 할당 이용하여 N, M 할당
  const [N, M] = input[0].split(" ").map((n) => +n);
  // 듣도 못한 사람
  const neverHeard = new Set(input.slice(1, 1 + N));
  // 보도 못한 사람
  const neverSeen = new Set(input.slice(1 + N));
  // 듣도 보도 못한 사람 (위에서 만든 메서드 활용)
  const anonymous = neverHeard.intersection(neverSeen);
  // 사전순으로 정렬
  anonymous.sort();
  // 스프레드 문법 이용하여 결과 출력
  console.log([anonymous.length, ...anonymous].join("\n"));
}
solution();
