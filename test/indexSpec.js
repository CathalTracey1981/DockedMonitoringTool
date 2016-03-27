var chai = require('chai');
var expect = require('chai').expect;
var word = require('./index');

describe('Sanitize', function () {

    it('returns lower case of a string', function(){

        beforeEach(function () {
            console.log('before');
        });

        afterEach(function () {
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