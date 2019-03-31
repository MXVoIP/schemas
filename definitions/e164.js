module.exports = {
	title: 'E.164 Number',
	description: 'A string representing a telephone number in E.164 format',
	type: 'string',
	pattern: '^\\+[0-9]{1,3}[0-9]{12,14}$',
	maxLength: 16
};
