angular.module('ContainersCtrl', []).controller('containersController', function($scope, $http) {

    $http.get("/containers/").success(function (data) {
        console.log(data);
        $scope.containers = data;
    });

    $http.get("/runningContainers/").success(function (data) {
        console.log(data);
        $scope.runningContainers = data;
    });
});