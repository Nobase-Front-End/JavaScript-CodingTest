const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
function solution(arr) {
  let uniqueList = Array.from(new Set(arr));
  const sortedList = uniqueList.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (b.length > a.length) return -1;
    if (a.length === b.length) {
      if (a > b) return 1;
      if (b > a) return -1;
    }
  });
  const answer = sortedList.join("\n");
  console.log(answer);
}
solution(arr);
