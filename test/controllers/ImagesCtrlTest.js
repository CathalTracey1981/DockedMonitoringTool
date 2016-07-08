// testing imagesController
describe('imagesController', function() {
    var $httpBackend, $rootScope, createController1;

    // Set up the module
    beforeEach(module('ImagesCtrl'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController1 = function() {
            return $controller('imagesController', {'$scope' : $rootScope });
        };

        // Test get containers function
        $httpBackend.when('GET', '/images').respond();

        // Test get containers function
       // $httpBackend.when('GET', '/images/' + 1).respond();

        // Test get runningContainers function
        //$httpBackend.when('POST', '/pull').respond();

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should get containers', function() {
        $httpBackend.expectGET('/images');
        var controller = createController1();
        $httpBackend.flush();
    });

   /* it('should get images with id', function() {
        $httpBackend.expectGET('/images/' + 1);
        var controller = createController1();
        $httpBackend.flush();
    });*/

    /*it('should get running containers', function() {
        $httpBackend.expectPOST('/pull');
        var controller = createController1();
        $httpBackend.flush();
    });*/


});