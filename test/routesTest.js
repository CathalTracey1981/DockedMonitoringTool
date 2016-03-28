var request = require('supertest');
var route = require('../app/routes');
var express = require('express');
var server = require('../server');
var app = server;
describe('loading express', function () {

// comment
    it('responds to /', function testSlash(done) {
        request(express)
            .get('/info')
            .expect(200, done);
    });
    /*it('404 everything else', function testPath(done) {
        request(route)
            .get('/foo/bar')
            .expect(200, done);
    });*/
});

describe('tests', function () {
    it.only('tests the info method', function(req, res, next)
    {

        request(route)
            .get(express.get('/info'))


            //.expect(404);
            //.get(route(app))
        console.log(route);

    });
});