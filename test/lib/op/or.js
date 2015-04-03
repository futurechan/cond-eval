var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('OR', function(){
		
	var sut = op.OR;
	
	describe('match', function(){
		
		it('should recognize OR', function(){
			
			expect(sut.match('OR')).to.be.true;
		})
		
		it('should recognize or', function(){
			
			expect(sut.match('or')).to.be.true;
		})
		
		it('should recognize ||', function(){
			
			expect(sut.match('||')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to true if both operands evaluate to true', function(){
			
			var evaluator = {
				evaluate: function(){ return true}
			}
			
			expect(sut.eval({}, {}, evaluator)).to.be.true;
		})
		
		it('should evaluate to true if either operand evalutes to false', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(false, true, evaluator)).to.be.true;
			expect(sut.eval(true, false, evaluator)).to.be.true;
		})
		
		it('should evaluate to false if both operands evalute to false', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(false, false, evaluator)).to.be.false;
		})
	})
	
})

	