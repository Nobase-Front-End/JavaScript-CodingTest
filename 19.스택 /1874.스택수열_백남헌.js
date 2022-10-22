const [n, ...arrStr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
function solution(){
const arr = arrStr.map(str=>+str -1)
const visited = Array(+n).fill(false)
const list = []
let now = 0
let answer =""
for(let i=0;i<arr.length;i++){

    while(now<=arr[i]){
        if(visited[now]===false){
            visited[now] = true;
            list.push(now)
            answer+="+\n"
        }
        now++
    }
    while(now>=arr[i]){
        if(list.length>0&&now===list.at(-1)){
            list.pop()
            answer+="-\n"
        }else{
            if(list.length===0&&i<arr.length) return "NO"
        }
        now--
    }
}
    return answer
}
console.log(solution())
