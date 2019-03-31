const Winston = require('winston');
const package = require('./package.json');

const appData = Winston.format((info) =>
{
	info.appData = {
		appName: package.name,
		version: package.version,
		pid: process.pid,
		uptime: process.uptime()
	};

	return info;
});

const logger = Winston.createLogger({
	levels: Winston.config.syslog.levels,
	format: Winston.format.combine(
		appData(),
		Winston.format.timestamp(),
		Winston.format.json()
	),
	transports: [
		new Winston.transports.Console({
			level: process.env.LOG_LEVEL || 'info'
		})
	]
});

logger.requests = (req, res, next) =>
{
	const start = parseFloat(process.hrtime.bigint()/BigInt(1e4));
	res.on('finish', () =>
	{
		const responseTime = ((parseFloat(process.hrtime.bigint()/BigInt(1e4)) - start)/100).toFixed(2);
		logger.info(res.statusMessage, {webRequest: {
			id: req.id,
			sourceIP: req.ip,
			sourceIPs: req.ips,
			protocol: req.protocol,
			hostname: req.hostname,
			path: req.path,
			method: req.method,
			responseTime: responseTime
		}});
	});

	return next();
};

module.exports = logger;