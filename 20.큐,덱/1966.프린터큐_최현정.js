const [CASE, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(/\n/);

let answer = [];

for (let i = 0; i < CASE; i++) {
  const [_, M] = arr[i * 2].split(' ').map((e) => +e);
  const queue = arr[i * 2 + 1].split(' ').map((e) => +e);

  const target = queue[M];
  let currpos = M;
  let count = 1;

  while (queue.length) {
    if (Math.max(...queue) === target && currpos === 0) {
      answer.push(count);
      break;
    } else if (queue[0] === Math.max(...queue)) {
      queue.shift();
      count += 1;
      currpos -= 1;
    } else if (currpos === 0) {
      queue.push(queue.shift());
      currpos = queue.length - 1;
    } else {
      queue.push(queue.shift());
      currpos -= 1;
    }
  }
}
console.log(answer.join('\n'));
