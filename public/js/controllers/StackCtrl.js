angular.module('StackCtrl', []).controller('stackController', function($scope, $http) {

    // =========== Mean Stack ====================
    $http.get("/mongoImage/").success(function (data) {
        console.log(data);
        $scope.mongo = data;
    });

    $http.get("/nodeImage/").success(function (data) {
        console.log(data);
        $scope.node = data;
    });

    //========== Java Stack ====================
    $http.get("/javaImage/").success(function (data) {
        console.log(data);
        $scope.java = data;
    });
    $http.get("/jettyImage/").success(function (data) {
        console.log(data);
        $scope.jetty = data;
    });
    $http.get("/tomcatImage/").success(function (data) {
        console.log(data);
        $scope.tomcat = data;
    });
    $http.get("/mySqlImage/").success(function (data) {
        console.log(data);
        $scope.mySql = data;
    });
});
