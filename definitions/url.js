module.exports = {
	title: 'URL',
	description: 'A string representing a URL',
	type: 'string',
	allOf: [
		{pattern: '^https?://'},
		{format: 'uri'}
	]
};
