function setCookie(name,value,day,path,domain,secure){
	var cookieTxt=name+"="+value;
	if(day){
		var date=new Date();
		date.setDate(date.getDate()+day);
		cookieTxt+=";expires="+date;
	}
	if(path){
		cookieTxt+=";path="+path;
	}
	if(domain){
		cookieTxt+=";domain="+domain;
	}
		if(secure){
		cookieTxt+=";secure"
	}
	document.cookie=cookieTxt;
}
//setCookie("age",18);
//setCookie("money","moremore",1000);
function getCookie(name){
	var start=0;
	var end=0;
	if(document.cookie.indexOf(name+"")!=-1){
		start=document.cookie.indexOf(name+"");
		end=document.cookie.indexOf(";",start);
		if(end==-1){
		end=document.cookie.length;
		}
//	alert(start+":"+end);
  return document.cookie.substring(start+name.length+1,end);
		
	}
	
}
function unsetCookie(name){
	document.cookie=name+"=;expires="+new Date(0);
}