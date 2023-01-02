exports.install = function() {

	// Dashboard
	ROUTE('GET  /api/dashboard/    *Dashboard --> list');

	// Users
	ROUTE('GET  /api/users/        *Users     --> list');
	ROUTE('POST /api/users/        *Users     --> create');

	// Products
	ROUTE('GET  /api/products/     *Products  --> list');

};