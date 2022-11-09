const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const A = input[1].split(' ').map(Number);
  const B = input[3].split(' ').map(Number);
  A.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < B.length; i++) {
    let left = 0;
    let right = A.length - 1;
    let mid = 0;
    let answer = 0;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (A[mid] === B[i]) {
        answer = 1;
        break;
      } else if (A[mid] > B[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    result.push(answer);
  }

  console.log(result.join('\n'));
}

solution();
