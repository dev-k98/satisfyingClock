const timegenerator = () => {
	const date = new Date();

	const hour = date.getHours();
	const minute = date.getMinutes();

	return [
		hour < 10 ? 0 : parseInt(minute / 10, 10),
		hour % 10,
		minute < 10 ? 0 : parseInt(minute / 10, 10),
		minute % 10,
	];
};

export default timegenerator;
