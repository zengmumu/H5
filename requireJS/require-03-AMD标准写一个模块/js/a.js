define(["./b.js"],function(b){
	var fun1=function(){
		alert("its works");
		fun2();
		b.doit()
	}
	var fun2=function(){
		alert("我也想你");
	}
	var money=18;
	return {fun1:fun1,money:money}
})
