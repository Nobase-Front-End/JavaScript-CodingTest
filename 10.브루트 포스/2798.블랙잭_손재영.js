const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const [nm, cardsStr] = input.split('\n');
const [_, M] = nm.split(' ').map((e) => +e);
const cardsArr = cardsStr.split(' ').map((e) => +e);

function getNearestM(count, totalVal, idx) {
	if (count === 3) {
		return totalVal <= M ? totalVal : -1;
	}
	if (totalVal > M || idx >= cardsArr.length) return -1;

	const added = getNearestM(count + 1, totalVal + cardsArr[idx], idx + 1);
	const notAdded = getNearestM(count, totalVal, idx + 1);
	return Math.max(added, notAdded);
}

const answer = getNearestM(0, 0, 0);
console.log(answer);
