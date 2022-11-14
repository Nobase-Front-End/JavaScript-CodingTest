const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 링크드 리스트를 통해서 구현
class Queue {
  // 생성자 메서드
  // 큐의 가장 앞단과 뒷단. 길이
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(data) {
    // 새로운 인스턴스 생성
    const newNode = new Node(data);
    // 큐가 비어있다면 큐의 가장 앞인 front 와 rear 에 새로운 노드를 넣어준다
    // 큐에 원소가 있다면 현재 마지막 원소인 this.rear 의 다음순서에 새로운 노드를 넣어준다.
    // 이후 마지막 원소를 새로운 노드로 변경해준다.
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
    this.length += 1;
  }

  dequeue() {
    if (this.isEmpty()) return;

    // 큐의 첫번째 원소를 다음에 있던 원소로 옮겨준다
    this.front = this.front.next;
    // 이때 큐 안에 원소가 하나뿐이면 this.front.next는 null 값이고 this.front 값이 null 로 변경 된 상태이다.
    // 큐에 원소가 하나뿐이면 dequeue 시 큐가 비어야 한다.
    if (!this.front) this.rear = null;
    this.length -= 1;
  }

  peekFront() {
    if (this.isEmpty()) return '큐가 비었습니다';

    return this.front.data;
  }
}

const queue = new Queue();

for (let i = 1; i < +input + 1; i++) {
  queue.enqueue(i);
}

while (queue.length > 1) {
  queue.dequeue();
  queue.enqueue(queue.peekFront());
  queue.dequeue();
}

console.log(queue.peekFront());
