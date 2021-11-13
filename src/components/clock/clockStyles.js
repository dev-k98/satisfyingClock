import { makeStyles } from '@material-ui/core';

const clockStyles = makeStyles(() => ({
	clockBody: {
		height: '150px',
		width: '150px',
		margin: '5px',
		padding: '2px',
		border: '2px solid rgba(200,200,200,1)',
		borderRadius: '50%',
		background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(212,212,212,1) 100%)',
		boxShadow: ' rgba(0, 0, 0, 0.10) 0px 10px 36px 0px, rgba(0, 0, 0, 0.10) 0px 0px 0px 1px;',
		'&:hover': {
			background: '#f00',
		},
	},
}));

export default clockStyles;
