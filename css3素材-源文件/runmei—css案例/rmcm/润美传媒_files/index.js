$(function(){
	$(".index_content01 li").hover(function(){
		$(this).children(".big").show();
		},function(){
		$(this).children(".big").hide();
			})
	})
$(function(){
	$(".hua li").hover(function(){
		$(this).children(".fugai").slideDown(500);
		},function(){
		$(this).children(".fugai").slideUp(500);
			})
	})
$(function(){
	$(".js_right").hover(function(){
		$(this).children(".aaa").show();
		},function(){
		$(this).children(".aaa").hide();
			})
	})	