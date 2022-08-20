const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
function solution(arr) {
  arr.sort((a, b) => {
    const [anum, aname] = a.split(" ");
    const [bnum, bname] = b.split(" ");
    if (Number(anum) > Number(bnum)) return 1;
    if (Number(anum) < Number(bnum)) return -1;
    if (Number(anum) === Number(bnum)) return 0;
  });
  console.log(arr.join("\n"));
}
solution(arr);
