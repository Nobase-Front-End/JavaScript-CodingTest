const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [rc, ...board] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');

const [ROW, COL] = rc.split(' ').map((e) => +e);
const nextTarget = {
	B: 'W',
	W: 'B',
};

function getUnmatchedNum(sr, sc) {
	let count = 0;
	let target = board[sr][sc];
	for (let r = sr; r < sr + 8; r++) {
		for (let c = sc; c < sc + 8; c++) {
			let curr = board[r][c];
			if (curr !== target) count++;
			if (c !== sc + 7) target = nextTarget[target];
		}
	}
	return Math.min(count, 64 - count);
}

const possibleStartRow = Array.from({ length: ROW - 7 }, (_, idx) => idx);
const possibleStartCol = Array.from({ length: COL - 7 }, (_, idx) => idx);

const minCost = possibleStartRow.reduce((prevCost, currR) => {
	const currCost = possibleStartCol.reduce((prevCost, currC) => {
		const currCost = getUnmatchedNum(currR, currC);
		return Math.min(prevCost, currCost);
	}, 33);
	return Math.min(prevCost, currCost);
}, 33);

console.log(minCost);
