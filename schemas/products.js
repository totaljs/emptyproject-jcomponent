NEWSCHEMA('Products', function(schema) {

	schema.setQuery(function($) {

		var arr = [];

		for (var i = 0; i < 10; i++)
			arr.push({ name: 'Product ' + U.GUID(10) });

		$.callback(arr);
	});

});