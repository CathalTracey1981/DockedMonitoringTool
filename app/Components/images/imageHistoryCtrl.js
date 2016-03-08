angular
    .module("app")
    .controller("imageHistoryCtrl", ["$scope", "$http", "$stateParams", function ($scope, $http, $stateParams) {
        var id = $stateParams.id;
        $http.get("http://192.168.99.100:4243/images/" + id + "/history").success(function (data) {
            $scope.images = data;
        });
    }]);

