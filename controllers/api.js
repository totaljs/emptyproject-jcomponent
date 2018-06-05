exports.install = function() {

	ROUTE('GET  /api/dashboard/', ['*Dashboard --> @query']);

	ROUTE('GET  /api/users/',     ['*User --> @query']);
	ROUTE('POST /api/users/',     ['*User --> @insert']);

	ROUTE('GET  /api/products/',  ['*Product --> @query']);

};