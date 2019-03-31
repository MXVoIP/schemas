module.exports = {
	title: 'Domain',
	description: 'A string representing a domain name',
	type: 'string',
	allOf: [
		{format: 'hostname'},
		{pattern: '\\.'}
	]
};