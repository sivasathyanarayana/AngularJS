///<reference path="../angular.min.js"/>
var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {
        var employee = {
            firstName: "Siva",
            lastName: "Ssn",
            gender: "Male"
        };
        $scope.employee = employee;
    });