// testing infoController
describe('infoController', function() {
    var $httpBackend, $rootScope, createController1;

    // Set up the module
    beforeEach(module('InfoCtrl'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController1 = function() {
            return $controller('infoController', {'$scope' : $rootScope });
        };

        // Test get info function
        $httpBackend.when('GET', '/info').respond();


    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should get info', function() {
        $httpBackend.expectGET('/info');
        var controller = createController1();
        $httpBackend.flush();
    });


});