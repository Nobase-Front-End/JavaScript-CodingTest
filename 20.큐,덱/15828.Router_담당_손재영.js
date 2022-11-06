const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, ...packets] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

class Queue {
  // Array 대신 Object를 이용하여 enqueue / dequeue의 시간복잡도가 O(1)이 되도록 구현하였습니다.
  // 큐의 최대 길이를 인수로 받은 뒤 넘치는 패킷을 큐 클래스 내부에서 처리하도록 구현하였습니다.
  // 큐의 모든 원소를 반환하는 entry 메서드를 구현하였습니다.
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

packets.forEach((packet) => {
  if (packet === 0) queue.dequeue();
  if (packet > 0) queue.enqueue(packet);
  if (packet < 0) console.log(queue.entry);
});
