NEWSCHEMA('Dashboard', function(schema) {

	schema.action('list', {
		name: 'List',
		action: function($) {
			var arr = [];
			for (var i = 0; i < 10; i++)
				arr.push({ name: 'Dashboard ' + U.GUID(10) });
			$.callback(arr);
		}
	});

});