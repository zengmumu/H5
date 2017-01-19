//1 导入vue,
import Vue from "vue" ;
// 2 导入app
import App from "./app.vue";




//  导入其他组件
import goods from "./components/goods/goods.vue";// 导入商品的组件
import ratings from "./components/ratings/ratings.vue";// 导入评论的组件
import seller from "./components/seller/seller.vue";// 导入商家的组件
//	3. 导入router
import Router from "vue-router"
//  4.Vue 使用 Router
Vue.use(Router);

//  5,设置Router 的配置文件
const routes=[
	{path:"/goods",component:goods},	
	{path:"/ratings",component:ratings},
	{path:"/seller",component:seller},

];


//  6 实例化Router
const router = new Router({routes});

router.push('goods');//默认跳转到goods
// 7 实例化 vue

// 8 Vue里面添加router

new Vue({
	el:"#app",//选择作用域
	template:"<App/>",//挑选模板
	components:{App},// 注册组件
	router:router,//设置router
	created:function(){
		
	}
})

