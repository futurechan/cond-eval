var chai = require('chai')
	, expect = chai.expect
	, sut = require('../src/index')
;

describe('index', function(){
	
	it('should work for simple expressions', function(){
		
		var res = sut({ field1: 'yes' }, { leftOperand: 'field1', comparison:'=', rightOperand:'yes'});
		
		expect(res).to.be.true;
	})
	
	it('should work for arrays', function(){
		
		var arr = {
				conditions: [{ leftOperand: 'field1', comparison:'=', rightOperand:'yes'}]
		}
		
		var res = sut({ field1: 'yes' }, arr);
		
		expect(res).to.be.true;
	})
	
	it('should work for trees', function(){

		var t1 = [
			{
				"leftOperand":"this",
				"comparison":"=",
				"rightOperand":"yes"
			},
			{
				"bool":"AND",
				"conditions":[
					{
						"leftOperand":"blah",
						"comparison":"=",
						"rightOperand":"yah"
					},
					{
						"bool":"OR",
						"leftOperand":"foh",
						"comparison":"=",
						"rightOperand":"meh"
					}
				]
			}
		]

		var t2 = [
			{
				"leftOperand":"this",
				"comparison":"=",
				"rightOperand":"nay"
			},
			{
				"bool":"AND",
				"conditions":[
					{
						"leftOperand":"blah",
						"comparison":"=",
						"rightOperand":"yah"
					},
					{
						"bool":"OR",
						"leftOperand":"foh",
						"comparison":"=",
						"rightOperand":"no"
					}
				]
			}
		]
		
		var ctx = {
			"this": "yes",
			"blah": "yah",
			"foh": "no"
		}
		
		expect(sut(ctx, t1)).to.be.true;
		expect(sut(ctx, t2)).to.be.false;
	})
})