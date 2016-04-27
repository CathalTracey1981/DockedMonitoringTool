angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location, $timeout) {

	// Requires all fields to be filled in
	$scope.required = true;
	$scope.error = false;

	$scope.login = function() {
		if ($scope.log == null || $scope.log == "") {
			$scope.error = true;
			$scope.errorMessage = "Fields cannot be empty";
			$("#myAlert").alert('close');
			$timeout(function () {
			}, 1500).then(function () {
				location.reload();
			});
		}
		else {
			$http.post("/login", $scope.log).success(function (data, status) {
				console.log($scope.log);
				if (status === 200) {
					$location.path('/containers');
				}
			}).error(function () {
				$scope.error = true;
				$scope.errorMessage = "Invalid Email or Password";
				$("#myAlert").alert('close');
			});
		}
	}});




