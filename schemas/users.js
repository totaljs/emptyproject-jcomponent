NEWSCHEMA('Users', function(schema) {

	schema.define('name', 'Capitalize(30)', true);

	schema.setQuery(function($) {

		var arr = [];

		for (var i = 0; i < 10; i++)
			arr.push({ name: 'User ' + U.GUID(10) });

		$.callback(arr);
	});

	schema.setInsert(function($) {
		$.invalid('Internal server error');
	});

});