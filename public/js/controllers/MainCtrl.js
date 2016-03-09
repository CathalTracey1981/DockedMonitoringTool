angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location) {

	// Requires all fields to be filled in
	$scope.required = true;

	// If all fields are filled in with valid data, the user is added to the database
	$scope.login = function(){
		console.log($scope.log);
		if($scope.log == null){
			$scope.log = "";
		}else{
			$http.post("/login/", $scope.log).success(function (data) {
				$scope.log = "";
				$location.path('/home');
			});
		}
	};

	$(function(){
		$('.button-checkbox').each(function(){
			var $widget = $(this),
				$button = $widget.find('button'),
				$checkbox = $widget.find('input:checkbox'),
				color = $button.data('color'),
				settings = {
					on: {
						icon: 'glyphicon glyphicon-check'
					},
					off: {
						icon: 'glyphicon glyphicon-unchecked'
					}
				};

			$button.on('click', function () {
				$checkbox.prop('checked', !$checkbox.is(':checked'));
				$checkbox.triggerHandler('change');
				updateDisplay();
			});

			$checkbox.on('change', function () {
				updateDisplay();
			});

			function updateDisplay() {
				var isChecked = $checkbox.is(':checked');
				// Set the button's state
				$button.data('state', (isChecked) ? "on" : "off");

				// Set the button's icon
				$button.find('.state-icon')
					.removeClass()
					.addClass('state-icon ' + settings[$button.data('state')].icon);

				// Update the button's color
				if (isChecked) {
					$button
						.removeClass('btn-default')
						.addClass('btn-' + color + ' active');
				}
				else
				{
					$button
						.removeClass('btn-' + color + ' active')
						.addClass('btn-default');
				}
			}
			function init() {
				updateDisplay();
				// Inject the icon if applicable
				if ($button.find('.state-icon').length == 0) {
					$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
				}
			}
			init();
		});
	});
});