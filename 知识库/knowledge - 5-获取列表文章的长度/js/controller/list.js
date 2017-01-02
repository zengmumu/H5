angular.module("list",[])
.controller("listCtrl",["$scope","$http","$routeParams",function($scope,$http,$routeParams){
	$http.get("http://127.0.0.1/list.php?page=0&pageLen=5&sort=desc&typeid="+$routeParams.id)
	.success(function(res){
		$scope.listData=res.data;
	})
	$scope.typeid=$routeParams.id;
}])