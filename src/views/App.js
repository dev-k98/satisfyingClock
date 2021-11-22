import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Number from '../components/number';
import timegenerator from '../utility/timeGenerator';

import viewStyles from './viewStyles';

function App() {
	const classes = viewStyles();
	const [time, setTime] = useState(timegenerator());
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		let timeout;
		if (animate) {
			timeout = setTimeout(() => {
				setTime(timegenerator());
				setAnimate(!animate);
			}, 8750);
		} else {
			timeout = setTimeout(() => {
				setTime([10, 10, 10, 10]);
				setAnimate(!animate);
			}, 5000);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [animate]);
	return (
		<div className={classes.container}>
			<div className={classes.clock_wall}>
				{time.map((number) => (
					<Number key={uuid()} number={number} />
				))}
			</div>
		</div>
	);
}

export default App;
