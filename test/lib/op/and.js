var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('AND', function(){
		
	var sut = op.AND;
	
	describe('match', function(){
		
		it('should recognize AND', function(){
		
			expect(sut.match('AND')).to.be.true;
		})

		it('should recognize and', function(){
			
			expect(sut.match('and')).to.be.true;
		})

		it('should recognize &&', function(){
			
			expect(sut.match('&&')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to true if both operands evaluate to true', function(){
		
			var evaluator = {
				evaluate: function(){ return true}
			}
			
			expect(sut.eval({}, {}, evaluator)).to.be.true;
		})

		it('should evaluate to false if either operand evalutes to false', function(){
			
			var evaluator = {
				evaluate: function(operand){ return operand}
			}
			
			expect(sut.eval(false, true, evaluator)).to.be.false;
			expect(sut.eval(true, false, evaluator)).to.be.false;
		})
	})
	
})

	