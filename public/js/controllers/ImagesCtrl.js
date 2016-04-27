angular.module('ImagesCtrl', []).controller('imagesController', function($scope, $http, $timeout, $location) {
    $http.get("/images/").success(function (data) {
        console.log(data);
        $scope.images = data;
    });

    $scope.pullImage = function (){
        if($scope.pull == null || $scope.pull == "")
        {
            $scope.error = true;
            $scope.errorMessage = "Image name cannot be empty";
            $("#myAlert").alert('close');
            $timeout(function() {
            }, 1500).then(function() {
                location.reload();
            });
        }
        else {
            $http.post("/pull/", $scope.pull).success(function (data, status) {

                console.log(data);
                $scope.success = true;
                $scope.successMessage = "Pulling Image";
                $("#myAlert").alert('close');
            }).error(function () {
                $scope.error = true;
                $scope.errorMessage = "Could not pull image";
                $("#myAlert").alert('close');
            });
        }
    };

    $scope.goToImage = function (id ) {
        $http.get("/images/" + id).success(function (data) {
            console.log(data);
            $scope.images = data;
        });
    };

    $scope.createCon = function(){
        if($scope.create == null || $scope.create == "")
        {
            $scope.error = true;
            $scope.errorMessage = "Cannot create an empty container";
            $("#myAlert").alert('close');
            $timeout(function() {
            }, 1500).then(function() {
                location.reload();
            });
        }
        else
        {
            $http.post("/create/", $scope.create).success(function (data, status) {
                console.log(data);
                $scope.success = true;
                $scope.successMessage = "Container Created";
                $("#myAlert").alert('close');
            }).error(function () {
                $scope.error = true;
                $scope.errorMessage = "Could not create container";
                $("#myAlert").alert('close');
            });
        }

    };

});