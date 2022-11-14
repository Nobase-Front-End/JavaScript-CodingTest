// https://www.acmicpc.net/problem/15828

const [n, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

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

  show() {
    if (this.isEmpty()) return 'empty';

    let curr = this.front;
    let queueArray = [curr.data];

    while (curr.next) {
      queueArray.push(curr.next.data);
      curr = curr.next;
    }

    return queueArray;
  }
}

let router = new Queue();

for (let i of arr) {
  if (i === 0) {
    router.dequeue();
  } else if (router.length < n && i !== -1) {
    router.enqueue(i);
  } else if (i === -1) {
    console.log(router.show().join(' '));
  }
}
