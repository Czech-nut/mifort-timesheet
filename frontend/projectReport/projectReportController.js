'use strict';

angular.module('myApp.projectReport', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projectReport', {
            templateUrl: 'projectReport/projectReportView.html',
            controller: 'projectReportController'
        });
    }])

    .controller('projectReportController', ['$scope', function ($scope) {
        $scope.page = 'projectReport';
    }]);