var chai = require('chai')
    , expect = chai.expect
    , op = require('../../../src/lib/op')


describe('CONTAINS', function() {

    var sut = op.CONTAINS;

    describe('match', function () {

        it('should recognize CONTAINS', function () {

            expect(sut.match('CONTAINS')).to.be.true;
        })

        it('should recognize []', function () {

            expect(sut.match('[]')).to.be.true;
        })
    })

    describe('eval', function(){

        it('should evaluate to true if the left operand is a string and the right operand is a substring', function(){

            var evaluator = {
                evaluate: function(operand){ return operand}
            }

            expect(sut.eval('abcde', 'bcd', evaluator)).to.be.true;
        })

        it('should evaluate to true if the left operand is an array and the right operand matches a member in the set', function(){

            var evaluator = {
                evaluate: function(operand){ return operand}
            }

            expect(sut.eval(['a', 'b', 'c'], 'b', evaluator)).to.be.true;
        })


    })
})