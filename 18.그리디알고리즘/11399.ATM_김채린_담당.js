const [N, ...TIMES] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

const solution = (N, TIMES) => {
  // 각 사람이 돈을 인출하는데 걸리는 총 시간(기다리는 시간 포함)의 합을 최소화하려면 돈을 인출하는데 시간이 적게 걸리는 사람이 앞으로 가야 하므로 오름차순 정렬
  TIMES.sort((a, b) => a - b);

  // 각 사람이 돈을 인출하는데 걸리는 총 시간을 TIMES 배열에 직접 저장
  // 각 사람이 돈을 인출하는데 걸리는 총 시간 = 바로 앞사람이 돈을 인출하는데 걸리는 시간 + 자기가 돈을 인출하는 데 걸리는 시간이므로 점화식을 세워 DP 사용
  TIMES.forEach((time, i) => (TIMES[i] = (TIMES[i - 1] ?? 0) + time));

  // 각 사람이 돈을 인출하는데 걸리는 총 시간이 합을 반환
  return TIMES.reduce((total, time) => total + time, 0);
};

console.log(solution(N, TIMES));
