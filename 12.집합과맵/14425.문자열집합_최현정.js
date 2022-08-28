const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 원소가 겹치지 않는데도 set 을 사용하는 이유.
// 배열의 includes 메소드는 선형탐색으로 시간복잡도가 O(N) 인 반면,
// 집합은 해시테이블을 사용하고 있기 때문에 has 메소드의 시간복잡도가 O(1) 이다.
const [N, M] = n.split(/\ /);
const [checkSet, testArr] = [new Set(arr.slice(0, N)), arr.slice(N)];
console.log(testArr.filter((test) => checkSet.has(test)).length);
