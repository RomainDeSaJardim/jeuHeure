'use strict';

var hourApp = angular.module('hourApp', [
    'ngRoute',
    'ngAnimate',
    'ngDialog'
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

hourApp.controller('gameController', ['$scope', '$rootScope', 'ngDialog',
    function ($scope, $rootScope, ngDialog) {
    	$scope.clock = {};
    	$scope.clock = new Clock($rootScope.pathImg);
    	$scope.timeDay = $scope.clock.getTimeDay();
    	$scope.heures = $scope.clock.getHeures();
    	$scope.minutes = $scope.clock.getMinutes();
    	$scope.clientHeures = 0;
    	$scope.clientMinutes = 0;

    	$scope.hourUp = function(){
    		if($scope.clientHeures == 23)
    		{
    			$scope.clientHeures = 0;
    		}
    		else
    		{
    			$scope.clientHeures += 1;
    		}
    	};

    	$scope.hourDown = function(){

    		if($scope.clientHeures == 0)
    		{
    			$scope.clientHeures = 23;
    		}
    		else
    		{
    			$scope.clientHeures -= 1;
    		}

    	};

    	$scope.minuteUp = function(){

    		if($scope.clientMinutes == 55)
    		{
    			$scope.clientMinutes = 0;
    		}
    		else
    		{
    			$scope.clientMinutes += 5;
    		}

    	};

    	$scope.minuteDown = function(){

    		if($scope.clientMinutes == 0)
    		{
    			$scope.clientMinutes = 55;
    		}
    		else
    		{
    			$scope.clientMinutes -= 5;
    		}

    	};

    	$scope.verify = function() {
    		console.log($scope.clock.checkTime($scope.clientHeures, $scope.clientMinutes));
    		if($scope.clock.checkTime($scope.clientHeures, $scope.clientMinutes))
    		{
    			ngDialog.open({
    				template: 'partials/win.html',
    				scope: $scope
    			});
    		}
    		else
    		{
    			ngDialog.open({
    				template: 'partials/loose.html',
    				scope: $scope,
    			});
    		}
    	};

    	$scope.playAgain = function(){
    		$scope.clock = {};
    		$scope.clock = new Clock();
    		$scope.timeDay = $scope.clock.getTimeDay();
    		$scope.clientMinutes = 0;
    		$scope.clientHeures = 0;
    	};
    }
]);

hourApp.controller('optionsController', ['$scope', '$rootScope',
	function ($scope, $rootScope){
		$scope.changeClock = function (pathImg) {
			$rootScope.pathImg = pathImg;
		};
	}
]);

hourApp.controller('homeController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
    }
]);

