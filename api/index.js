const Hapi = require('hapi');
const server = new Hapi.Server();

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';
const cors = {
	origin: ['*']
};

server.connection({port, host, routes: {cors}});

server.register([
	require('./routes')
]);

server.start((err) => {

	if (err) {
		console.log('err', err.message);
		throw err;
	}
	console.log(`Server running at: ${server.info.uri}`);
});

module.exports = server;