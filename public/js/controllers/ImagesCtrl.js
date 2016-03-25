angular.module('ImagesCtrl', []).controller('imagesController', function($scope, $http) {
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
        //$location.href = "/images/" + id;
        $http.get("/images/" + id).success(function (data) {
            console.log(data);
            $scope.images = data;
        });
    };
});