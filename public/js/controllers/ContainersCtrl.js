angular.module('ContainersCtrl', []).controller('containersController', function($scope, $http, $timeout,  $location) {

    $http.get("/containers/").success(function (data) {
        console.log(data);
        $scope.containers = data;
    });

    $http.get("/runningContainers/").success(function (data) {
        console.log(data);
        $scope.runningContainers = data;
    });

    $scope.createCon = function(){
        console.log($scope.create);
        $http.post("/create/", $scope.create).success(function (data) {
        });
        swal({
            title: "Container Created!",
            type: "success",
            animation: "pop",
            timer: 1600,
            showConfirmButton: false
        });
        $timeout(function() {
        }, 1680).then(function() {
            if($location.path('/containers')){
                location.reload();
            }
            else
            {
                location.reload();
            }
        });

    }

});