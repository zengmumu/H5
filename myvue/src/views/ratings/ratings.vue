<template>
	<div>
		<p>服务态度：<star :score="seller.serviceScore"></star></p>
		<p>商品服务：<star :score="seller.foodScore"></star></p>
		I am ratings
		<select-type :onlycontent="onlycontent" :ratings="ratings"></select-type>
	    <ul>
	    	<li v-for="item in ratings" v-show="needShow(item.rateType,item.text)">
	    		<img :src="item.avatar" width="18" alt="" />
	    		<p>{{item.username}}</p>
	    		<star :score="item.score"></star>
	    		<p>{{item.text}}</p>
	    		<span v-for="t in item.recommend">{{t}}</span>
	    	</li>
	    </ul>
	</div>
</template>
<script>
	import star from "components/star/star.vue"
	import selectType from "../ratingselect/ratingselect.vue"
	export default {
		props:{
			seller:{type:Object}
		},
		data(){
			return {
				onlycontent:false,
				ratings: [],
				selectType:2,
			}
		},
		created(){
			var  _self=this;
			$.getJSON("/static/data.json")
			.success(function(res){
				_self.ratings=res.ratings;
				console.log(_self.ratings)
				
			})
			this.$on("ratingType.select",this.select)
			this.$on("content.toggle",this.toggle)
		},
		components:{
			star,
			selectType
		},
		methods:{
			select(type){
				this.selectType=type;
				console.log(type);
			},
			needShow(type,text){
				if(this.onlycontent&&!text){
					return false;
				}
				if(this.selectType==2){
					return true;
				}
				return type==this.selectType;
			},
			toggle(flag){
				this.onlycontent=flag;
			}
		}
	}
</script>
<style>
	
</style>