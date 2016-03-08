angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		// Info Page
		.when('/info', {
			templateUrl: 'views/info.html',
			controller: 'infoController'
		})
		.when('/containers', {
			templateUrl: 'views/containers.html',
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
		.when('/create/', {
			templateUrl: 'views/create.html',
			controller: 'createController'
		})
		.when('/stack/', {
			templateUrl: 'views/stack.html',
			controller: 'stackController'
		})
		.when('/stats/:id', {
			templateUrl: 'views/stats.html',
			controller: 'statsController'
		});

	$locationProvider.html5Mode(true);

}]);