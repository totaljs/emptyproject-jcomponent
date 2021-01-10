exports.install = function() {

	// Dashboard
	ROUTE('GET  /api/dashboard/    *Dashboard --> query');

	// Users
	ROUTE('GET  /api/users/        *Users     --> query');
	ROUTE('POST /api/users/        *Users     --> insert');

	// Products
	ROUTE('GET  /api/products/     *Products  --> query');

};