<template>
	<div class="shopcart">
		<h1 @click="cartlistDetail=!cartlistDetail">shop cart {{totalPrice}}</h1>
		<div class="cartlist" v-show="cartlistDetail">
			<ul>
		   		<li v-for="item in selectedFoods">
				{{item.name}}
				<cartctrl :food="item"></cartctrl>
				</li>	
			</ul>
		</div>
		
		
	</div>
</template>
<script>
	import cartctrl from "components/cartctrl/cartctrl.vue"
	export default {
		props:{selectedFoods: { type: Array   }},
		components:{cartctrl},
		data(){
			return{
				cartlistDetail:false
			}
		},
		computed:{
			totalPrice(){
				var num=0;
				this.selectedFoods.forEach(function(item){
					num+=item.count*item.price;
				})
				return num;
			}
		}
	}
</script>
<style>
.shopcart{
	height: 50px;
	background-color:#2C3E50;
	color: #fff;
	position: relative;
}
.cartlist{
	position: absolute;
	left: 0;
	width: 100%;
	bottom: 50px;
	background-color: #fff;
	color:#333;
	z-index: 100;
}
	
</style>