///<reference path="../angular.min.js"/>
var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {
        var country = {
            name: "India",
            capital: "Delhi",
            flag: "india.png"
        };
        $scope.country = country;
    });