const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const [N, M] = input[0].split(' ').map(Number);
  const trees = input[1].split(' ').map(Number);

  trees.sort((a, b) => a - b);

  let left = 0;
  let right = trees[trees.length - 1];
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let sum = 0;
    trees.forEach((tree) => {
      if (tree > mid) sum += tree - mid;
    });

    if (sum >= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
}

solution();
