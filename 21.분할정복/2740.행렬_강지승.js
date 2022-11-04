const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const an = +input[0].split(' ')[0];
  const A = input.slice(1, an + 1).map((e) => e.split(' ').map(Number));
  const bn = +input[an + 1].split(' ')[0];
  const B = input
    .slice(an + 2, an + bn + 2)
    .map((e) => e.split(' ').map(Number));

  const answer = [];

  for (let i = 0; i < A.length; i++) {
    let tmp = [];
    for (let j = 0; j < B[0].length; j++) {
      tmp.push(
        A[i].map((e, i) => e * B[i][j]).reduce((acc, curr) => acc + curr, 0)
      );
    }
    answer.push(tmp.join(' '));
  }

  console.log(answer.join('\n'));
}

solution();
