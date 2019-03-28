module.exports = {
	title: 'SIP URI',
	description: 'A string representing a SIP URI',
	type: 'string',
	allOf: [
		{format: 'uri'},
		{pattern: '^sip:.+@.+'}
	]
};