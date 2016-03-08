angular.module('CreateCtrl', []).controller('createController', function($scope, $http) {

    $scope.createCon = function(){
        console.log($scope.create);
        $http.post("/create/", $scope.create).success(function (data) {
        });
    }

});