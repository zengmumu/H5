<template>
	<div class="row">
	<div class="col-20">
		<div class="side">
			<div class="scroll-wraper">
				<div class="item" :class="{'active':item==currentItem}" v-for="item in goods" v-on:click="scollPo(item)">{{item.name}}</div>
			</div>
		</div>
	</div>
	<div class="col-80">
		<div class="foods">
			<div class="scroll-wraper">
				<div class="list" v-for="item in goods">
					<div class="item item-divider" :class="{'danger':item==currentItem}">
						{{item.name}}
					</div>
					<div class="item" v-for="food in item.foods">
						{{food.name}}
						
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	
</template>
<script>
	import $ from "jquery";
	export default {
		data:function(){
			return {
				goods:[],
				currentItem:{},
				foodContent:null,
			}
		},
		methods:{
			scollPo:function(item){
			
				console.log("click",item);
				this.currentItem=item;
				var main=this;
				setTimeout(function(){
					var elem=document.querySelector(".col-80 .danger");
					var  offT=elem.getBoundingClientRect().top-150;
					main.foodContent.scrollBy(offT*-1);
					
				},0)
				
				
//				console.log(index);
				
				
			}
		},
		mounted:function(){
			let foods=document.querySelector(".foods");
				window.setTimeout(function(){
					let foods=document.querySelector(".foods");
					let side=document.querySelector(".side");
					this.foodContent=new Scroller({"el":foods});
//					new Scroller({"el":side});
					
				},50)
			
			var main=this;
				//2 那个item-divider 离顶部最近
				foods.addEventListener("on-scroll",function(){
//					1，找到divider
					var dividers=foods.querySelectorAll(".item-divider");
					var arr=[];
					for(var i=0;i<dividers.length;i++){
//					2，循环拿到距离顶部的距离	
						var num=Math.abs(Math.round(dividers[i].getBoundingClientRect().top));
//					3， 弄一个数组，把每个距离放在数组里面
						arr.push(num);
					}
//					4， 求出最小值所在的位置
					var min=Math.min.apply(null,arr);
					var index=arr.indexOf(min);
//					console.log(arr,index,min,"arr,index,min");
					main.currentItem=main.goods[index];
					})
		},
		created:function(){
			var main=this;
			$.getJSON("static/data.json")
//			.then(res=>this.goods=res.goods)
			.then(function(res){
				console.log(res.goods);
				main.goods=res.goods;
				
				
			})
			
				
		},
		//当数据发生改变
		updated:function(){
//			
				
		}
	}
</script>
<style>
	.side{
		font-size: 12px;
		
	}
	.side .item{
		height: 48px;
		padding: 8px 15px;	
	}
	.item.item-divider{
		height: 32px;
		line-height: 32px;
		padding: 0 15px;
		background-color: #efefef;
		font-size: 12px;
	}
	.col-80 .foods{ height: 100%; overflow: hidden;}
	.side .item{ background-color: #f0f0f0;}
	.side .item.active{ background-color: #fff;}
</style>