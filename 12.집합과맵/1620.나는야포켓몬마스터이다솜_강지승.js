const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const dict = input.slice(1, N + 1);
  const idxDic = {};
  const strDic = {};
  dict.forEach((d, i) => {
    idxDic[i + 1] = d;
    strDic[d] = i + 1;
  });
  const check = input.slice(N + 1, N + M + 1);
  const answer = [];
  check.map((c) => {
    if (isNaN(c)) answer.push(strDic[c]);
    else answer.push(idxDic[c]);
  });
  console.log(answer.join("\n"));
}

solution();
