<template>
	<div class="row">
		<div class="content-wrap">
		<div class="menu" >
			<ul>
				<li v-for="(item,index) in goods" :class="{'active': currFood===index}" @click="selectMenu(index,$event)">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="foods" @scroll="checkScroll()">
			<ul>
				<li v-for="item in goods" class="foodList">
					<h3>{{item.name}}</h3>
					<ul>
						<li v-for="food in item.foods">
							<img :src="food.image" width="35" alt="" />
							<h4>{{food.name}}</h4>
							<p>{{food.description}}</p>
							<p>月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
							<p>￥{{food.price}}</p>
							<cartctrl :food="food" ></cartctrl>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		</div>
		<shopcart  :selectedFoods="selectedFoods"></shopcart>
	</div>
	
</template>
<script>
	import shopcart from "components/shopcart/shopcart.vue";
	import cartctrl from "components/cartctrl/cartctrl.vue"
	export default {
		data(){
			return {
				goods:[],
				currFood:0
				}
		},
		components:{shopcart,cartctrl},
		created(){
			var _self=this;
			$.getJSON("/static/data.json")
			.success(function(res){
				_self.goods=res.goods;
				
			})
			this.$on("cart.add",this.addOrder)
			this.$on("cart.reduce",this.reduceOrder)
		},
		methods:{
			selectMenu(index,event){
				console.log(index);
				let el=$(".foodList").eq(index);
				
				var t=$(el).position().top;
				console.log(t,$(el));
				
				var oldt=$(".foods").scrollTop();
//				console.log(oldt);
//				$(".foods").scrollTop(t+oldt);
				$(".foods").animate({scrollTop:t+oldt},600);
				this.currFood=index;
			},
			checkScroll(){
			var _self=this;
				$.each($(".foodList"),function(index,elem){
					var t=$(this).position().top;					
					if(t<=5){						
						_self.currFood=index;
//						return ;
					}
				})
			},
			addOrder(){
				
			},
			reduceOrder(){
//				this.refs.shopcart.add();
			},
			// @cart-add="onCartAdd(food,$event)"
			/*onCartAdd(food,item){
				console.log(food.count);
				console.log(this.goods[0].foods);
//				console.log(food.count,item.count);
//				food=item;
			}*/
			
			
		},
		computed:{
			selectedFoods(){
				var result=[];
				console.log(this.goods);
				this.goods.forEach(function(elem){
					elem.foods.forEach(function(food){
						if(food.count){
							result.push(food);
						}
						
					})
				})
//				console.log(result);
				return result;
			}
		}
	}
</script>
<style>
.foods{
flex:1; 
height: 100%; 
overflow:auto; 
position: relative;

}
.row{
	flex:1;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
}
.content-wrap{ flex:1;
	display: flex;}
.active{
	background-color: ghostwhite;
}
	
</style>