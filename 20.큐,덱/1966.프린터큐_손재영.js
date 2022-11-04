const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor(arr = []) {
    this.queue = new Map();
    this.head = 0;
    this.tail = 0;

    arr.forEach((val) => {
      this.enqueue(val);
    });
  }
  enqueue(val) {
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
}

const answer = [];

for (let i = 0; i < input.length; i += 2) {
  let [N, K] = input[i].split(" ").map((e) => +e);
  const docs = input[i + 1].split(" ").map((e) => +e);
  const docsQueue = new Queue(docs);
  const priority = [...docs].sort((a, b) => a - b);

  while (docsQueue.length > 0) {
    const curr = docsQueue.dequeue();
    if (curr === priority.at(-1)) {
      if (K === 0) {
        answer.push(N - docsQueue.length);
        break;
      } else {
        priority.pop();
      }
    } else {
      docsQueue.enqueue(curr);
    }
    K = K > 0 ? K - 1 : docsQueue.length - 1;
  }
}

console.log(answer.join("\n"));
