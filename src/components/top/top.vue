<template>
	<div class="top-box">
		<div class="top-wrap row">
			<div class="col-20">
				<img :src="seller.avatar" width="64" alt="" />
			</div>
			<div class="col-80" v-if="seller.supports">
				<h4>{{seller.name}}</h4>
				<p>{{seller.description}}</p>
				<p><span class="l " >{{seller.supports[0].description}}</span> <span class="r bullet" @click="flag=true">{{seller.supports.length}}个</span></p>
				
			</div>
			
			
		</div>
		<div class="seller-mask" v-show="flag">
			<div class="row-column">
			
				<div class="content">
					<h4 class="text-center">{{seller.name}}</h4>
					<start　:score="seller.score" :type="'big'"></start>
					<start　:score="seller.score" :type="'small'"></start>
				</div>
				<div class="footer">
					<span @click="flag=false">&times;</span>
				</div>
			</div>
			
		</div>	
		<div class="bg" v-if="seller.avatar">
			<img :src="seller.avatar" alt="" width="150%" height="150%" />
		</div>
	</div>
	
</template>
<script>
	import start from "./../start/start.vue";
	export default {
		props:["seller"],
		data:function(){
			return { 
				flag:false,
			}
		},
		components:{start}
	}
</script>
<style scoped lang="less">
	
	.top-box{
		height: 106px;
		width: 100%;
		position: relative;
		background-color: rgba(7,17,27,0.5);
		color:#fff;
		overflow: hidden;
		.plr{
			padding-right: 15px;
			padding-left: 15px;
		}
		h4{
			.plr;
		}
		p{
			color: #fff; 
			font-size: 12px; 
			height: 18px; 
			line-height: 18px;
			.plr;
			}
		.bullet{ 
			background-color: rgba(0,0,0,.3); 
			.plr;
			border-radius: 18px;
			}
		.top-wrap{
			
			margin-left: 24px;
			margin-top: 24px;
			z-index: 10;
			position: relative;
			
		}
		.bg{
			 position: absolute;
			 width: 100%;
			 height: 106px;
			 overflow: hidden;
			 left: 0;
			 top:0;
			 filter:blur(10px) ;
			 opacity: .2;
			 background-color: #2C3E50;
			 z-index: 0;
			
			 }
		.seller-mask{
			background-color: rgba(0,0,0,.7);
			z-index: 100;
			color: #fff;
			position: fixed;
			left:0;
			top:0;
			right:0;
			bottom: 0;
		}
	    .row-column{
	    	position: relative;
	    	
	    	height: 100%;    
	    	width: 100%;
	    	.content{
	    		padding: 48px;
	    	}	
	    	
	    	.footer{
	    		position: absolute;
	    		bottom: 0px;
	    		height: 48px;
	    		line-height: 48px;
	    		width: 100%;
	    		text-align: center;
	    	}
	    }
	    
		
	}
</style>