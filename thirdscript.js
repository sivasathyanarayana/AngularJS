///<reference path="../angular.min.js"/>

var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {
        var employees = [{ firstName: "siva", lastName: "sathya", gender: "Male", salary: 350000 },
            { firstName: "srija", lastName: "U", gender: "Female", salary: 700000 },
            { firstName: "Sudha", lastName: "Sushmitha", gender: "Female", salary: 650000 },
            { firstName: "Sai", lastName: "teja", gender: "Male", salary: 300000 },
            { firstName: "ravi", lastName: "teja", gender: "Male", salary: 350000 }
        ];
        $scope.employees = employees;
    });