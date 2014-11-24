'use strict';

var hourApp = angular.module('hourApp', [
    'ngRoute',
    'ngAnimate'
]);

hourApp.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider
	.when('/home', 
	{
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})
	.when('/game', 
	{
		templateUrl: 'partials/game.html',
		controller: 'gameController'
	})
	.when('/options', 
	{
		templateUrl: 'partials/options.html',
		controller: 'optionsController'
	})
	.when('/credits', 
	{
		templateUrl: 'partials/credits.html'
	})
	.when('/',
	{
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})
	.otherwise(
	{
		redirect: '/home'
	});
}]);

hourApp.controller('gameController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
    	$scope.clock = new Clock();
    	$scope.clock.changeClock($rootScope.pathImg);
    	$scope.timeDay = $scope.clock.getTimeDay();
    }
]);

hourApp.controller('optionsController', ['$scope', '$rootScope',
	function ($scope, $rootScope){
		$scope.changeColorClock = function (pathImg) {
			$rootScope.pathImg = pathImg;
		};
	}
]);

hourApp.controller('homeController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
    }
]);

