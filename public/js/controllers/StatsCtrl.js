angular.module('StatsCtrl', []).controller('statsController', function($scope, $http, $routeParams, $timeout) {
    var id = $routeParams.id;
    $scope.getStats = function () {
        $http.get("/containers/" + id + "/stats?stream=false").success(function (data) {
            console.log(data);
            $scope.message = data;
        });
    };

    // Function to replicate setInterval using $timeout service.
    $scope.internalFunction = function(){
        $timeout(function() {
            $scope.getStats();
            $scope.internalFunction();
        }, 3000)
    };

    // Kick off the interval
    $scope.internalFunction();

});