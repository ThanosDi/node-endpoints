module.exports.webhookEscalation = function (request, reply) {
	// verification request
	if (request.method === 'get') {
		return reply(request.query.challenge);
	}

	const data = {
		responses: [
			{
				type: 'text',
				messages: ['Webhook defined custom response']
			}
		]
	};
	if (request.payload.result.incomplete) {
		return reply().code(200);
	}

	// it will contain query response
	console.log('ANSWERRRRR',request.payload);
	console.log('ANSWERRRRR json',JSON.stringify(request.payload));

	reply(JSON.stringify(data));
};
