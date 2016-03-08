angular.module('StatsCtrl', []).controller('statsController', function($scope, $http, $routeParams) {

        var id = $routeParams.id;
        $http.get("/containers/" + id + "/stats?stream=false").success(function (data) {
            console.log(data);
            $scope.message = data;
        });

});