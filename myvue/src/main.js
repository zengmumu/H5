import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './views/goods/goods.vue'
import ratings from './views/ratings/ratings.vue'
import seller from './views/seller/seller.vue'
import Muo from './components/Muo'
import Hello from './components/Hello'
import jquery from './components/jquery-1.8.3.min.js'
import mock from './components/mock.js'
Vue.use(VueRouter);
const routes= [
	{path: '/goods',component:goods},
	{path: '/ratings',component:ratings},
	{path: '/seller',component:seller},	

]

const router=new VueRouter({routes});
router.push('goods');

new Vue({
	router:router,
	el:"#app",
 	template: '<App/>',
 	components: { App }
	
})



/*import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import Muo from './components/Muo'
import Hello from './components/Hello'
Vue.use(VueRouter);
const routes = [
  { path: '/muo/:id', component: Muo },
  { path: '/hello', component: Hello }
]
const router = new VueRouter({ routes});
router.push('hello');
const app2 = new Vue({
 router:router,
 el:"#app",
 template: '<App/>',
 components: { App }
})
*/