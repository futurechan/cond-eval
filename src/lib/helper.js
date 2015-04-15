var op = require('./op')
	, compOps = [op.GT, op.GTE, op.LT, op.LTE, op.EQ, op.NEQ, op.CONTAINS, op.NOT_CONTAINS]
;

module.exports.reduceArray = function(conditions, op, evaluator){

	var output = [];

	var carry;
	
	for(var i=conditions.length-1; i>=0; i--){
		
		if(!carry) carry = conditions[i];
		
		var l = (i > 0) ? conditions[i-1] : null;
		
		if(!l || !op.match(carry.bool)){
			output.push(carry);
			carry = null;
		}else{
			carry = {
				bool: l.bool,
				value: op.eval(l, carry, evaluator)
			}
		}
	}

	return output.reverse();
}

module.exports.getFromCtx = function(field, ctx){
	
	var fields = field.split('.');

	fields.forEach(function(f){
		ctx = ctx[f];
	})

	return ctx;
}

module.exports.getComparator = function(op){
	for(var i=0; i < compOps.length; i++){
		var comp = compOps[i];

		if(comp.match(op)) return comp;
	}
}