<template>
	<div class="star" :class="{'big':type=='big'}">
		<span class="empty" v-for="item in stars" :class="{'full':item.full==1,'half':item.full==2}">
		</span>
	</div>
</template>
<script>
export default {
	data:function(){
		return {
			stars:[]
		}
	},
	props:["score","type"],
	created:function(){
		console.log(this.score);
		const starLen=5;
		let pnum = this.score-Math.floor(this.score);
		for(let i=0; i<starLen;i++){
			let obj={};//创建一个对象
				
			if(i<this.score-1){
				obj.full=1;
			}else{
				// 大于分两种情况
				if(i-this.score-1<1&&pnum>=0.5){
					obj.full=2;
				}else{
					obj.full=0;	
				}
				
			}
			this.stars.push(obj);
		}
		
		
	}
	
}
	
</script>
<style>
	.star{
		text-align: center;
	}
	.star .empty{ 
		display: inline-block;
		width: 24px;
		height: 24px;
		margin-right: 12px;
		background-image: url("./star24_off@2x.png");
		background-repeat: no-repeat;
		background-position: center center;
		}
	.star .full{
		background-image: url("./star24_on@2x.png");
	}
	.star .half{
		background-image: url("./star24_half@2x.png");
	}
	.star.big .empty{ 
		display: inline-block;
		width: 36px;
		height: 36px;
		margin-right: 12px;
		background-image: url("./star36_off@2x.png");
		background-repeat: no-repeat;
		background-position: center center;
		}
	.star.big .full{
		background-image: url("./star36_on@2x.png");
	}
	.star.big .half{
		background-image: url("./star36_half@2x.png");
	}
	
</style>