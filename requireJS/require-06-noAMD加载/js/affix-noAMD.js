;(function($){
		$.fn.extend({
			"affix":function(opt){
				var DEFAULT={"width":"100%",offset:0};
				var options=$.extend({},DEFAULT,opt);
				console.log(options);
				this.each(function(){
					var dom=$(this);
					var offT=dom.offset().top;
					$(window).bind("scroll",checkScroll);
					function checkScroll(){
						var scrollT=$(window).scrollTop();
						if(scrollT>=offT){
							dom.css({"position":"fixed",top:options.offset,left:"00",width:options.width})
						}else{
							dom.css({"position":"static"});
						}
					}
				})
			}
		})
	})(jQuery)