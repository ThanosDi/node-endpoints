const handlers = require('../handlers/endpoints');

module.exports = [
	{
		path: '/api/escalation-webhook',
		method: 'POST',
		config: {
			handler: handlers.webhookEscalation,
			description: 'Submit an escalation webhook.'
		}
	}
];
