/*
var chai = require('chai');
var expect = require('chai').expect;
var word = require('./index');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var info = require('../app/routes');

describe('Sandfitize', function () {

    it('returns lower case of a string', function(){

        before(function () {
            console.log('before');
        });

        after(function () {
            console.log('after');
        });

        var inputWord = 'hello world';
        var outputWord = word.sanatize(inputWord);

        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLO world');
        expect(outputWord).to.be.a('string');
        expect(outputWord).to.not.be.a('number');
        expect(outputWord).to.contain('hello');
    });

    it('returns removes any hyphens', function () {

        var inputWord = 'HELLO-WORLD';
        var outputWord = word.sanatize(inputWord);

        expect(outputWord).to.equal('hello world');
    });
});

describe('tests', function () {
    it('tests the info method', function()
    {
        var inputWord = 'hello-world';
        var outputWord = word.sanatize(inputWord);
        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLO world');

    });
});

describe('info', function () {
    it('info', function()
    {
        var inputWord = 1;
        var outputWord = info.info(inputWord);
        expect(outputWord).to.equal(1);
        //expect(outputWord).to.not.equal('HELLO world');

    });
});

describe('Tokenize', function () {
    it('returns an array of words', function()
    {
        var sentence = 'hello world';
        var outputWord = word.tokenize(sentence);
        expect(outputWord).to.include.members(['hello', 'world']);

    });
});

/!*
describe('Github info', function () {
    it.only('returns github details', function(done){
        word.info(function (reply) {
            expect(reply.MemoryLimit).to.equal(true);
            done();
        });
    })
});*!/

describe('Info Language', function () {
    it('returns language', function (done) {
        var docker = {
            'language': 'Assembly'
        };

        var stub = sinon.stub().callsArgWith(0, docker);
        info.infoLang(stub, function (reply) {
            console.log(reply);
            expect(reply).to.equal('Language is Assembly');
            done();
        });
    })
});
*/
