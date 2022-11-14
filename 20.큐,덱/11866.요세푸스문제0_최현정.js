const [N, K] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((e) => +e);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
    this.length += 1;
  }

  dequeue() {
    if (this.isEmpty()) return;

    this.front = this.front.next;
    if (!this.front) this.rear = null;
    this.length -= 1;
  }

  peekFront() {
    if (this.isEmpty()) return '큐가 비었습니다';

    return this.front.data;
  }
}

let Joseophus = [];
let queue = new Queue();

for (let i = 1; i < N + 1; i++) {
  queue.enqueue(i);
}

while (!queue.isEmpty()) {
  for (let i = 0; i < K - 1; i++) {
    queue.enqueue(queue.peekFront());
    queue.dequeue();
  }
  Joseophus.push(queue.peekFront());
  queue.dequeue();
}

console.log('<' + Joseophus.join(', ') + '>');
