import styles from './InformationLayout.module.css';

export const InformationLayout = ({children}) => {
	return <div className={styles.informationLayout}>{children}</div>;
}
