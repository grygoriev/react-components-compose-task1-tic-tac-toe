import { Information } from './information/Information.jsx';
import { Field } from './field/Field.jsx';
import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	startFromBegin,
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
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
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
