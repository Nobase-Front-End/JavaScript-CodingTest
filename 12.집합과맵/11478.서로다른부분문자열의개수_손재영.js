const S = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = [];
for (let lIdx = 0; lIdx < S.length; lIdx++) {
	let rIdx = lIdx + 1;
	while (rIdx <= S.length) {
		arr.push(S.substring(lIdx, rIdx));
		rIdx++;
	}
}
console.log(new Set(arr).size);
