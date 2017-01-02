function setCookie(name,value,day,path){
	var cookieText=name+"="+value;
	if(day){
		var d=new Date();
		d.setDate(d.getDate()+30);
		
		cookieText+=";expires="+d;
	}
	if(path){
		cookieText+=";path="+path;
	}
	document.cookie=cookieText;	
}
//setCookie("age",18,7);

function getCookie(name){
	var start=0;
	var end=0;
	if(document.cookie.indexOf(name+"=")!=-1){
		start=document.cookie.indexOf(name+"=");		
		end=document.cookie.indexOf(";",start);	
		if(end==-1){	end=document.cookie.lenght;	}
	   return document.cookie.substring(start+name.length+1,end);
	}		
}
//alert(document.cookie);
//alert(getCookie("age"));
function unsetCookie(name){
	document.cookie=name+"=;expires="+new Date(0);
}