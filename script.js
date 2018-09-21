angular
    .module('mainApp', [])
    .filter('sumColumn', function() {
        return function(dataSet, columnToSum) {
            let sum = 0;

            for (let i = 0; i < dataSet.length; i++) {
                sum += parseFloat(dataSet[i][columnToSum]) || 0;
            }

            return sum;
        };
    })
    .controller('mainController', function($scope) {
        $scope.data = [
			{
				"day": "Sunday",
				"description": "Sunny all day",
				"temp": 82,
				"rain": 0
			},{
				"day": "Monday",
				"description": "Cloudy w chance of rain",
				"temp": 65,
				"rain": 1.3
			},{
				"day": "Tuesday",
				"description": "Sunny early on and cloudy in afternoon",
				"temp": 87,
				"rain": 0.2
			},{
				"day": "Wednesday",
				"description": "Sunny all day",
				"temp": 86,
				"rain": 0
			},{
				"day": "Thursday",
				"description": "Chance of rain in morning and sunny in afternoon",
				"temp": 86,
				"rain": 2.3
			}
		]
    })