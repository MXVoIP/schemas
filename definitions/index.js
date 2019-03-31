const fs = require('fs');
const path = require('path');
const definitions = {};

// load all the definitions
fs.readdirSync(__dirname)
	.filter((filename) =>
	{
		return filename !== __filename && path.extname(filename) === '.js';
	})
	.forEach((filename) =>
	{
		const key = path.basename(filename, '.js');
		definitions[key] = require(path.join(__dirname, filename));
	});

module.exports = definitions;
