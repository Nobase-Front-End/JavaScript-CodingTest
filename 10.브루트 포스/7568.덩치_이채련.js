const fs = require("fs");
let input = fs.readFileSync("덩치_7568/input.txt").toString().split("\n");

const N = Number(input.shift());
let person = [];

for (let i = 0; i < N; i++) {
  let temp = input[i].split(" ");
  person.push(temp);
}

solution();

function solution() {
  for (let i = 0; i < N; i++) {
    let count = 0;

    for (let j = 0; j < N; j++) {
      if (person[i][0] < person[j][0]) {
        if (person[i][1] < person[j][1]) {
          count++;
        }
      }
    }
    console.log(count + 1);
  }
}
