import PropTypes from 'prop-types';
import React from 'react';

import { position as pos } from '../../utility/constants';

import handStyles from './handStyles';

const Hand = ({ position }) => {
	const styles = handStyles(pos()[position]);
	return (
		<>
			<div className={styles.hour} />
			<div className={styles.second} />
		</>
	);
};

Hand.propTypes = {
	position: PropTypes.number,
};

Hand.defaultProps = {
	position: 0,
};

export default Hand;
