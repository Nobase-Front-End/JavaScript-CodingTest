const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

// // 첫 번째 풀이: 제거되는 인덱스의 규칙을 이용한 풀이 -> 통과
// function solution(N, K) {
//   const arr = Array.from({ length: N }, (_, idx) => idx + 1);

//   let pointer = K - 1;
//   const answer = [];

//   while (arr.length) {
//     if (pointer >= arr.length) pointer = pointer % arr.length;

//     answer.push(arr[pointer]);
//     arr.splice(pointer, 1);

//     pointer += K - 1;
//   }

//   return answer;
// }

// 두 번째 풀이: 큐를 이용한 풀이 -> 통과
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

function solution(N, K) {
  // 1부터 N의 정수로 이루어진 큐 생성
  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  const answer = [];

  // N명의 사람이 모두 제거될 때까지
  while (queue.size()) {
    // 가장 앞의 사람을 맨 뒤로 보내는 과정을 K-1번 반복
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }

    // K번쨰 사람 제거
    answer.push(queue.pop());
  }

  return answer;
}

console.log("<" + solution(N, K).join(", ") + ">");
