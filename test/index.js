/*
exports.sanatize = function (word) {
    return word.toLowerCase().replace(/-/g, ' ');
};

exports.tokenize = function(sentence){
    return sentence.split(' ');
};

exports.info = function (callback) {
    console.log('Inside info function');
    var http = require('http');
    var options = {
        host: '192.168.99.100',
        port: '4243',
        path: '/info',
        method: 'GET'

    };

    var str = '';
    http.request(options, function (response) {
        response.on('data', function(data){
            str += data;
        });

        response.on('end', function () {
            callback(JSON.parse(str));
        });

        response.on('error', function (error) {
            console.log(error);
            callback(error);
        })

    })
        .end()
};

exports.infoLang = function(infoFunc, callback){
    infoFunc(function (reply) {
        callback('Language is ' + reply.language);
    })
};

*/
