angular
    .module("app")
    .controller("infoCtrl", ["$scope", "$http", function ($scope, $http) {

        $http.get("/info").success(function (data) {
            $scope.message = data;
        });

    }]);

/*
angular.module('app', [])
    .controller('InfoCtrl', ['$scope', 'InfoFactory', 'Version',
        function ($scope, Info, Version, InfoFactory) {
            $scope.info = {};
            $scope.docker = {};


            Version.get({}, function (d) {
                $scope.docker = d;
            });
            InfoFactory.get({}, function (d) {
                $scope.message = d;
            });
        }]);*/
