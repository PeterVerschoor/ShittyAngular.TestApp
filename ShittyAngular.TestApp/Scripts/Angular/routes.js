angular.module('shitty').config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
          redirectTo: '/weather'
      }).when('/weather', {
          templateUrl: '../../Templates/weather.html',
          controller: 'WeatherController'
      }).otherwise({ redirectTo: '/' });
}]);