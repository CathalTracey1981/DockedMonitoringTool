angular.module('ContainerCtrl', []).controller('containerController', function($scope, $http, $routeParams, $location, $timeout) {
    var id = $routeParams.id;

    if(id){
        $http.get("/containers/" + id).success(function (data) {
            console.log(data);
            $scope.container = data;
        });

        // Delete Container
        $scope.remove = function () {
            var id = $routeParams.id;
            $http.delete("/containers/" + id).success(function (data) {
                console.log(data);
                $scope.success = true;
                $scope.successMessage = "Container Deleted";
                $timeout(function() {
                }, 1500).then(function() {
                    $location.path("/containers");
                });
            }).error(function () {
                $scope.errorDeleteRunningContainer = true;
                $scope.errorMessage = "You cannot remove a running container. Stop the container before attempting removal";
            });
        };

        // Start Container
        $scope.start = function () {
            var id = $routeParams.id;
            $scope.error = false;
            $http.post("/containers/" + id + "/start").success(function (data, status) {
                console.log(data);
                $scope.success = true;
                $scope.successMessage = "Container Started";
                $timeout(function() {
                }, 1500).then(function() {
                    location.reload();
                });
            }).error(function () {
                $scope.error = true;
                $scope.errorMessage = "Could not start container";
                $timeout(function() {
                }, 2000).then(function() {
                    location.reload();
                });

            });
        };

        // Stop Container
        $scope.stop = function () {
            var id = $routeParams.id;
            $http.post("/containers/" + id + "/stop").success(function (data, status) {
                console.log(data);
                $scope.success = true;
                $scope.successMessage = "Container Stopped";
                $timeout(function() {
                }, 1500).then(function() {
                    location.reload();
                });
            }).error(function () {
                $scope.error = true;
                $scope.errorMessage = "Could not stop container";
                $timeout(function() {
                }, 2000).then(function() {
                    location.reload();
                });

            });

        };

        // Rename a Container
        $scope.renameContainer = function () {
            if($scope.rename == null || $scope.rename == "")
            {
                $scope.warning = true;
                $scope.warningMessage = "Name cannot be empty";
                $("#myAlert").alert('close');

            }
            else {
                var id = $routeParams.id;
                $http.post("/containers/" + id + "/rename", $scope.rename).success(function (data, status) {
                    console.log(data);
                    $scope.success = true;
                    $scope.successMessage = "Container Renamed";
                    $timeout(function() {
                    }, 1500).then(function() {
                        location.reload();
                    });
                }).error(function () {
                    $scope.error = true;
                    $scope.errorMessage = "Could not rename container";
                    $timeout(function() {
                    }, 2000).then(function() {
                        location.reload();
                    });

                });
            }
        }};
});



