import { FieldLayout } from './layout/FieldLayout.jsx';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const Field = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	field,
	setField,
}) => {
	const checkGameStatus = (index) => {
		if (field[index] || isGameEnded) return;
		const newField = [...field];
		const currPlayer = currentPlayer;
		newField[index] = currPlayer;
		setField(newField);
		const playerLayout = newField.reduce((acc, item, index) => {
			if (item === currPlayer) {
				acc.push(index);
			}
			return acc;
		}, []);
		const isWinning = WIN_PATTERNS.some((pattern) =>
			pattern.every((cell) => playerLayout.includes(cell)),
		);
		const isDrawing = !newField.includes('');
		if (isWinning) {
			setCurrentPlayer(currPlayer);
			setIsGameEnded(true);
		} else if (isDrawing) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currPlayer === 'X' ? 'O' : 'X');
		}
	};

	return (
		<FieldLayout
			checkGameStatus={checkGameStatus}
			field={field}
			isGameEnded={isGameEnded}
		/>
	);
};