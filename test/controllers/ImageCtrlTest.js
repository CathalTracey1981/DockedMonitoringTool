// testing controller
describe('imageController', function() {
    var $httpBackend, $rootScope, createController1, $routeParams;

    // Set up the module
    beforeEach(module('ImageCtrl'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController1 = function() {
            return $controller('imageController', {'$scope' : $rootScope, $routeParams : {id: 1} });
        };

        // Test get images with id function
        $httpBackend.when('GET', '/images/' + 1).respond();

        // Test remove image
        $httpBackend.when('DELETE', '/images/' + 1).respond();

        // Test  image history
        $httpBackend.when('GET', '/images/' + 1 + '/history').respond();



    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should get images', function() {
        $httpBackend.expectGET('/images/' + 1);
        var controller = createController1();
        $httpBackend.flush();
    });

    it('should delete images', function() {

        $httpBackend.expectDELETE('/images/' + 1);
        var controller = createController1();
        $httpBackend.flush();
    });

    it('should delete image history', function() {

        $httpBackend.expectGET('/images/' + 1 + '/history');
        var controller = createController1();
        $httpBackend.flush();
    });



});

