module.exports = {
	title: 'UUID',
	description: 'A globally unique ID (suggested UUIDv4 but not enforced)',
	type: 'string',
	pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
};
