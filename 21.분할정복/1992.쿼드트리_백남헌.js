const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const graph = arr.map(list => list.split("").map(Number))

let print = "";
const recur = (size, x, y) =>{
    let cur = 0;
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            cur += graph[y+j][x+i]
        }
    }
    if(cur===-0) print+="0"
    else if(cur===size*size) print+="1"
    else{
        print+="("
        recur(size/2, x,y)
        recur(size/2, x+size/2,y)
        recur(size/2, x,y+size/2)
        recur(size/2, x+size/2,y+size/2)
        print+=")"
    }
}
recur(+n, 0,0);
console.log(print)
