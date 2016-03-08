angular
    .module("app")
    .controller("imageCtrl", ["$scope", "$http", "$stateParams", function ($scope, $http, $stateParams) {
        var id = $stateParams.id;
        $http.get("http://192.168.99.100:4243/images/" + id + "/json").success(function (data) {
            $scope.image = data;
        });
    }]);

