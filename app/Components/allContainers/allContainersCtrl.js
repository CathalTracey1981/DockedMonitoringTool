angular
    .module("app")
    .controller("allContainersCtrl", ["$scope", "$http", function ($scope, $http) {
        $http.get("http://192.168.99.100:4243/containers/json?all=1").success(function (data) {
            $scope.containers = data;
        });

    }]);
