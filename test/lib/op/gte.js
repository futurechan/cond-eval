var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('GTE', function(){
		
	var sut = op.GTE;
	
	describe('match', function(){
		
		it('should recognize GTE', function(){
			
			expect(sut.match('GTE')).to.be.true;
		})
		
		it('should recognize gte', function(){
			
			expect(sut.match('gte')).to.be.true;
		})
		
		it('should recognize >=', function(){
			
			expect(sut.match('>=')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to false if the left operand is LT the right operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(0, 1, evaluator)).to.be.false;
		})
		
		it('should evaluate to true if the right operand is GTE the left operand', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
						
			expect(sut.eval(1, 1, evaluator)).to.be.true;
			expect(sut.eval(1, 0, evaluator)).to.be.true;
		})
	})
	
})

	