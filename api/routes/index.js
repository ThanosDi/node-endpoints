const routes = [
	require('./endpoints')
];

module.exports.register = function (server, options, next) {
	routes.forEach(route => {
		server.route(route);
	});

	next();
};

module.exports.register.attributes = {
	name: 'routes'
};
