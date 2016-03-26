angular.module('ImagesCtrl', []).controller('imagesController', function($scope, $http, $timeout, $location) {
    $http.get("/images/").success(function (data) {
        console.log(data);
        $scope.images = data;
    });

    $scope.pullImage = function (){
        $http.post("/pull/", $scope.pull).success(function () {
            console.log($scope.pull);
        });
        swal({
            title: "Pulling Image!",
            type: "success",
            animation: "pop",
            timer: 1600,
            showConfirmButton: false
        });

    };

    $scope.goToImage = function (id ) {
        $http.get("/images/" + id).success(function (data) {
            console.log(data);
            $scope.images = data;
        });
    };

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
            $location.path('/containers');
        });

    }

});