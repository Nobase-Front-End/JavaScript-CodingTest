const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input[0];
  let ability = input.slice(1);
  ability = ability.map((i) => i.split(" ").map((n) => +n));
  // 사람들을 담을 people 배열
  const people = [];
  for (let i = 0; i < N; i++) people.push(i);

  const START_TEAM = [];
  let LINK_TEAM = [];
  const visited = new Array(N).fill(false);
  let min = Infinity;

  // 팀 선정을 위한 backtracking
  function backtracking(count, start) {
    // 재귀탈출조건: START팀에 팀원이 다 모이게 되면 재귀를 종료한다
    if (count === N / 2) {
      // START 팀을 제외한 인원을 LINK 팀에 넣어준다.
      LINK_TEAM = remainPeople(people, START_TEAM);
      // START 팀과 LINK 팀의 점수를 계산한다.
      const START_TEAM_POINT = calcTeamPoint(ability, START_TEAM);
      const LINK_TEAM_POINT = calcTeamPoint(ability, LINK_TEAM);
      // START 팀과 LINK 팀의 점수 차이를 계산하여 min보다 작다면 값을 업데이트 해준다.
      min =
        min > Math.abs(START_TEAM_POINT - LINK_TEAM_POINT)
          ? Math.abs(START_TEAM_POINT - LINK_TEAM_POINT)
          : min;
      return;
    }

    // 조합과 비슷하게 팀원을 담는다고 생각하면된다.
    for (let i = start; i < N; i++) {
      // 이미 방문한 팀원이라면 넘어간다
      if (visited[i]) continue;
      // 이제 방문했으니 true로 만들어주고,
      visited[i] = true;
      // 해당 인원을 START 팀에 넣는다
      START_TEAM.push(i);
      // 재귀를 이용하여 해당 팀에 팀원이 다 채워질때까지 이를 반복해준다.
      backtracking(count + 1, i);
      START_TEAM.pop();
      // 다음을 위해서 visited를 다시 false로 만들어준다.
      visited[i] = false;
    }
  }

  // START팀 선정 후 남은 인원을 LINK팀에 배정하기 위한 함수
  function remainPeople(people, team) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
      if (!team.includes(people[i])) result.push(people[i]);
    }
    return result;
  }

  // 해당 팀의 능력치 계산을 위한 함수
  function calcTeamPoint(points, team) {
    let result = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i === j) continue;
        result += points[team[i]][team[j]];
      }
    }
    return result;
  }

  backtracking(0, 0);
  console.log(min);
}
solution();
