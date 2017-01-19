//-----------------创建的插件-----------------------------------
			function Scroller(opt){
				this.outer=opt.el;//最外面的一层
				this.init()	
				this.Event=new Event("on-scroll");// 自定义了一个事件
				
			}
			Scroller.prototype.init=function(){
//				console.log("初始化")
				this.renderDom()
				this.bindDom()
			}
			Scroller.prototype.renderDom=function(){
//				console.log("渲染")
				// 创建一个wrappert
				this.outer.style.height="100%";
				this.outer.style.overflow="hidden";
				this.dom=this.outer.querySelector(".scroll-wraper");
				this.dom.style.transform="translateY(0px)";
//				this.dom=document.createElement("div");//创建div
//				this.dom.className="scroll-wraper";//设置class
//				this.dom.innerHTML=this.outer.innerHTML;//设置内容
//			
//				this.outer.innerHTML="";//请空里面的内容
//				this.outer.appendChild(this.dom);//创建的内容插入到最外层里面
			}
			Scroller.prototype.bindDom=function(){
				var main=this;//把this 传给main
				// 添加开始touch 事件
				this.dom.addEventListener("touchstart",startHd,false);
				this.dom.addEventListener("touchmove",moveHd,false);
				this.dom.addEventListener("touchend",endHd,false);
				// 添加鼠标事件
				this.dom.addEventListener("mousedown",startHd,false);
//				this.dom.addEventListener("mousemove",moveHd,false);
				this.dom.addEventListener("mouseup",endHd,false);
				// 添加滚轮事件
				this.dom.addEventListener("mousewheel",wheelHd,false)
				//01 记录开始点击的区域
				var startY;
				//02 记录移动了多少的距离
				var offsetY=0;
				//03 记录 之前的 this.dom 的 translateY值
				var oldTranslateY=0;
				// 加速  时间差
				// 03 记录开始的时间
				var startT;
				// 04 记录时间差
				var offTime;
				
				function startHd(event){
					// 关闭动画
					main.dom.style.transition="";
					//clientY 窗口中鼠标的位置
					startY=event.targetTouches?event.targetTouches[0].pageY:event.clientY;
					//获取当前的滚动值
					oldTranslateY=main.getScrollY();
					startT=new Date().getTime();// 获取当前的时间戳
//					console.log(startY);
					main.dom.addEventListener("mousemove",moveHd,false);
				}
				function moveHd(event){
					// 打开动画
					
					var nowY=event.targetTouches?event.targetTouches[0].pageY:event.clientY;
					offsetY=nowY-startY;
					// 设置滚动值是 偏移的距离加上 之前滚动的距离
					main.scrollTo(offsetY+oldTranslateY);
					
				}
				function wheelHd (event){
					
					oldTranslateY=main.getScrollY();
					offsetY=event.deltaY/-2;					
					main.scrollTo(offsetY+oldTranslateY);
					endHd(event);
				}
				function endHd(event){
					main.dom.removeEventListener("mousemove",moveHd,false);
					// 打开动画
					main.dom.style.transition="all 0.7s ease-in-out";
					// 获得时间差
					offTime=new Date().getTime()-startT;
					// 加速度
					var speed=(400-offTime)/20;
					if(speed<=1||!speed){speed=1};
					main.scrollTo(oldTranslateY+speed*offsetY);
//					console.log("gotop",oldTranslateY,speed,offsetY);
					// 位置判断 1，不能大于0， 不能小于outer高-this.dom的高
					var scrollY=main.getScrollY();
					if(scrollY>0){
						main.scrollTo(0);					
						
					}
				
					var canscroll=main.outer.offsetHeight-main.dom.offsetHeight;
						
					if(scrollY<canscroll){
						
						if(canscroll<=0){
							main.scrollTo(canscroll);	
						}else{
//							main.scrollTo(0);
						}
					}
					setTimeout(function(){
						main.Event.scrollY=main.getScrollY();//给事件带了一个scrollY属性
						main.outer.dispatchEvent(main.Event);
					},701)
					// 发送一个事件
					
				}
				
			}
		// 获取元素的 当前滚动值
		Scroller.prototype.getScrollY=function(){
			var str=this.dom.style.transform;		
			return parseInt(str.substr(11));
		}
		// 在现有的基础上滚动 距离
		Scroller.prototype.scrollBy=function(num){
			this.dom.style.transition="all 0.7s ease-in-out";
			var nowY=this.getScrollY();
			this.scrollTo(nowY+num);
		}
		// 设置元素的 滚动位置
		Scroller.prototype.scrollTo=function(num){	
//			this.dom.style.transition="all 0.7s ease-in-out";
			this.dom.style.transform="translateY("+num+"px)";
			var main=this;
			setTimeout(function(){
				main.dom.style.transition="";	
			},700)
		}
			