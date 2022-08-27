const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const list = {}
const A = new Set(arr[0].split(" ")).forEach((element)=>list[element] = (list[element]|0)+1)
const B = new Set(arr[1].split(" ")).forEach((element)=>list[element] = (list[element]|0)+1)

const filteredList = Array.from(Object.entries(list)).filter((element)=>element[1]<2)
console.log(filteredList.length)