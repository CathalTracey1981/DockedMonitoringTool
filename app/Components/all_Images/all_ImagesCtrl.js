angular
    .module("app")
    .controller("all_ImagesCtrl", ["$scope", "$http", function ($scope, $http) {
        $http.get("http://192.168.99.100:4243/images/json?all=1").success(function (data) {
            $scope.images = data;
        });

    }]);