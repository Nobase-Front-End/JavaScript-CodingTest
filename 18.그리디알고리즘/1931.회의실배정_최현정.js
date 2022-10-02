const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/);

let input = arr.map((e) => e.split(/\s/));

const SORTED_MEETING_TIME = input.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
let roomCount = 0;
let endTime = 0;

SORTED_MEETING_TIME.forEach((time) => {
  const [start, end] = time.map((e) => +e);
  if (start >= endTime) {
    endTime = end;
    roomCount += 1;
  }
});

console.log(roomCount);
