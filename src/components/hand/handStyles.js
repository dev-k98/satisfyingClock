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
		transform: (pos) => (pos[0] < 4 ? `rotate(${90 * pos[0]}deg)` : `rotate(${225}deg)`),
		animation: '$rotate 3s linear infinite',
	},
	hour: {
		position: 'relative',
		margin: 'auto',
		height: '75px',
		width: '10px',
		backgroundColor: 'black',
		border: 'transparent',
		transform: (pos) => (pos[1] < 4 ? `rotate(${90 * pos[1]}deg)` : `rotate(${225}deg)`),
		transformOrigin: 'bottom',
		animation: '$rotate 2s linear infinite',
	},
	// '@keyframes rotate': {
	// 	'0%': {
	// 		transform: `rotate(${pos * 90}deg)`,
	// 	},
	// 	'100%': {
	// 		transform: 'rotate(360deg)',
	// 	},
	// },
}));

export default handStyles;
