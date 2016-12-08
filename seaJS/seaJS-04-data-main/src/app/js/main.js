seajs.config({
    base: '/模块化/12.8seaJS/seaJS-04-data-main/js/',
    alias: {
      'jquery': '/模块化/12.8seaJS/seaJS-04-data-main/js/jquery-3.1.0'
    },
    charset: 'utf-8',
    timeout: 20000,
    debug: false
});

seajs.use(["a"],function(a){
				
				a.fun2();
				console.log(a.money);
				console.log(a.dollar);
});
seajs.use("jquery",function($){
	console.log($);
})
