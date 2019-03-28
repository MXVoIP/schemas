const fs = require('fs');
const path = require('path');

const definitions = {};

const  definitionsPath = path.join(__dirname,'definitions');
fs.readdirSync(definitionsPath)
	.filter((filename) => {return path.extname(filename) === '.js';})
	.forEach((filename) =>
	{
		definitions[path.basename(filename, '.js')] = require(path.join(definitionsPath, filename));
	});

const schema = {
	'$schema': 'http://json-schema.org/draft-07/schema#',
	'$id': '/CallQueue',
	definitions: definitions,
}
module.exports = schema;
