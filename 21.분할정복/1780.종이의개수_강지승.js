const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution() {
  const n = +input[0];
  const paper = input.slice(1, n + 1).map((m) => m.split(' ').map(Number));

  const answer = [0, 0, 0];

  function cutPaper(cutted) {
    if (!cutted.length) return;
    if (cutted.length === 1) {
      answer[cutted[0][0] + 1] += 1;
      return;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const targetLength = cutted.length / 3;
        check(
          cutted
            .slice(i * targetLength, (i + 1) * targetLength)
            .map((cut) => cut.slice(j * targetLength, (j + 1) * targetLength))
        );
      }
    }
  }

  function check(mat) {
    let tmp = mat[0][0];
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat.length; j++) {
        if (tmp !== mat[i][j]) {
          return cutPaper(mat);
        }
      }
    }
    answer[tmp + 1] += 1;
  }

  check(paper);

  console.log(answer.join('\n'));
}

solution();
