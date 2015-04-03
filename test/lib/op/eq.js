var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('EQ', function(){
		
	var sut = op.EQ;
	
	describe('match', function(){
		
		it('should recognize EQ', function(){
		
			expect(sut.match('EQ')).to.be.true;
		})

		it('should recognize eq', function(){
			
			expect(sut.match('eq')).to.be.true;
		})

		it('should recognize =', function(){
			
			expect(sut.match('=')).to.be.true;
		})
		
		it('should recognize ==', function(){
			
			expect(sut.match('==')).to.be.true;
		})
		
		it('should recognize ===', function(){
			
			expect(sut.match('===')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to true if both operands are the same instance', function(){
		
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			var operand = {}
			
			expect(sut.eval(operand, operand, evaluator)).to.be.true;
		})
		
		it('should evaluate to true for truthy comparisons', function(){
		
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			var operand = {}
			
			expect(sut.eval(1, true, evaluator)).to.be.true;
		})

		it('should evaluate to false if both operands are not the same instance', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval({}, {}, evaluator)).to.be.false;
		})
	})
	
})

	