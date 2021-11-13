import React, { useEffect, useState } from 'react';

import Number from '../components/number';
import timegenerator from '../utility/timeGenerator';

import viewStyles from './viewStyles';

function App() {
	const classes = viewStyles();
	const [time, setTime] = useState(timegenerator());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(timegenerator());
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div className={classes.container}>
			<div className={classes.clock_wall}>
				{time.map((number) => (
					<Number number={number} />
				))}
			</div>
		</div>
	);
}

export default App;
