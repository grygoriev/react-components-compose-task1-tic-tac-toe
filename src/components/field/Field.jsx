import { FieldLayout } from './layout/FieldLayout.jsx';

export const Field = ({
	isGameEnded,
	field,
  	checkGameStatus
}) => {

	return (
		<FieldLayout
			field={field}
			isGameEnded={isGameEnded}
			checkGameStatus={checkGameStatus}
		/>
	);
};
