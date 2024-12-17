import { InformationLayout } from './layout/InformationLayout.jsx';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	const state = () => {
		if (isDraw) {
			return 'Ничья';
		} else if (isGameEnded) {
			return `Победа ${currentPlayer}`;
		} else {
			return `Ходит ${currentPlayer}`;
		}
	};
	return <InformationLayout state={state} />;
};
