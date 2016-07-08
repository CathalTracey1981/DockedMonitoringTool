// testing controller
describe('statsController', function() {
    var $httpBackend, $rootScope, createController1, $routeParams;

    // Set up the module
    beforeEach(module('StatsCtrl'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController1 = function() {
            return $controller('statsController', {'$scope' : $rootScope, $routeParams : {id: 1} });
        };

        // Test get stats
        $httpBackend.when('GET', '/containers' + 1 + "/stats?stream=false").respond();

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should get stats', function() {
        $httpBackend.expectGET('/containers');
        var controller = createController1();
        $httpBackend.flush();
    });


});
