const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim();

const N = +input;

class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(val) {
    this.queue[this.tail] = val;
    this.tail += 1;
  }
  dequeue() {
    if (this.head === this.tail) return;
    return this.queue[this.head++];
  }
  get length() {
    return this.tail - this.head;
  }
  get top() {
    return this.queue[this.head];
  }
}

const queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

let i = 1;
while (queue.length > 1) {
  const val = queue.dequeue();
  if (i % 2 === 0) {
    queue.enqueue(val);
  }
  i += 1;
}

console.log(queue.top);
