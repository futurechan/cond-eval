var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('LTE', function(){
		
	var sut = op.LTE;
	
	describe('match', function(){
		
		it('should recognize LTE', function(){
			
			expect(sut.match('LTE')).to.be.true;
		})
		
		it('should recognize lte', function(){
			
			expect(sut.match('lte')).to.be.true;
		})
		
		it('should recognize <=', function(){
			
			expect(sut.match('<=')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to true if the left operand is LTE the right operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(0, 1, evaluator)).to.be.true;
			expect(sut.eval(1, 1, evaluator)).to.be.true;
		})
		
		it('should evaluate to false if the right operand is GT the left operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(1, 0, evaluator)).to.be.false;
		})
	})
	
})

	