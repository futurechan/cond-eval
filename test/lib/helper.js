var chai = require('chai')
	, expect = chai.expect
	, helper = require('../../src/lib/helper')
	, op = require('../../src/lib/op')

describe('helper', function(){
		
	describe('getFromCtx', function(){
				
		var sut = helper.getFromCtx;
		
		it('should find top level keys', function(){
			
			expect(sut('key', { key: 'hi' })).to.equal('hi');
		})
		
		it('should find nested keys delimited by .', function(){			

			var ctx = { 
				path: { 
					to: { 
						key: 'hi' 
					} 
				} 
			}
			
			expect(sut('path.to.key', ctx)).to.equal('hi');
		})
	})
	
	describe('getComparator', function(){
		
		var sut = helper.getComparator;
		
		it('should find my comparison op', function(){
			 
			 expect(sut('==')).to.equal(op.EQ)
		})
	})
	
	describe('reduceArray', function(){
		
		var sut = helper.reduceArray;
		
		it('should eval my op', function(){
			
			var conds = [
				{ bool : 'bye'},
				{ bool: 'hi' },
				{ bool: 'bye' }
			]
			
			var op = {
				match:function(o){ return o == 'hi'; },
				eval:function(){ return true; }
			}
			
			var evaluator = {
				evaluate : function(){ return true; }					
			}
			
			var res = sut(conds, op, evaluator);
			
			expect(res.length).to.equal(2);
			
		})
	})
})