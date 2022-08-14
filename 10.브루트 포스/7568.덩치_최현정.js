const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/)
  .map((i) => i.split(/\s/));

let N = +input[0][0];
let datas = input.slice(1, input.length);

function getLanking() {
  let count = 0; 
  let ranks = [];
  for (let i = 0; i < datas.length; i++) {
    for (let j = 0; j < datas.length; j++) {
      count += (+datas[i][0] < +datas[j][0] && +datas[i][1] < +datas[j][1]);
    }
    ranks.push(count + 1);
    count = 0;
  }
  return ranks;
}

answer = getLanking().join(" ");
console.log(answer);