notesApp.controller("NotesController", function($scope, $location, notesService, markdown, $sce) {
	$scope.notes = notesService.getNotes();
	angular.forEach($scope.notes, function(value, key) {
		value.titleConverted = $sce.trustAsHtml(markdown.convertNote(value.data.title));
	});
	$scope.mes = "List of notes";
	if ($scope.notes.length === 0) {
		$scope.mes = "You haven't created any notes yet.";
	}
	$scope.go = function(path) {
		$location.path(path);
	}
	$scope.delete = function(id) {
		notesService.deleteNote(id);
	}
});