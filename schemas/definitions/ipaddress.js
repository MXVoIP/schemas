module.exports = {
	title: 'IP Address',
	description: 'A string representing an IP address - IPv4 or IPv6',
	type: 'string',
	oneOf: [
		{format: 'ipv4'},
		{format: 'ipv6'}
	]
};
