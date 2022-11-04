const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = arr[0].split(" ")[0]
const cmd = arr[1].split(" ").map(str =>+str)

let list = Array(+n).fill(0).map((_, index)=>index+1)
let j=0;
let sum = 0
for(let i=0;i<cmd.length;i++){  
    if(cmd[i]!==list[j]){
        const to = list.indexOf(cmd[i])
        const gap = Math.abs(to - j)
        sum += Math.min(gap, list.length- gap) 
        j = list.indexOf(cmd[i])
    }
    list = [...list.slice(0, j), ...list.slice(j+1)]
}
console.log(sum)
