'use strict';

var hourApp = angular.module('hourApp', [
    'ngRoute',
    'ngAnimate',
    'hourGame'
]);

hourApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	
	$routeProvider
	.when('/',
	{
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})
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
	.otherwise(
	{
		redirect: '/home'
	});

}]);

var hourGame = angular.module('hourGame',[]);

hourGame.controller('gameController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {

    }
]);

hourGame.controller('optionsController', ['$scope', '$rootScope',
	function ($scope, $rootScope){
		
	}
]);

hourGame.controller('homeController', ['$scope', '$rootScope',
	function ($scope, $rootScope){
		
	}
]);