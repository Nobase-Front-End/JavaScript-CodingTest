const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const [A, B, C] = input[0].split(' ').map(BigInt);

  const pow = (a, b) => {
    if (b == 0) return BigInt(1);

    const cur = pow(a, BigInt(parseInt(b / BigInt(2))));
    return b % BigInt(2) ? (cur * cur * a) % C : (cur * cur) % C;
  };

  console.log(Number(pow(A, B)));
}

solution();
