notesApp.controller("EditNotesController", function($scope, $routeParams, $location, notesService) {
	$scope.note = notesService.getNoteById($routeParams.id);
	var noteTitle = notesService.getNoteById($routeParams.id).data["title"];
	var noteDescription = notesService.getNoteById($routeParams.id).data["description"];
	$scope.saveNote = function(note) {
		if (note.data.title === "") {
			$scope.errors = "Input title!";
			return false;
		}
		$scope.errors = "";
		notesService.saveChanges(note.id, note.data.title, note.data.description);
		$location.path('/notes');
	}
	$scope.go = function(path) {
		$scope.note.data.title = noteTitle;
		$scope.note.data.description = noteDescription;
		$location.path(path);
	}
});