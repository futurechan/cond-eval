var chai = require('chai')
    , expect = chai.expect
    , op = require('../../../src/lib/op')


describe('NOT_CONTAINS', function() {

    var sut = op.NOT_CONTAINS;

    describe('match', function () {

        it('should recognize NOT_CONTAINS', function () {

            expect(sut.match('NOT_CONTAINS')).to.be.true;
        })

        it('should recognize ![]', function () {

            expect(sut.match('![]')).to.be.true;
        })
    })

    describe('eval', function(){

        it('should evaluate to true if the right operand string is not found within left operand string', function(){

            var evaluator = {
                evaluate: function(operand){ return operand}
            }

            expect(sut.eval('abcde', 'xyz', evaluator)).to.be.true;
        })

        it('should evaluate to true if the left operand is an array and the right operand does not match a member in the set', function(){

            var evaluator = {
                evaluate: function(operand){ return operand}
            }

            expect(sut.eval(['a', 'b', 'c'], 'd', evaluator)).to.be.true;
        })


    })
})