notesApp.controller("CreateNotesController", function($scope, $location, notesService) {
	$scope.saveNote = function(note) {
		if (angular.isUndefined(note)||angular.isUndefined(note.ttl)) {
			$scope.errors = "Input title!";
			return false;
		}
		$scope.errors = "";
		notesService.addNote(note.ttl, note.description);
		$location.path('/notes');
	}
	$scope.go = function(path) {
		$location.path(path);
	}
});