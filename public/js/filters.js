angular.module('filters', [])
    .filter('containerName', function () {
        'use strict';
        // Take away starting and ending brackets from the 'Container Name'
        return function (container) {
            var data = "";
            angular.forEach(container, function(con){
                data = con.replace("[", " ");
                data = data.replace("/", " ");
            });
            return data;
        };
    })
    .filter('repositoryName', function () {
        'use strict';
        // Format the 'Repository Name' to make it more readable
        return function (repo) {
            var data = "";
            angular.forEach(repo, function (con) {
                data = con.replace("<none>:<none>", " ");
            });
            return data;
        };
    })
    .filter('dateFilter', function () {
        'use strict';
        // Format date
        return function (data) {
            var date = new Date(data * 1000);
            return date.toDateString();
        };
    })
    .filter('convertToBytes', function () {
        'use strict';
        // Convert bytes into readable format
        return function (bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes === 0) {
                return '';
            }
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
            var value = bytes / Math.pow(1024, i);
            var decimalPlaces = (i < 1) ? 0 : (i - 1);
            return value.toFixed(decimalPlaces) + ' ' + sizes[[i]];
        };
    })
    .filter('trimId', function () {
        // Trim the 'Id' to make it presentable on the screen
        return function (value) {
            if (!value) return '';
            var middle = value.length/2;
            value = value.substr(0, middle);
            return value;
        };
    })
    .filter('dateCreated', function () {
        // Format the date to make it readable
        return function (value) {
            if(value == null){
                return;
            }else {
                var date = value.substr(0, 10);
                var time = value.substr(11, 8);
            }
            return date + " at " + time;
        };
    })
    .filter('splitCommand', function () {
        // Take the 'command' from containers and shorten it
        return function (value) {
            var command = value.split(" ");
            return command[0];
        };
    });



