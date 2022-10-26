const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this._head) {
      this._head = newNode;
    } else {
      this._tail.next = newNode;
      newNode.prev = this._tail;
    }
    this._tail = newNode;
    this._size++;

    return newNode;
  }

  removeHead() {
    this._head = this._head.next;
    this._head.prev = null;
    this._size--;
  }

  get head() {
    return this._head.value;
  }

  get size() {
    return this._size;
  }
}

function solution() {
  const n = +input[0];
  const cards = new LinkedList();

  for (let i = 1; i < n + 1; i++) {
    cards.add(i);
  }

  while (cards.size !== 1) {
    cards.removeHead();
    cards.add(cards.head);
    cards.removeHead();
  }
  console.log(cards.head);
}

solution();
