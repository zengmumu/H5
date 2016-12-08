define(function(require,exports,module){
	// require 需要
	// exports 导出
	// module 模块
	var b=require("b");
	function fun1 (){
		alert("这是一个私有方法");
	}
	var money=200;
	exports.fun2=function(){
		alert("这是一个暴露给外部的方法")
		b.myfun();
	}
	exports.dollar=50;
})
