<template>
	<div class="star">
		<span v-for="item in itemClass" :class="item" class="star-item" track-by="$index"></span>
	</div>
</template>
<script>
	export default{
		props:["score"],
		data(){
			
				return {}
			
			
		},
		computed:{
			itemClass(){
				let result=[];
				for(let i=0;i<5;i++){
					if(i<Math.floor(this.score)){
						result.push('on')
					}else{
						result.push('off');
					}
				}
				
				return result;
			}
		}
	}
</script>
<style>
	.star-item{
		display: inline-block;
		height: 20px;
		width: 20px;
		background-size: 100% auto;
		background-repeat: no-repeat;		
	}
	.star-item.on{
		background-image: url(star48_on@2x.png);
	}
	.star-item.off{
		background-image: url(star48_off@2x.png);
	}
</style>