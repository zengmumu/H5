angular.module("view",[])
.controller("viewCtrl",["$scope","$http","$routeParams","$sce",function($scope,$http,$routeParams,$sce){
	$http.get("http://127.0.0.1/article.php?id="+$routeParams.id)
	.success(function(res){
		$scope.viewData=res.data;
	})
	$scope.getTrustHtml=function(msg){
		return $sce.trustAsHtml(msg);
	}
}])