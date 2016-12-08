define(function(require,exports,module){
	var $=require("jquery");
	exports.toast=function(msg,time){
		var msg=msg||"提示信息";
		var time=time||400;
		$("#toast").remove();
		$("body").append($('<div id="toast"></div>'));
		$("#toast").html(msg);
		setTimeout(function(){
			$("#toast").fadeOut();
		},time)
	}
})
