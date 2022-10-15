const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const list =[]
for(let i=0;i<arr.length;i++){
    if(list.length>0&&arr[i]==="0")list.pop()

    if(arr[i]!=="0"){ list.push(arr[i])}
        
}
console.log(list.reduce((acc,cur)=> acc+Number(cur),0))
