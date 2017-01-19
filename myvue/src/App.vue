<template>
	<div class="gPage">
		<v-header :seller="seller"></v-header>
		<div class="tabs">
			<router-link to="/goods">商品</router-link>
			<router-link to="/ratings">评论</router-link>
			<router-link to="/seller">商家</router-link>	
		</div>
		<router-view :seller="seller"></router-view>
		
		
	</div>
</template>

<script>
import header from './components/header/header.vue'


export default {
	data(){
		return{
			seller:{}
		}
	},
	created(){
		var _self=this;
		$.getJSON("/static/data.json")
		.success(function(res){
			_self.seller=res.seller;
			console.log(res.seller);
		})
	
	},
    components:{'v-header':header}
}
</script>
<style  lang="less">
*{margin: 0;
padding: 0;}
@color :blue;
*{color:@color}
.gPage{ 
	display: flex;
	height: 100vh;
	
	flex-direction: column;
	}
ul{ list-style: none;}


	
</style>