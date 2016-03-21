angular.module('ContainerCtrl', []).controller('containerController', function($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http.get("/containers/" + id).success(function (data) {
        console.log(data);
        $scope.container = data;
    });

    // Delete Container
    $scope.remove = function () {
        var id = $routeParams.id;
        $http.delete("/containers/" + id).success(function (data) {
            console.log(data);
            $scope.container = data;
        });
        location.reload();
    };

    // Start Container
    $scope.start = function () {
        var id = $routeParams.id;
        $http.post("/containers/" + id + "/start").success(function (data) {
            console.log(data);
            $scope.container = data;
        });
        location.reload();
    };

    // Stop Container
    $scope.stop = function () {
        var id = $routeParams.id;
        $http.post("/containers/" + id + "/stop").success(function (data) {
            console.log(data);
            $scope.container = data;
        });
        location.reload();
    };

    // Rename a Container
    $scope.renameContainer = function () {
        var id = $routeParams.id;
        $http.post("/containers/" + id + "/rename", $scope.rename).success(function (data) {
            console.log(data);
            $scope.container = data;
        });
        location.reload();
    };

});



