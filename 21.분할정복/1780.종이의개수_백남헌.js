const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const graph =arr.map(item=> item.split(" ").map(Number));
const print = {"-1":0, "0":0, "1":0}

const recur=(size, x, y)=>{
    let lastNumber = graph[y][x]
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            if(lastNumber!==graph[y+j][x+i]){
                lastNumber=2;
                break;
            }
        }
        if(lastNumber===2) break;
    }
    if(lastNumber===2){
        recur(size/3, x, y)
        recur(size/3, x, y+size/3)
        recur(size/3, x, y+2*size/3)
        recur(size/3, x+size/3, y)
        recur(size/3, x+size/3, y+size/3)
        recur(size/3, x+size/3, y+2*size/3)
        recur(size/3, x+2*size/3, y)
        recur(size/3, x+2*size/3, y+size/3)
        recur(size/3, x+2*size/3, y+2*size/3)
    }else{
        print[lastNumber+""]++
    }
}
recur(+n, 0, 0)

console.log(print["-1"]+"\n"+print["0"]+"\n"+print["1"])
