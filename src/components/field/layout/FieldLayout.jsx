import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, checkGameStatus, isGameEnded }) => {
	return (
		<div className={styles.fieldLayout}>
			<ul>
				{field.map((item, index) => (
					<li
						key={index}
						onClick={() => checkGameStatus(index)}
						className={item || isGameEnded ? styles.occupied : styles.empty}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

FieldLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	field: PropTypes.arrayOf(PropTypes.string),
	checkGameStatus: PropTypes.func,
};
