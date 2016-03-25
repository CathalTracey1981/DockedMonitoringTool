angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location, $timeout) {

	// Requires all fields to be filled in
	$scope.required = true;

	// If all fields are filled in with valid data, the user is added to the database
	$scope.login = function(){
		console.log($scope.log);
		if($scope.log == null || $scope.log == ""){
			$scope.log = "";
		}else
		if($scope.log.email != null && $scope.log.password == 123 ){
			swal({
				title: "Invalid Credentials!",
				type: "warning",
				animation: "pop",
				timer: 2000,
				showConfirmButton: false
			});
			$timeout(function() {
			}, 1100).then(function() {
				$location.path('/');
			});
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