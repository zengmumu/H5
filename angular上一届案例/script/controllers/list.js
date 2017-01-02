angular.module("booklist",["ngAnimate"])
.controller("bookCtrl",["$scope","$http",function($scope,$http){
	$http.get("http://127.0.0.1/list.php?typeid=1")//获取文章列表
	//get 传什么参数，获取的值的字段结构 查看接口文档
	.success(function(res){
		$scope.bookData=res.data;//设置 bookData的值为 res.data
	})
	
}])
