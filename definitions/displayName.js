module.exports = {
	title: 'Display Name',
	description: 'a human readable string used for display purposes',
	type: 'string',
	pattern: '^[A-Za-z0-9]+(?:[ _.]?[A-Za-z0-9]+)*$',
	minLength: 3,
	maxLength: 64
};
