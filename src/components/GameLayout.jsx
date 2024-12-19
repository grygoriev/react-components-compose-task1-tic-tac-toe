import { Information } from './information/Information.jsx';
import { Field } from './field/Field.jsx';
import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	startFromBegin,
	checkGameStatus
}) => {

	return (
		<div className={styles.gameLayout}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				field={field}
				isGameEnded={isGameEnded}
				checkGameStatus={checkGameStatus}
			/>
			<button onClick={startFromBegin}>Начать заново</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.arrayOf(PropTypes.string),
	setField: PropTypes.func,
	startFromBegin: PropTypes.func,
};
