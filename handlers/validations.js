const validate = require('jsonschema').validate;
const codes = require('http-status-codes');
const definitions = require('../definitions');

const envelope = (code, data, error) =>
{
	return {
		statusCode: code,
		statusMessage: codes.getStatusText(code),
		data: data,
		error: error
	};
};

exports.validate = (req, res) =>
{
	const schema = definitions[req.params.schemaName];
	const instance = req.body;
	try
	{
		const result = validate(instance, schema);
		const code = result.valid ? codes.OK : schema ? codes.BAD_REQUEST : codes.NOT_FOUND;
		return res
			.status(code)
			.json(envelope(code, code == codes.OK ? {} : null, result.errors));
	}
	catch(e)
	{
		return res.status(codes.BAD_REQUEST, null, e);
	}
};
