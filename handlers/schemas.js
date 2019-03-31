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

exports.getAll = (req, res) =>
{
	const status = codes.OK;
	return res.status(status)
		.json(envelope(status, definitions, null));
};

exports.getOne = (req, res) =>
{
	const name = req.params.schemaName;
	const schema = definitions[name];
	const data = {}; data[name] = schema;
	const status = schema ? codes.OK : codes.NOT_FOUND;
	const error = schema ? null : codes.getStatusText(status);

	return res.status(status)
		.json(envelope(status, data, error));
};
