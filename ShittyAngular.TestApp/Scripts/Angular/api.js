angular.module('shitty').factory('Api', ['$resource',
 function($resource) {
     return {
         weather: $resource('http://localhost:7613/api/weather?city=:city', { city: '@city' })
     };
 }]);