angular.module('ContainerCtrl', []).controller('containerController', function($scope, $http, $routeParams, $location, $timeout) {
    var id = $routeParams.id;

    if(id){
    $http.get("/containers/" + id).success(function (data) {
        console.log(data);
        $scope.container = data;
    });

    // Delete Container
    $scope.remove = function () {
        var id = $routeParams.id;
        $http.delete("/containers/" + id).success(function (data) {
            console.log(data);
        });
        swal({
            title: "\nContainer "+ subStr(id) +" Deleted!",
            type: "success",
            animation: "pop",
            timer: 1600,
            showConfirmButton: false
        });
        $timeout(function() {
        }, 1680).then(function() {
            $location.path('/containers');
        });
    };

    // Start Container
    $scope.start = function () {
        var id = $routeParams.id;
        $http.post("/containers/" + id + "/start").success(function (data) {
            console.log(data);
        });
        swal({
            title: "\nContainer "+ subStr(id) +" Started!",
            type: "success",
            animation: "pop",
            timer: 1600,
            showConfirmButton: false
        });
        $timeout(function() {
        }, 1680).then(function() {
            location.reload();
        });
    };

    // Stop Container
    $scope.stop = function () {
        var id = $routeParams.id;
        $http.post("/containers/" + id + "/stop").success(function (data) {
            console.log(data);
            $scope.container = data;
        });
        swal({
            title: "\nContainer "+ subStr(id) +" Stopped!",
            type: "success",
            animation: "pop",
            timer:  1600,
            showConfirmButton: false
        });
        $timeout(function() {
        }, 1680).then(function() {
            location.reload();
        });
    };

    // Rename a Container
    $scope.renameContainer = function () {
        var id = $routeParams.id;
        $http.post("/containers/" + id + "/rename", $scope.rename).success(function (data) {
            console.log(data);
            $scope.container = data;
        });
        swal({
            title: "\nContainer "+ subStr(id) +" Renamed!",
            type: "success",
            animation: "pop",
            timer: 1600,
            showConfirmButton: false
        });
        $timeout(function() {
        }, 1680).then(function() {
            location.reload();
        });
    };

    // Trim id for alert boxes
    function subStr(id){
        var str = id.substring(0,8);
        return str;
    }
    }

});



