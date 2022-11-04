const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// 18258. 큐 2 문제에서 링크드리스트를 이용해서 구현한 Queue 이용
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.size() ? 0 : 1;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.empty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length += 1;
  }

  pop() {
    if (this.empty()) return -1;

    const firstNode = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length -= 1;
    return firstNode.data;
  }

  front() {
    return this.empty() ? -1 : this.first.data;
  }

  back() {
    return this.empty() ? -1 : this.last.data;
  }
}

function solution(N) {
  // 1부터 N까지의 수를 차례로 갖는 queue 생성
  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // 제일 위에 있는 카드를 바닥에 버린다.
    queue.pop();

    // 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
    queue.push(queue.pop());
  }

  // 제일 마지막에 남게 되는 카드 반환
  return queue.pop();
}

console.log(solution(N));
