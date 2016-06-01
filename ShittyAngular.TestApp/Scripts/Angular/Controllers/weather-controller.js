angular.module('shitty').controller('WeatherController', function ($scope, $q, Api) {
    var windDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    $scope.city = 'Schiphol';

    $scope.updateWeather = function() {
        $scope.weather = Api.weather.get({ city: $scope.city });

        $scope.weather.$promise.then(function(data) {
            console.log(data);
            $scope.windDirectionString = windDirections[Math.floor(data.wind.deg / 11.25)];
            $scope.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        });
    }

    $scope.updateWeather();
});
