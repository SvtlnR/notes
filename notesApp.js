var notesApp = angular.module('notesApp', ["ngRoute"]).config(function($routeProvider) {
    $routeProvider.when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesController'
    });
    $routeProvider.when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateNotesController'
    });
    $routeProvider.when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditNotesController'
    });
    $routeProvider.otherwise({
        redirectTo: '/notes'
    });
}).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined') {
            $templateCache.remove(current.templateUrl);
        }
    });
});