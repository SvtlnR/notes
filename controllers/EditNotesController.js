notesApp.controller("EditNotesController", function($scope, $routeParams, $location, notesService, markdown, $sce) {
	$scope.note = notesService.getNoteById($routeParams.id);
	var noteTitle = notesService.getNoteById($routeParams.id).data["title"];
	var noteDescription = notesService.getNoteById($routeParams.id).data["description"];
	$scope.isEditing = false;
	$scope.btnVal = "Edit";
	$scope.titleConverted = $sce.trustAsHtml(markdown.convertNote($scope.note.data.title));
	$scope.descripConverted = $sce.trustAsHtml(markdown.convertNote($scope.note.data.description));
	$scope.edit = function(note) {
		$scope.isEditing = !$scope.isEditing;
		if ($scope.isEditing) {
			$scope.btnVal = "Save";
			if (note.data.title === "") {
				$scope.errors = "Input title!";
				return false;
			}
			$scope.errors = "";
			return false;
		}
		$scope.btnVal = "Edit";
		notesService.saveChanges(note.id, note.data.title, note.data.description);
		noteTitle = note.data.title;
		noteDescription = note.data.description;
		$scope.titleConverted = $sce.trustAsHtml(markdown.convertNote(noteTitle));
		$scope.descripConverted = $sce.trustAsHtml(markdown.convertNote(noteDescription));
	}
	$scope.go = function(path) {
		$scope.note.data.title = noteTitle;
		$scope.note.data.description = noteDescription;
		$location.path(path);
	}
});