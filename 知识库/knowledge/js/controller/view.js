angular.module("view",[])
.constant("pageLen",4)
.controller("viewCtrl",["$scope","$http","$routeParams","$sce","pageLen",function($scope,$http,$routeParams,$sce,pageLen){
	$scope.pageLen=pageLen;
	$scope.aid=$routeParams.id;
	
	$http.get("http://127.0.0.1/article.php?id="+$routeParams.id)
	.success(function(res){
		$scope.viewData=res.data;
	})
	$scope.getTrustHtml=function(msg){
		return $sce.trustAsHtml(msg);
	}
	$http.get("http://127.0.0.1/getComment.php?page=0&pageLen="+$scope.pageLen+"&sort=desc&aid="+$routeParams.id)
	.success(function(res){
		console.log(res);
		$scope.listData=res.data;
	})
	
	
}])