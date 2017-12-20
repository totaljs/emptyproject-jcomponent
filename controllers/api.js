exports.install = function() {

	// Enables CORS for entire API
	CORS('/api/*', ['get', 'post', 'put', 'delete'], true);

	// Your routes
	// ROUTE('/api/', action, []);
};