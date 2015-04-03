var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('XOR', function(){
		
	var sut = op.XOR;
	
	describe('match', function(){
		
		it('should recognize XOR', function(){
			
			expect(sut.match('XOR')).to.be.true;
		})
		
		it('should recognize or', function(){
			
			expect(sut.match('xor')).to.be.true;
		})
		
		it('should recognize ^', function(){
			
			expect(sut.match('^')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to false if both operands evaluate to true', function(){
			
			var evaluator = {
				evaluate: function(){ return true}
			}
			
			expect(sut.eval({}, {}, evaluator)).to.be.false;
		})
		
		it('should evaluate to false if both operands evaluate to false', function(){
			
			var evaluator = {
				evaluate: function(){ return false}
			}
			
			expect(sut.eval({}, {}, evaluator)).to.be.false;
		})
		
		it('should evaluate to true if one operand is true and the other is false', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(false, true, evaluator)).to.be.true;
			expect(sut.eval(true, false, evaluator)).to.be.true;
		})
	})
	
})

	