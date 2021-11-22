import { makeStyles } from '@material-ui/core';

const handStyles = makeStyles(() => ({
	second: {
		position: 'relative',
		top: '-75px',
		left: '70px',
		height: '75px',
		width: '10px',
		backgroundColor: 'black',
		transformOrigin: 'bottom',
		transform: (pos) => {
			if (pos[0] <= 4) return pos[0] < 4 ? `rotate(${90 * pos[0]}deg)` : `rotate(225deg)`;
			return `rotate(360deg)`;
		},
		animation: '$rotateSecond 3s linear',
		// animation: (pos) =>
		// 	pos[0] < 4 ? '$rotateSecond 3s linear' : '$rotateSecond 3s linear infinite',
	},
	hour: {
		position: 'relative',
		margin: 'auto',
		height: '75px',
		width: '10px',
		backgroundColor: 'black',
		border: 'transparent',
		// transform: (pos) => (pos[1] < 4 ? `rotate(${90 * pos[1]}deg)` : `rotate(${360}deg)`),
		transform: (pos) => {
			if (pos[1] <= 4) return pos[1] < 4 ? `rotate(${90 * pos[1]}deg)` : `rotate(225deg)`;
			return `rotate(360deg)`;
		},
		animation: '$rotateHour 3s linear',
		transformOrigin: 'bottom',
		// animation: (pos) => (pos[1] < 4 ? '$rotateHour 3s linear' : '$rotateHour 3s linear infinite'),
	},

	'@keyframes rotateSecond': {
		'0%': {
			transform: `rotate(0deg)`,
		},
		'100%': {
			transform: (pos) => (pos[0] < 4 ? `rotate(${90 * pos[0]}deg)` : `rotate(360deg)`),
		},
	},
	'@keyframes rotateHour': {
		'0%': {
			transform: `rotate(0deg)`,
		},
		'100%': {
			transform: (pos) => (pos[1] < 4 ? `rotate(${90 * pos[1]}deg)` : `rotate(360deg)`),
		},
	},
}));

export default handStyles;
