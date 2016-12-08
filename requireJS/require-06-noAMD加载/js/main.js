require.config({
	paths:{
		"jquery":["./jquery-2.0.2"],
		
	},
	shim:{
		"affix-noAMD": ["jquery"]
		
	}
})
require(["affix-noAMD"],function(){
	$(".nav").affix();
	$(".aside").affix({"width":250,offset:50});
	
	
})
