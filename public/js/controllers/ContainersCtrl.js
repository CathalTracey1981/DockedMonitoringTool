angular.module('ContainersCtrl', []).controller('containersController', function($scope, $http) {
    $http.get("/containers/").success(function (data) {
        console.log(data);
        $scope.containers = data;
    });
});