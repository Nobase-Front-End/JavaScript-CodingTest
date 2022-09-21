const [sampleNumber, ...stringGraph] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const graph = stringGraph.map((element) => element.split(" ").map((element) => +element));
const numberList = Array(+sampleNumber)
  .fill(0)
  .map((element, index) => (element = index));
const teamMax = +sampleNumber / 2;
const getTeamCombination = () => {
  let min = Number.MAX_SAFE_INTEGER;
  const state = Array(+sampleNumber / 2).fill(-1);
  const visited = Array(+sampleNumber).fill(false);
  const backTracking = (depth, start) => {
    if (depth === teamMax) {
      const teamGap = Math.abs(getTeamGap(state));
      if (min > teamGap) min = teamGap;
    } else {
      for (let i = start; i < numberList.length; i++) {
        if (visited[i] === true) continue;
        visited[i] = true;
        state[depth] = numberList[i];
        backTracking(depth + 1, i + 1);
        visited[i] = false;
      }
    }
  };
  backTracking(0, 0);
  return min;
};
const getTeamGap = (arr) => {
  const anotherGroup = numberList.filter((element) => !arr.includes(element));
  const getPairGroup = (allGroup) => {
    const answer = [];
    const state = [-1, -1];
    const visited = Array(arr.length).fill(false);
    const backTracking = (depth, start) => {
      if (depth === 2) {
        answer.push([...state]);
        return;
      } else {
        for (let i = start; i < allGroup.length; i++) {
          if (visited[i] === false) {
            visited[i] = true;
            state[depth] = allGroup[i];
            backTracking(depth + 1, i + 1);
            visited[i] = false;
          }
        }
      }
    };
    backTracking(0, 0);
    return answer;
  };
  return (
    getPairGroup(arr).reduce((acc, cur) => acc + graph[cur[0]][cur[1]] + graph[cur[1]][cur[0]], 0) -
    getPairGroup(anotherGroup).reduce(
      (acc, cur) => acc + graph[cur[0]][cur[1]] + graph[cur[1]][cur[0]],
      0
    )
  );
};
console.log(getTeamCombination());
