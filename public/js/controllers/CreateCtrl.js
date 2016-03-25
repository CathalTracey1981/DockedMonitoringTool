angular.module('CreateCtrl', []).controller('createController', function($scope, $http) {
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

    }
});