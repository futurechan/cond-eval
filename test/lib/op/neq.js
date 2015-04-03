var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('NEQ', function(){
		
	var sut = op.NEQ;
	
	describe('match', function(){
		
		it('should recognize NEQ', function(){
		
			expect(sut.match('NEQ')).to.be.true;
		})

		it('should recognize neq', function(){
			
			expect(sut.match('neq')).to.be.true;
		})

		it('should recognize !=', function(){
			
			expect(sut.match('!=')).to.be.true;
		})
		
		it('should recognize !==', function(){
			
			expect(sut.match('!==')).to.be.true;
		})
		
		it('should recognize <>', function(){
			
			expect(sut.match('<>')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to false if both operands are the same instance', function(){
		
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			var operand = {}
			
			expect(sut.eval(operand, operand, evaluator)).to.be.false;
		})
		
		it('should evaluate to true for mimatched values', function(){
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			
			expect(sut.eval(0, 1, evaluator)).to.be.true;
		})
	})
	
})

	