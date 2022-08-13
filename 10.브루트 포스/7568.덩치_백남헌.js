const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const bigRanking = arr.map((element) => element.split(" "));
for (let i = 0; i < bigRanking.length; i++) {
  bigRanking[i] = [Number(bigRanking[i][0]), Number(bigRanking[i][1])];
  bigRanking[i].push(i);
}
for (let i = 0; i < bigRanking.length; i++) {
  let count = 1;
  for (let j = 0; j < bigRanking.length; j++) {
    if (
      i !== j &&
      bigRanking[i][0] < bigRanking[j][0] &&
      bigRanking[i][1] < bigRanking[j][1]
    ) {
      count++;
    }
  }
  bigRanking[i].push(count);
}
bigRanking.sort((a, b) => a[3] - b[3]);
let rank = 1;
let cur = 0;

bigRanking.sort((a, b) => a[2] - b[2]);
console.log(bigRanking.map((element) => element[3]).join(" "));
