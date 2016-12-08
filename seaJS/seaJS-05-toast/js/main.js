seajs.config({
	alias:{
		jquery:"/模块化/12.8seaJS/seaJS-05-toast/js/jquery-3.1.0"
	}
})
seajs.use(["toast","jquery"],function(t,$){
	t.toast();
	$("h1").click(function(){
		t.toast("loveSea",2000);
	})
	
})
