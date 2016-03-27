angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, $http, $location, $timeout) {

    // Requires all fields to be filled in
    $scope.required = true;
    $scope.error = false;

    // If all fields are filled in with valid data, the user is added to the database
    $scope.register = function(){
        $http.post("/dockerdb", $scope.reg).success(function (data, status) {
            console.log($scope.reg);

            if (status === 200) {
                swal({
                    title: "Registration Successful!",
                    type: "success",
                    animation: "pop",
                    timer: 1000,
                    showConfirmButton: false
                });
                $timeout(function() {
                }, 1100).then(function() {
                    $location.path('/containers');
                });
            }


        }).error(function () {
            $scope.error = true;
            $scope.errorMessage = "Invalid Credentials";
            $("#myAlert").alert('close');
        });

    };
});
