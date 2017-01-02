angular.module("detail",[])//定义一个detail模块
.controller("detailCtrl",["$scope","$http","$routeParams","$sce",function($scope,$http,$routeParams,$sce){
	//需要什么服务获取什么服务
	//$scope 作用域
	//$routeParams 获取路由传的参数
	//$sce 安全处理的服务
	
	$http.get("http://127.0.0.1/article.php?id="+$routeParams.id)
	.success(function(res){//当ajax 成功适合
		$scope.detailData=res.data;//scope.detailData赋值为获取值的data
	})
	$scope.getTrustHtml=function(data){
		return $sce.trustAsHtml(data);//返回安全处理的的html数据
	}
	
}])
