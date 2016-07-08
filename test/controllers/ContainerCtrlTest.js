// testing containerController
describe('containerController', function() {
    var $httpBackend, $rootScope, createController1;

    // Set up the module
    beforeEach(module('ContainerCtrl'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController1 = function() {
            return $controller('containerController', {'$scope' : $rootScope, $routeParams : {id: 1} });
        };

        // Test get containers with id function
        $httpBackend.when('GET', '/containers/' + 1).respond();

        // Test remove container
        $httpBackend.when('DELETE', '/containers/' + 1).respond();

        // Test start a container
        $httpBackend.when('POST', '/containers/' + 1 + "/start").respond();

        // Test stop a container
        $httpBackend.when('POST', '/containers/' + 1 + "/stop").respond();

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should get containers', function() {
        $httpBackend.expectGET('/containers/' + 1);
        var controller = createController1();
        $httpBackend.flush();
    });

    it('should delete containers', function() {

        $httpBackend.expectDELETE('/containers/' + 1);
        var controller = createController1();
        $httpBackend.flush();
    });

    it('should start a container', function() {

        $httpBackend.expectPOST('/containers/' + 1 + "/start");
        var controller = createController1();
        $httpBackend.flush();
    });

    it('should start a container', function() {

        $httpBackend.expectPOST('/containers/' + 1 + "/stop");
        var controller = createController1();
        $httpBackend.flush();
    });


});

