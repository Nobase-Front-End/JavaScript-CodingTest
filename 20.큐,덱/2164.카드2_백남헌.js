const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = +input
class Node{
  constructor(number){
    this.value = number;
    this.prev = null;
    this.next = null;
  }
}
class LinkedList {
  #size
  constructor(){
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }
  add(n){
    const node = new Node(n);
    if(!this.head) this.head = node;
    else{
      this.tail.next = node;
      node.prev = this.tail
    }
    this.tail = node
    this.#size++
    return node
  }
  getHead(){
    return this.head.value;
  }
  removeHead(){
    this.head = this.head.next;
    this.head.prev = null;
    this.#size --;
  }
  getLength(){
    return this.#size;
  }
}
const linkedList = new LinkedList();
for (let i=0;i<n;i++){
  linkedList.add(i+1)
}

while(linkedList.getLength()>1){
  linkedList.removeHead()
  linkedList.add(linkedList.getHead())
  linkedList.removeHead()
}
console.log(linkedList.getHead())
