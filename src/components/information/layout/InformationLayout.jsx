import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({state}) => {
	return <div className={styles.informationLayout}>{state}</div>;
}

InformationLayout.propTypes = {
	state: PropTypes.string,
};
