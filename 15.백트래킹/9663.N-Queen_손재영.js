const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const N = +require('fs').readFileSync(path).toString().trim();

let answer = 0;
const board = Array(N).fill(Infinity);

const checkPossible = (currRow) => {
	for (let prevRow = 0; prevRow < currRow; prevRow++) {
		if (
			board[currRow] === board[prevRow] ||
			currRow - prevRow === Math.abs(board[currRow] - board[prevRow])
		)
			return false;
	}
	return true;
};

const updatePossibleQueens = (currRow) => {
	if (currRow === N) {
		answer++;
		return;
	}
	for (let currCol = 0; currCol < N; currCol++) {
		board[currRow] = currCol;
		if (checkPossible(currRow)) {
			updatePossibleQueens(currRow + 1);
		}
	}
};

updatePossibleQueens(0);
console.log(answer);
