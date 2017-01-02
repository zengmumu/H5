//----------------------------------查找上一个 兄弟元素
function prev(elem){
	do{
		elem=elem.previousSibling

	}while(elem.nodeType!=1);
return elem;
}

//----------------------------------查找下一个 兄弟元素
function next(elem){
	do{
		elem=elem.nextSibling;
//alert(elem);
	}while(elem&&elem.nodeType!=1)
return elem;
}

//----------------------------------查找第一个子元素
function first(elem){
	elem=elem.firstChild;
	if(elem.nodeType!=1){
		elem=next(elem);
	}
return elem;
}

//----------------------------------查找第最后个子元素
function last(elem){
	elem=elem.lastChild;
	if(elem.nodeType!=1){
		elem=prev(elem);
	}
return elem;
}

//-----------------------------------查找第n个
function eq(elem,n){
var elems=elem.childNodes;
var myelems=[];
for(var i=0;i<elems.length;i++){
	if(elems[i].nodeType==1){
	myelems.push(elems[i]);
	}
}
return myelems[n];
}
