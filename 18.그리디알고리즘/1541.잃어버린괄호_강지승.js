const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const arr = input[0].split("-");
  const lst = [];
  arr.forEach((a) => {
    let tmp = 0;
    a.split("+").forEach((n) => {
      tmp += +n;
    });
    lst.push(tmp);
  });
  let answer = lst[0];
  for (let i = 1; i < lst.length; i++) {
    answer -= lst[i];
  }
  console.log(answer);
}

solution();
