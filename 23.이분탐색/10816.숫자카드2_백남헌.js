const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const runList = arr[1].split(" ")
const graph = arr[3].split(" ")
const obj = {}
let answer = ""
for(let i=0;i<runList.length;i++){
    obj[runList[i]] = (obj[runList[i]] ?? 0) +1  
}

for(let i=0;i<graph.length;i++){
    answer += (obj[graph[i]] ??"0")+" "
}
console.log(answer)
