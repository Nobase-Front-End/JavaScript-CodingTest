const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const xy = input.filter((v, i) => i >= 0).map((v) => v.split(' '));


let answer = '';
xy.sort((a, b) => {
  if (a[0] === b[0])
    return a[1] - b[1];
  else
    return a[0] - b[0];
})
  .forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`
  });


console.log(answer);
