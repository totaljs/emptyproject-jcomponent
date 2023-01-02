NEWSCHEMA('Users', function(schema) {

	schema.define('name', 'Capitalize(30)', true);

	schema.action('list', {
		name: 'List of users',
		action: function($) {
			var arr = [];
			for (var i = 0; i < 10; i++)
				arr.push({ name: 'User ' + U.GUID(10) });
			$.callback(arr);
		}
	});

	schema.action('Create', {
		name: 'Create a user',
		action: function($, model) {
			$.invalid('Internal server error');
		}
	});

});