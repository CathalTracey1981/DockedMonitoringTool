angular.module('InfoCtrl', []).controller('infoController', function($scope, $http) {

    $http.get("/info").success(function (data) {
        console.log(data);
        $scope.message = data;
    });

});