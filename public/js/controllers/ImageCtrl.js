angular.module('ImageCtrl', []).controller('imageController', function($scope, $http, $routeParams) {
    var id = $routeParams.id;

    // Get Image by Id
    $http.get("/images/" + id).success(function (data) {
        console.log(data);
        $scope.images = data;

        // Get Image History
        var id = $routeParams.id;
        $http.get("/images/" + id + "/history").success(function (data) {
            console.log(data);
            $scope.image = data;
        });
    });

    // Delete Image
    $scope.remove = function () {
        var id = $routeParams.id;
        $http.delete("/images/" + id).success(function (data) {
            console.log(data);
            //$scope.container = data;
        });
    };
});
