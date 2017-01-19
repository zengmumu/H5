<template>
	<div class="row-column">
	
		<top :seller="seller" v-if="seller.score"/>
		<div class="row text-center ">
			<router-link to="/goods" class="item col">商品</router-link>
			<router-link to="/ratings" class="item col ">评论</router-link>
			<router-link to="/seller" class="item col">商家</router-link>
		</div>
	
		<router-view class="view"></router-view>
	
	</div>
	
	
</template>

<script>
	// 导入子组件
	import top from "./components/top/top.vue";
	import $ from "jquery";
	export default {
		data:function(){
			return {
				seller:{}
			}
		},
		// 注册组件
		components:{top},
		created:function(){
			var main=this;
			$.getJSON("static/data.json")
//			.then(res=>this.seller=res.seller;console.log(res.seller);)
			.then(function(res){
				
				main.seller=res.seller;
			})
		}
	}
</script>

<style lang="less">
.row{ display: flex;}
.col{flex:1;}

.col-10{ 
	flex:0 0 10%;
 	max-width: 10%;
 	}
.col-20{ 
	flex:0 0 20%;
 	max-width: 20%;
 	}
 .col-30{ 
	flex:0 0 30%;
 	max-width: 30%;
 	}
 .col-40{ 
	flex:0 0 40%;
 	max-width: 40%;
 	}
 .col-50{ 
	flex:0 0 50%;
 	max-width: 50%;
 	}
 .col-60{ 
	flex:0 0 60%;
 	max-width: 60%;
 	}
 .col-70{ 
	flex:0 0 70%;
 	max-width: 70%;
 	}
 .col-80{ 
	flex:0 0 80%;
 	max-width: 80%;
 	}
 .col-90{ 
	flex:0 0 90%;
 	max-width: 90%;
 	}
 .col-33{ 
	flex:0 0 33%;
 	max-width: 33%;
 	}
 .col-67{ 
	flex:0 0 67%;
 	max-width: 67%;
 	}
	
.item{ 
	height: 43px; 
	padding-left: 15px;
	padding-right: 15px;
	border-bottom: 1px solid #f6f6f6;
	}
.danger{ color:orangered;}
h1{ font-size:28px;}
h2{ font-size:24px;}
h3{ font-size:20px;}
h4{ font-size:16px;}
h5{ font-size:14px;}
h6{ font-size:12px;}
p{ font-size:14px; color:#999;}
body{ font-family: "微软雅黑",helvetica ;}
.l{ float: left;}
.r{ float: right;}
.text-center{ text-align: center;}
.text-right{
	text-align: right;
}
.item.col{ line-height:43px;}
.router-link-active{
	.danger;
}
.row-column{
	display: flex;
	flex-direction: column;
	height: 100vh;
}
.view{
	
	flex:1;
	overflow: hidden;
}
</style>