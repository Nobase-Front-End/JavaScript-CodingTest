const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const n = +input[0];
  const video = input.slice(1, n + 1).map((m) => m.split('').map(Number));
  let answer = '';

  const compress = (compressed) => {
    if (!compressed.length) return;
    if (compressed.length === 1) {
      answer += compressed[0][0];
      return;
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        const targetLength = compressed.length / 2;
        check(
          compressed
            .slice(i * targetLength, (i + 1) * targetLength)
            .map((cut) => cut.slice(j * targetLength, (j + 1) * targetLength))
        );
      }
    }
    answer += ')';
  };

  const check = (mat) => {
    let tmp = mat[0][0];
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat.length; j++) {
        if (tmp !== mat[i][j]) {
          answer += '(';
          return compress(mat);
        }
      }
    }
    answer += tmp;
  };

  check(video);
  console.log(answer);
}

solution();
