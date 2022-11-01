const [BUFFER_SIZE, ...COMMANDS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

// 18258. 큐 2 문제에서 링크드리스트를 이용해서 구현한 Queue에 to_array() 메서드를 추가하여 이용
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

  to_array() {
    const array = [];
    let currentNode = this.first;
    while (currentNode) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// 입력의 끝을 의미하는 -1 제거
COMMANDS.pop();

function solution(BUFFER_SIZE, COMMANDS) {
  const queue = new Queue();

  COMMANDS.forEach((command) => {
    // 0이 입력으로 들어오면 패킷 하나를 처리
    if (command === 0) queue.pop();
    // 양의 정수가 입력으로 들어오고, queue에 자리가 남아있으면 패킨 하나가 들어옴
    if (command > 0 && queue.size() < BUFFER_SIZE) queue.push(command);
  });

  return queue.to_array();
}

console.log(solution(BUFFER_SIZE, COMMANDS).join(" "));
