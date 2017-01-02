// JavaScript Document
/*空白节点*/
var prev=function(elem){
	do{elem=elem.previousSibling;}while(elem&&elem.nodeType!=1)
				return elem;
	}
var next=function(elem){
	do{elem=elem.nextSibling;}while(elem&&elem.nodeType!=1)
	return elem;
	}
var first=function(elem){
	elem=elem.firstChild;
	return elem.nodeType!=1?next(elem):elem;
	}
var last=function(elem){
	elem=elem.lastChild;
	return elem.nodeType!=1?prev(elem):elem;
	}
	
/*class*/
document.getElementsByClassName=function(name,type,parent){
	var res=[];	
	var pa=parent||document;	
	var tag=type||"*";	//alert(pa);
	var elems=pa.getElementsByTagName(tag);	
	var reg= reg=new RegExp("(^|\\s)"+name+"($|\\s)");
	for(var i=0;i<elems.length;i++){		
		if(reg.test(elems[i].className)){
		res.push(elems[i]);		  
			}
		}
	return res;
	
	}
var getInnerText=function(elem){
	/*if(typeof elem.textContent=="string"){
		return elem.textContent;
		}else{
			return elem.innerText;
			}*/
		return typeof elem.textContent=="string"?elem.textContent:elem.innerText;
	}

var setInnerText=function(elem,str){
	if(typeof elem.textContent=="string"){
		elem.textContent=str;
		}else{
			elem.innerText=str;
			}
	}

var css=function(elem,name){
	if(elem.style[name]){
		return elem.style[name];
		}
		
	if(elem.currentStyle){
		return elem.currentStyle[name];
		}
	if(document.defaultView&&document.defaultView.getComputedStyle){   var s=document.defaultView.getComputedStyle(elem,null);
	return  s&&s[name];
		}	
	}


// 元素到文档边缘距离
var offsetLeft=function(elem){
	var left=elem.offsetLeft;
	var opa=elem.offsetParent;
	while(null!=opa){
		left+=opa.offsetLeft;
		opa=opa.offsetParent;		
		}
	return left;
	}
var offsetTop=function(elem){
	var top=elem.offsetTop;
	var opa=elem.offsetParent;
	while(null!=opa){
		top+=opa.offsetTop;
		opa=opa.offsetParent;		
		}
	return top;
	}

//元素到父亲元素的距离
var poLeft=function(elem){
	return elem.parentNode==elem.offsetParent?elem.offsetLeft:offsetLeft(elem)-offsetLeft(elem.parentNode);
		}
var poTop=function(elem){
	return elem.parentNode==elem.offsetParent?elem.offsetTop:offsetTop(elem)-offsetTop(elem.parentNode);
		}
		

var resetCSS=function(elem,cssObj){
	var old={};
	for(var k in cssObj){
		old[k]=elem.style[k];
		elem.style[k]=cssObj[k];
		}
	return old;
	}

var setCSS=function(elem,cssObj){
	for(var k in cssObj){
		elem[k]=cssObj[k];
		}
	}
var height=function(elem){
	if(css(elem,"display")!="none"){
		return elem.offsetHeight;
		}
	var old=resetCSS(elem,{display:"block",visibility:"hidden",position:"absolute"});
	var h=elem.offsetHeight||elem.clientHeight;
	setCSS(elem,old);
	return h;
	
	}
var width=function(elem){
	if(css(elem,"display")!="none"){
		return elem.offsetWidth;
		}
	var old=resetCSS(elem,{display:"block",visibility:"hidden",position:"absolute"});
	var w=elem.offsetWidth||elem.clientWidth;
	setCSS(elem,old);
	return w;
	
	}
	

var hide=function(elem){
	var cur_display=css(elem,"display");
	if(cur_display!="none"){
		elem.oldDisplay=cur_display;
		}
	elem.style.display="none";	
	}
var show=function(elem,type){
	
	elem.style.display=type||elem.oldDisplay||"";	
	}

var fadeTo=function(elem,level){
	if(elem.filters){
		elem.style.filter='alpha(opacity='+level*100+')';
		elem.style.zoom='1';
		}else{
			elem.style.opacity=level;
			}

     }
	 
var fadeIn=function(elem,time,fn){
	if(time==undefined){
		time=600};
	fadeTo(elem,0);
	show(elem);
	for(var i=0;i<100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				fadeTo(elem,po/100)
				if(po==99){
					hide(elem);
					if(fn){
						fn();
						}
					}
				},(po/100)*time);
			})()		
		
		}
	
	}
var fadeOut=function(elem,time,fn){
	if(time==undefined){
		time=600};
	fadeTo(elem,1);
	show(elem);
	for(var i=0;i<100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				fadeTo(elem,1-po/100)
				if(po==99){
					hide(elem);
					if(fn){
						fn();
						}
					}
				},(po/100)*time);
			})()		
		
		}
	
	}
var slideDown=function(elem,time){
	show(elem);
	if(time==undefined){
		time=600};
		 h = height(elem);
      	elem.style.height = '0px';
		
		for(var i=0;i<100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				elem.style.height=(po/100*h)+"px";
				
				},(po/100)*time);
			})()		
		
		}
	
	}
