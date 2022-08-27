const [firstLine, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const object = {}
const list = arr.map((element)=> object[element] = (object[element]|0)+1)
const neverList = Object.entries(object).filter((element)=> element[1]===2)
const neverPeople = neverList.map((element)=> element[0]).sort()
console.log(neverList.length)
console.log(neverPeople.join("\n"))