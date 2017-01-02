$(function(){
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"190px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#e60044"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#333"})	
	});
});
function goTop(){
	$('html,body').animate({'scrollTop':0},300);
}
$(function(){
	$(".codebox").hide();
	$(".sidebox1").hover(function(){
	$(this).css({"opacity":"1","background":"#e60044"})	
	$(".codebox").show("slow");
	},
	function(){
    $(this).css({"opacity":"0.8","background":"#333"})	
	$(".codebox").hide("slow");
	})
})
$(function(){
	window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t>55){ 
		$(".header").addClass("acurrent");
	}else{
		$(".header").removeClass("acurrent");
	}
	var a = $(".fen01").height();
	var n = a-101;
	if(t>n){ 
		$(".fenye_left").addClass("ontop");
	}else{
		$(".fenye_left").removeClass("ontop");
	}
}
	
	})
