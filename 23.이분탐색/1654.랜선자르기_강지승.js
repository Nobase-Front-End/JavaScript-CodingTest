const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const [K, N] = input[0].split(' ').map(Number);
  const lengths = input.slice(1, K + 1).map(Number);
  lengths.sort((a, b) => a - b);

  let left = 0;
  let right = lengths[lengths.length - 1];
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    lengths.forEach((l) => {
      count += Math.floor(l / mid);
    });

    if (count >= N) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
}

solution();
