notesApp.factory('markdown', function() {
	var converter = new showdown.Converter();
	return {
		convertNote: function(text) {
			var htmlText = converter.makeHtml(text);
			return htmlText;
		}
	};
});