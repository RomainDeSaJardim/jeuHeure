'use strict';

var hourApp = angular.module('hourApp', [
    // Dépendances du "module"
    'hourGame'
]);

var hourGame = angular.module('hourGame',[]);

hourGame.controller('hourCtrl', ['$scope',
    function ($scope) {

        // Pour manipuler plus simplement les todos au sein du contrôleur
        // On initialise les todos avec un tableau vide : []
    
	    $scope.start = function()
	    {
	    	var header = angular.element('<header><h1 id="title"></h1></header>');
	    	var section = angular.element('<section><article id="demarrer" ng-click=""></article><article id="option" ng-click=""><article id="credits" ng-click=""></article></section>');
	    	iElement.append(header);
	    	iElement.append(section);
	    }

    }
]);


window.onload = function()
{
	hourGame.start();
}