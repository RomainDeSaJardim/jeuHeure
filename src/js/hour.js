'use strict';

var hourApp = angular.module('hourApp', [
    'ngRoute',
    'ngAnimate'
]);

hourApp.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider
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
    	console.log($scope.clock);
    	$scope.clock = {};
    	$scope.clock = new Clock();
    	$scope.clock.changeClock($rootScope.pathImg);
    	$scope.timeDay = $scope.clock.getTimeDay();
    	console.log($scope.clock);
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

