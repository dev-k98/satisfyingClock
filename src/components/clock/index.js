import PropTypes from 'prop-types';
import React from 'react';

import time from '../../utility/timeGenerator';
import Hand from '../hand/index';

import clockStyles from './clockStyles';

const Clock = ({ position }) => {
	const style = clockStyles();
	time();
	return (
		<>
			<div className={style.clockBody}>
				<Hand position={position} />
			</div>
		</>
	);
};

Clock.propTypes = {
	position: PropTypes.number,
};

Clock.defaultProps = {
	position: 0,
};

export default Clock;
