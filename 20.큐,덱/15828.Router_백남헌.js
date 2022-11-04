const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const capital = +n
const flow = arr.map(str=>+str)

class Node{
    constructor(value){
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class Queue{
    #size
    constructor(){
        this.head = null;
        this.tail = null;
        this.#size = 0;
    }
    add(n){
        if(this.#size>=capital) return
        const node = new Node(n)
        if(!this.head)this.head = node;
        else{
            this.tail.next = node;
            node.prev = this.tail
        }
        this.tail = node;
        this.#size++
    }
    remove(){
        if(this.#size<1) return
        const removed = this.head.value
        this.head = this.head.next
        this.#size--
        return removed
    }
    getHead(){
        return this.head.value
    }
    getLength(){
        return this.#size===0? "empty": this.#size
    }

}

const queue = new Queue()
for(let i=0;i<flow.length;i++){
    if(flow[i]===0){
        queue.remove()
    }else if(flow[i]===-1){
        break;
    }else queue.add(flow[i])    
}
let answer =[]
if(queue.getLength()==="empty"){
  console.log('empty')
}else{
  while(queue.getLength()!=="empty"){
    answer.push(queue.remove())
  }
  console.log(answer.join(" "))
}
