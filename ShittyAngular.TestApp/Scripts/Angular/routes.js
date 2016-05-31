angular.module('shitty').config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
          redirectTo: '/notes'
      }).when('/users', {
          templateUrl: '../../Views/Templates/',
          controller: 'UsersIndexController'
      }).otherwise({ redirectTo: '/' });
}]);