<template>
	<div>
		<ul>
			<li @click="selectType(2)">全部<span>{{ratings.length}}</span></li>
			<li @click="selectType(0)">满意<span> {{positives.length}}</span></li>
			<li @click="selectType(1)">不满意<span>{{negatives.length}}</span></li>
		</ul>
		<p><input type="checkbox" :checked="onlycontent" @click="toggleContent" /> 只看内容</p>
	</div>
</template>
<script>
	export default {
		props:{
			onlycontent:{type:Boolean},
			ratings:{type:Array}
		},
		computed:{
			positives(){
				
				return this.ratings.filter(r=>{return r.rateType==0})
			},
			negatives(){
				
				return this.ratings.filter(r=>{return r.rateType==1})
			}
			
		},
		methods:{
			selectType(type){
				console.log(this);
				console.log(this.$parent);
				this.$parent.$emit("ratingType.select",type);
			},
			toggleContent(){
				let content=!this.onlycontent;
				this.$parent.$emit("content.toggle",content);
			}
		}
		
	}
</script>
<style>
	
</style>