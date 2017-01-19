<template>
	<div class="cartCtrl">
		<button v-on:click="reduceCart()">-</button>
		<span>{{food.count}}</span>
		
		<button v-on:click="addCart">+</button>
	</div>
	
</template>
<script>
 import Vue from 'vue';
export default {
	props:{ food: {type: Object  }},
	methods:{
		addCart(e){
			if (!this.food.count) {
          	Vue.set(this.food, 'count', 1);
       		} else {
          		this.food.count++;
          		
       		 }
       		
       	
			this.$emit('cart-add',this.food);
			    
		},
		reduceCart(event){
			this.food.count--;
//			this.$emit('cart.reduce',event.target);
//			this.$dispath('cart.reduce',event.target);
		}
	},
	
	
}
</script>
<style>
	button{
		height: 35px;
		width: 35px;
	}
</style>