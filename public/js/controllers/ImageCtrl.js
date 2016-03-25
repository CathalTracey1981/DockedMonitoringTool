angular.module('ImageCtrl', []).controller('imageController', function($scope, $http, $routeParams, $location, $timeout) {
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
        });
        swal({
            title: "\nImage "+ subStr(id) +" Deleted!",
            type: "success",
            animation: "pop",
            timer: 1600,
            showConfirmButton: false
        });
        $timeout(function() {
        }, 1680).then(function() {
            $location.path('/images');
        });
    };

    // Trim id for alert boxes
    function subStr(id){
        var str = id.substring(0,8);
        return str;
    }
});