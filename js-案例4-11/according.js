function according(obj){	
				this.opt=obj;//参数
				this.dom=document.getElementsByClassName(this.opt.elem)[0];
				this.heads=this.dom.getElementsByClassName(this.opt.title);//获取h标签
				this.contents=this.dom.getElementsByClassName(this.opt.content);
				this.De=obj.Default;//获取默认的高亮元素
				this.h_head;//以前单击的元素（默认单击）
				this.h_content;//以前默认显示的元素
				this.init(); 
				this.bindDom()
				
				//[1] 单击标题 让对应的div显示
				//[2] 让以前显示的显示隐藏 
				//      让以前高亮的现在不高亮 让现在高亮
				//[3]  让单击的变成高亮的元素 让现在显示的变成 显示的元素
				//[4]  如果单击的就是高亮的 往下不执行
	
			}
according.prototype.init=function(){

				for(var i=0;i<this.heads.length;i++){
				if(this.De==i){
					this.heads[i].className=this.opt.title+" active";
//					contents[i].style.display="block";
					this.contents[i].className=this.opt.content;
					this.h_head=this.heads[i];
					this.h_content=this.contents[i];
				}else{
				this.heads[i].className=this.opt.title;
//					contents[i].style.display="none";
					this.contents[i].className=this.opt.content+" hide";
				}
			}
	
	
}

according.prototype.bindDom=function(){
	var main=this;
	for(var i=0;i<main.heads.length;i++){
				(function(){
					var j=i;
					main.heads[j].onclick=function(){
//					contents[j].style.display="block";	
					main.contents[j].className=main.opt.content;
					//当前单击的元素变亮
					main.heads[j].className=main.opt.title+" active";
					//2 以前显示的现在隐藏
//					h_content.style.display="none";
					main.h_content.className=main.opt.content+" hide";
					//以前高亮的 不高亮
					main.h_head.className=main.opt.title;
					
					//让现在单击的元素变成高亮
					main.h_head=main.heads[j];
					main.h_content=main.contents[j];
					}
					
				})()//ni ed
				
			}//for ed
}
