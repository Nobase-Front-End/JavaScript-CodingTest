const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function solution() {
  const [N, M] = input.map((n) => +n);
  let result = "";
  const numList = [];
  const visited = new Array(N + 1).fill(false);

  function dfs(count) {
    if (count === M) {
      result += `${numList.join(" ")}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (visited[i] === true || numList[numList.length - 1] > i) continue;
      visited[i] = true;
      numList.push(i);
      dfs(count + 1);
      numList.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  console.log(result);
}
solution();
