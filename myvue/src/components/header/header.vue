<template>
	<div class="header">
		<h1>			
			{{seller.name}}
		</h1>
		<p>{{seller.description}}/{{seller.deliveryTime}}分送达</p>
		<p v-if="seller.supports" @click="showDetail()">{{seller.supports[0].description}}</p>		
		<p class="avatar"><img :src="seller.avatar" alt="" /></p>
		<p>{{seller.bulletin}}</p>
		<div class="detial" v-show="detailshow">
			<h3>{{seller.name}}</h3>
			<div><star :score="seller.score"></star></div>
			<p>优惠信息</p>
			<div v-if="seller.supports">
					<p v-for="item in seller.supports">{{item.description}}</p>
			</div>
			<div class="notice">
				{{seller.bulletin}}
			</div>
			<p @click="hideDetail()">&times</p>
		</div>
	</div>
</template>
<script>
	import star from "components/star/star.vue"
	export default {
		props:{
			seller:Object,
		},
		data(){
			return {
				detailshow:false,
			}
		},
		created(){
		
		},
		methods:{
			showDetail() {
				this.detailshow=true;
			},
			hideDetail() {
				this.detailshow=false;
			}
		},
		components:{star}
		
	}
</script>
<style>
	.detial{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height:100% ;
		background-color:rgba(0,0,0,.8);
		color: #fff;
	}
	.avatar img{ width: 35px; height: auto;}
</style>