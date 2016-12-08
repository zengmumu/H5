require.config({
	paths:{
		"jquery":["./jquery-2.0.2"],
		"affix":["./jquery.affix"]
	}
})
require(["affix"],function(){
	$(".nav").affix();
	$(".aside").affix({"width":250,offset:50});
	
	
})
