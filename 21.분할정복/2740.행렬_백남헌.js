const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const firstNumber = n.split(" ")[0] * 1
const first = arr.slice(0, firstNumber).map(item=>item.split(" ").map(str=>+str))
const second = arr.slice(firstNumber+1).map(item=>item.split(" ").map(str=>+str))
const answer = []
for(let i=0;i<first.length;i++){
    const list = []
    for(let k=0;k<second[0].length;k++){
        let temp = 0
        for(let j=0;j<first[i].length;j++){
            temp +=first[i][j]*second[j][k]
        }
            list.push(temp)    
    }
    answer.push(list)
}

console.log(answer.map(str=>str.join(" ")).join("\n"))
