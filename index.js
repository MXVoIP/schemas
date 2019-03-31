// look for a .env file to fill in environment variables
// not recommended for production but is available
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const logger = require('./logging');
const app = express();

// logging
app.use(logger.requests);
// request IDs
app.use(require('express-request-id')());
// some common security
app.use(helmet());
// body parsing
app.use(express.json());
// route handling
app.use('/', require('./routes'));
// listen for new connections
const host = process.env.LISTEN_HOST || 'localhost'; // defaults to localhost
const port = process.env.LISTEN_PORT || 3000; // defaults to 3000
const server = app.listen(port, host, () =>
{
	logger.info(`Listening at ${server.address().address}:${server.address().port}`);
});
// export the listening server
module.exports = server;
