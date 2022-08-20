const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
function sortedList() {
  const xycoordinateList = [];
  // arr.forEach(element=>xycoordinateList.push(element.split(" ")))
  arr.sort((a, b) => {
    a = a.split(" ");
    b = b.split(" ");
    if (Number(a[0]) !== Number(b[0])) return Number(a[0]) - Number(b[0]);
    else return Number(a[1]) - Number(b[1]);
  });
  console.log(arr.join("\n"));
}
sortedList();
