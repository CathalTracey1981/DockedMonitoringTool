angular
    .module("app")
    .controller("homeCtrl", ["$scope", "$http", function ($scope, $http) {
        $http.get("http://192.168.99.100:4243/version").success(function (data) {
            $scope.home = data;
        })
    }]);
