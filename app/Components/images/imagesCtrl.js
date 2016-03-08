angular
    .module("app")
    .controller("imagesCtrl", ["$scope", "$http", function ($scope, $http) {
        $http.get("http://192.168.99.100:4243/images/json").success(function (data) {
            $scope.images = data;
        });
    }]);