var animate=function(elem,obj,time){
	if(time==undefined){time=600};
	
	for(var k in obj){
		(function(){
			var j=k;
			
			
			
		var now=parseInt(css(elem,j));	//alert(now);	
		var yet;
		var s=String(obj[j]).substr(0,2);
		if(s==="+="){
			yet=String(obj[j]).substr(2);
			yet=Number(yet)+now;
			}else if(s==="-="){
				yet=String(obj[j]).substr(2);
			yet=now-Number(yet);
			alert(yet);
				}else{
		var yet=parseInt(obj[j]);
			}
	//alert(yet);
		//console.log(j+"------------------------------"+"out");
		for(var i=0;i<100;i++){
			(function(){
				var po=i;
			
				setTimeout(function(){
					elem.style[j]=((now+po/100*(yet-now)))+"px";
					//	console.log(elem.style[j]+"-----"+j);
					},(po/100)*time);
				})()			
			}//edfor
			})()
	
	}
	
	
	}
		
		
var pageX=function(evt){
	var e=evt||window.event;
	return e.pageX||e.clientX+document.body.scrollLeft;
	}
var pageY=function(event){
	var e=event||window.event;
	return e.pageY||e.clientY+document.body.scrollTop;
	}
var layerX=function(event){
	var e=event||window.event;
	return e.offsetX||e.layerX;
	}
var layerY=function(event){
	var e=event||window.event;
	return e.offsetY||e.layerY;
	}
	
//滚动条位置
var scrollLeft=function(){
		var de=document.documentElement;
		
		return self.pageXOffset||document.body.scrollLeft||(de&&de.scrollLeft);
		
	}
var scrollTop=function(){
		var de=document.documentElement;
		//alert(de&&de.scrollTop);
		return self.pageYOffset||document.body.scrollTop||(de&&de.scrollTop);
	}

var winWidth=function(){
	 var de = document.documentElement;  
	 
	 return self.innerWidth||(de&&de.clientWidth) ||document.body.clientWidth;
	}
var winHeight=function(){
	 var de = document.documentElement;  
	
	 return self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;
	}
		
var addEvent=function(elem,type,fn){
	if(elem.attachEvent){
		elem.attachEvent("on"+type,fn);
		}else{
			elem.addEventListener(type,fn,false);
			}	
	}
var removeEvent=function(elem,type,fn){
	if(elem.detachEvent){
		elem.detachEvent("on"+type,fn);
		}else{
			elem.removeEventListener(type,fn,false);
			}	
	}
var eventTarget=function(e){
	var e=e||window.event;
	if(e.srcElement){
		return e.srcElement;
		}else{
			return e.target;
			}	
	}
var stopEvent=function(e){
	e=e||window.event;
	if(e.stopPropagation){e.stopPropagation();}
	else{
		e.cancelBubble=true;
		}
	}
		
		
var preventDefault=function(e){
	e=e||window.event;
	if(e.preventDefault){e.preventDefault()}
	else{ e.returnValue=false;}
	}
var hasClass=function(elem,name){
	var reg=new RegExp("(^|\\s)"+name+"($|\\s)");
	return reg.test(elem.className);
	}
var addClass=function(elem,name){
	if(!hasClass(elem,name)){
		elem.className+=" "+name
		}
	}
var removeClass=function(elem,name){
	if(hasClass(elem,name)){
		var reg=new RegExp("(^|\\s)"+name+"($|\\s)");
		elem.className=elem.className.replace(reg,'');
		}
	}
	
var toggleClass=function(elem,name){	
	if(hasClass(elem,name)){
		removeClass(elem,name);
		}else{
			addClass(elem,name)
			}
	}
		




function hasAttr(elem,name){
	return elem.getAttribute(name)!=null;
	}
function attr(elem,name,value){
	if(typeof value!='undefined'){
		elem[name]=value;
		
		if(elem.setAttribute){
			elem.setAttribute(name,value)
			}
		}
	return elem[name]||elem.getAttribute(name)||"";
	}
	
	
	
	
	
	
	/*
	function changeColor(color){
		this.style.color=color;
		}
	//changeColor("red");
	var main=document.getElementById("hh");
	changeColor.call(main,"red");
	function User(name,age){
		this.name=name,this.name=age
		this.getAge=function(){
			return age;
			}
		}
	//User.prototype.getName=function(){return this.name};
	var me=new User("mm",25);
	//alert(me.getName())
	alert(me.age);
	//alert(you.constructor);*/
	/*function User(properties){
		
		for(var i in properties){
			(function(obj){
					var p=i; 
					console.log(p+"---------"+obj);
					 obj["get"+p]=function(){
						 return properties[p]
						 } 
					  obj["set"+p]=function(val){
						 properties[p]=val;
						 } 
					  
					  })(this)
			
			}
		}
		
		
		var user=new User({name:"Bob",age:44})
		alert(user.getname());*/
		//原型继承
		/*function Person(name){this.name=name}
		Person.prototype.getName=function(){return this.name}
		function User(name,pass){
			this.name=name;
			this.pass=pass;
			}
		User.prototype=new Person();
		User.prototype.getPassword=function(){return this.password;}
		//类似继承
		
		Function.prototype.method=function(name,func){
			this.prototype[name]=func;
			return this;
			}
		Function.method('inherits',function(parent){
			var depth=0;
			var proto=this.protoype=new Parent();
			this.method('uber',function uber(name){
				var func;
				var ret;
				var v=parent.protoype;
				if(depth){
					for(var i=d;i>0;i++){
						v=v.constructor.prototype;
						}
						func=v[name];
					}else{
						func=proto[name];
						if(func==this[name]){
							func=v[name];
							}
						}
						depth+=1;
											 })
											})*/
		