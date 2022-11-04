const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const [people, index] = arr.map(str =>+str)
let answer = []
class Node{
    constructor(value){
        this.value = value;
        this.next =null;
        this.prev =null;
    }
}
class Queue{
    #size
    constructor(){
        this.head = null
        this.tail = null
        this.#size = 0
    }
    add(number){
        const node = new Node(number)
        if(!this.head) this.head = node;
        else{
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail = node
        this.#size++
        return node
    }
    getHead(){
        return this.head.value
    }
    getLength(){
        return this.#size
    }
    removeHead(){
        this.head = this.head.next
        this.#size--
        return this.head
    }
}
const queue = new Queue()
const list = Array(people).fill(0).map((_, index)=> index+1)
for(let i=0;i<list.length;i++){
    queue.add(list[i])
}

while(queue.getLength()>0){
    for(let i=0;i<index;i++){
        const shift = queue.getHead()
        queue.removeHead()
        if(i!==index-1) queue.add(shift)
        else answer.push(shift)
    }
}
console.log("<"+answer.join(", ")+">")
