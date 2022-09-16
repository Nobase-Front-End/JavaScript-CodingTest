let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [_, str] = input;
const arr = str.split(" ");

const solution = (arr) => {
  const max = Math.max(...arr);
  if (max < 0) return max;
  arr.map((element, idx, arr) => {
    arr[idx] =
      idx !== 0 ? Math.max(+element, +element + arr[idx - 1]) : +element;
  });
  return Math.max(...arr);
};

console.log(solution(arr));
