const [N, MAIN_RING, ...OTHER_RINGS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

const gcd = (num1, num2) => (num2 ? gcd(num2, num1 % num2) : num1);

function solution(N, MAIN_RING, OTHER_RINGS) {
  return OTHER_RINGS.map((ring) => {
    const gcdOfRings = gcd(MAIN_RING, ring);
    return [MAIN_RING / gcdOfRings, ring / gcdOfRings].join("/");
  });
}

console.log(solution(N, MAIN_RING, OTHER_RINGS).join("\n"));
