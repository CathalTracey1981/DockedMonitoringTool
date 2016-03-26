angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegisterController'
		})
		.when('/info', {
			templateUrl: 'views/info.html',
			controller: 'infoController'
		})
		.when('/containers', {
			templateUrl: 'views/containers.html',
			controller: 'containersController'
		})
		.when('/runningContainers', {
			templateUrl: 'views/runningContainers.html',
			controller: 'containersController'
		})
		.when('/containers/:id', {
			templateUrl: 'views/container.html',
			controller: 'containerController'
		})
		.when('/images', {
			templateUrl: 'views/images.html',
			controller: 'imagesController'
		})
		.when('/images/:id', {
			templateUrl: 'views/image.html',
			controller: 'imageController'
		})
		.when('/stats/:id', {
			templateUrl: 'views/stats.html',
			controller: 'statsController'
		});
}]);