var chai = require('chai')
	, expect = chai.expect
	, op = require('../../../src/lib/op')
	
	
describe('NOT', function(){
		
	var sut = op.NOT;
	
	describe('match', function(){
		
		it('should recognize NOT', function(){
			
			expect(sut.match('NOT')).to.be.true;
		})
		
		it('should recognize not', function(){
			
			expect(sut.match('not')).to.be.true;
		})
		
		it('should recognize !', function(){
			
			expect(sut.match('!')).to.be.true;
		})
	})

	describe('eval', function(){
		
		it('should evaluate to false if both operands evaluate to true', function(){
			
			var evaluator = {
				evaluate: function(){ return true}
			}
			
			expect(sut.eval({}, evaluator)).to.be.false;
		})
		
		it('should evaluate to false if both operands evaluate to false', function(){
			
			var evaluator = {
				evaluate: function(){ return false}
			}
			
			expect(sut.eval({}, evaluator)).to.be.true;
		})
		
	})
	
})

	