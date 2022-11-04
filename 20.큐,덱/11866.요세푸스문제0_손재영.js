const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, K] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

class Queue {
  constructor(N = Number.MAX_SAFE_INTEGER) {
    this.maxLength = N;
    this.queue = new Map();
    this.head = 0;
    this.tail = 0;
  }
  enqueue(val) {
    if (this.length === this.maxLength) return;

    this.queue.set(this.tail, val);
    this.tail += 1;
  }
  dequeue() {
    if (this.head === this.tail) return;

    const val = this.queue.get(this.head);
    this.queue.delete(this.head);
    this.head += 1;

    return val;
  }
  get length() {
    return this.queue.size;
  }
  get top() {
    return this.queue.get(this.head);
  }
  get entry() {
    return this.length === 0 ? "empty" : [...this.queue.values()].join(" ");
  }
}

const queue = new Queue(N);
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

const seq = [];
let i = 1;
while (queue.length > 0) {
  const n = queue.dequeue();
  i % K === 0 ? seq.push(n) : queue.enqueue(n);
  i += 1;
}

console.log(`<${seq.join(", ")}>`);
