notesApp.controller("NotesController", function($scope, $location, notesService) {
	$scope.notes = notesService.getNotes();
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