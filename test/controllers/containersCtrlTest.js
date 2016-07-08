// testing containersController
describe('containersController', function() {
    var $httpBackend, $rootScope, createController1;
    // Set up the module
    beforeEach(module('ContainersCtrl'));
    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');
        createController1 = function() {
            return $controller('containersController', {'$scope' : $rootScope });
        };
        // Test get containers function
        $httpBackend.when('GET', '/containers').respond();
        // Test get runningContainers function
        $httpBackend.when('GET', '/runningContainers').respond();
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should get containers', function() {
        $httpBackend.expectGET('/containers');
        var controller = createController1();
        $httpBackend.flush();
    });

    it('should get running containers', function() {
        $httpBackend.expectGET('/runningContainers');
        var controller = createController1();
        $httpBackend.flush();
    });


});