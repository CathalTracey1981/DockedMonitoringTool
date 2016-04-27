module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            '/Users/Cathal/Documents/Docked/public/libs/angular/angular.js',
            '/Users/Cathal/Documents/Docked/public/libs/angular-mocks/angular-mocks.js',
            '/Users/Cathal/Documents/Docked/public/js/controllers/ContainersCtrl.js',
            '/Users/Cathal/Documents/Docked/public/js/controllers/ContainerCtrl.js',
            '/Users/Cathal/Documents/Docked/public/js/controllers/ImageCtrl.js',
            '/Users/Cathal/Documents/Docked/public/js/controllers/ImagesCtrl.js',
            '/Users/Cathal/Documents/Docked/public/js/controllers/InfoCtrl.js',
            '/Users/Cathal/Documents/Docked/public/js/controllers/StatsCtrl.js',
            'test/**/*.js'
        ],
        browsers: ['Chrome'],
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: { '/Users/Cathal/Documents/Docked/public/js/controllers/*js': ['coverage'] }
    });
};