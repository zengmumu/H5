angular.module("myapp",["ngRoute","ngAnimate","booklist","detail"])
//定义myapp模块，需要别的模块的支持
.controller("mainCtrl",["$scope",function($scope){
	$scope.navData=[{name:"首页",url:"#/"},{name:"图书",url:"#/book/"},
	{name:"游戏",url:"#/game/"}]
	//为导航提供数据
}])
.config(function($routeProvider){
	$routeProvider//不同的url 给不同的模板
	.when("/",{templateUrl:"tpl/booklist.html"})
	.when("/book/",{templateUrl:"tpl/booklist.html"})
	.when("/game/",{templateUrl:"tpl/booklist.html"})
	.when("/view/:id",{templateUrl:"tpl/detail.html"})
	.otherwise({redirectTo:"/"})
	
})
