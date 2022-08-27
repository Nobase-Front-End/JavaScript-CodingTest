const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 차집합 프로토타입 메서드
Set.prototype.difference = function (set) {
  const result = new Set(this);
  for (const value of set) {
    result.delete(value);
  }
  return result;
};

function solution() {
  const setA = new Set(input[1].split(" "));
  const setB = new Set(input[2].split(" "));
  console.log(setA.difference(setB).size + setB.difference(setA).size);
}

solution();
