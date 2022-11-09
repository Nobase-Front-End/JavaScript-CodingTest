const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const [N, C] = input[0].split(' ').map(Number);
  const houses = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  let left = 1;
  let right = houses[N - 1] - houses[0];
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 1;
    let start = houses[0];

    houses.forEach((house) => {
      if (house - start >= mid) {
        count++;
        start = house;
      }
    });

    if (count >= C) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
}

solution();
