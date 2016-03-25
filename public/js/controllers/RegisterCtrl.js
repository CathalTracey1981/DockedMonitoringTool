angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, $http, $location) {

    // Requires all fields to be filled in
    $scope.required = true;

    // If all fields are filled in with valid data, the user is added to the database
    $scope.register = function(){
        console.log($scope.reg);
        if($scope.reg == null || $scope.reg == ""){
            $scope.reg = "";
        }else{
            $http.post("/dockerdb/", $scope.reg).success(function (data) {
                console.log($scope.reg);
                $scope.reg = "";
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
            });
        }
    };

});
