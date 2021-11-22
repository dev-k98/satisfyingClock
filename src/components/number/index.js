import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid';

import { numGrid } from '../../utility/constants';
import Clock from '../clock';

import numberStyles from './numberStyles';

const Number = ({ number }) => {
	const numberGrid = numGrid()[number];

	const classes = numberStyles();
	return (
		<div className={classes.number}>
			{numberGrid.map((column) => (
				<div>
					{column.map((position) => (
						<Clock key={uuid()} position={position} />
					))}
				</div>
			))}
		</div>
	);
};

Number.propTypes = {
	number: PropTypes.number,
};

Number.defaultProps = {
	number: 0,
};

export default Number;
