angular.module('ImagesCtrl', []).controller('imagesController', function($scope, $http) {
    $http.get("/images/").success(function (data) {
        console.log(data);
        $scope.images = data;
    });

    $scope.pullImage = function (){
        $http.post("/pull/", $scope.pull).success(function (data) {
            console.log($scope.pull);
        });
    };
});