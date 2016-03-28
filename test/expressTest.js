var request = require('supertest');
describe('loading express', function () {
    var server = require('../server');

    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(200, done);
    });
});