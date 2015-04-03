var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('GT', function(){
		
	var sut = op.GT;
	
	describe('match', function(){
		
		it('should recognize GT', function(){
			
			expect(sut.match('GT')).to.be.true;
		})
		
		it('should recognize gt', function(){
			
			expect(sut.match('gt')).to.be.true;
		})
		
		it('should recognize >', function(){
			
			expect(sut.match('>')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to false if the left operand is LTE the right operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(0, 1, evaluator)).to.be.false;
			expect(sut.eval(1, 1, evaluator)).to.be.false;
		})
		
		it('should evaluate to true if the right operand is GT the left operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(1, 0, evaluator)).to.be.true;
		})
	})
	
})

	