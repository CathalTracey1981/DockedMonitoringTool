angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location, $timeout) {

	// Requires all fields to be filled in
	$scope.required = true;

	// If all fields are filled in with valid data, the user is added to the database
	$scope.login = function(){
		console.log($scope.log);
		if($scope.log == null || $scope.log == ""){
			$scope.log = "";
		}else{
			$http.post("/login/", $scope.log).success(function (data) {
				$scope.log = "";
				swal({
					title: "Login Success!",
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