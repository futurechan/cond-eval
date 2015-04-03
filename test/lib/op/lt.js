var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('LT', function(){
		
	var sut = op.LT;
	
	describe('match', function(){
		
		it('should recognize LT', function(){
			
			expect(sut.match('LT')).to.be.true;
		})
		
		it('should recognize lt', function(){
			
			expect(sut.match('lt')).to.be.true;
		})
		
		it('should recognize <', function(){
			
			expect(sut.match('<')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to true if the left operand is LT the right operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(0, 1, evaluator)).to.be.true;
		})
		
		it('should evaluate to false if the right operand is GTE the left operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(1, 1, evaluator)).to.be.false;
			expect(sut.eval(1, 0, evaluator)).to.be.false;
		})
	})
	
})

	