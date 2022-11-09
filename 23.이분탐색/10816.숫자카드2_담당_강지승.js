const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const N = +input[0];
  const A = input[1].split(' ').map(Number);
  const M = +input[2];
  const B = input[3].split(' ').map(Number);

  A.sort((a, b) => a - b);

  const count = {};

  A.forEach((num) => {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  });

  const result = [];

  for (let i = 0; i < B.length; i++) {
    if (count[B[i]]) {
      result.push(count[B[i]]);
    } else {
      result.push(0);
    }
  }

  console.log(result.join(' '));
}

solution();
