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
    	$rootScope.clock.init();
    }
]);

hourApp.controller('optionsController', ['$scope', '$rootScope',
	function ($scope, $rootScope){
		
	}
]);

hourApp.controller('homeController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
    	$rootScope.clock={};
    	$rootScope.clock = new Clock();
    	console.log($rootScope.clock);
    }
]);

