angular.module("booklist",[])
.controller("bookCtrl",["$scope","$http",function($scope,$http){
	$http.get("http://127.0.0.1/list.php?typeid=1&page=0&pageLen=10&sort=desc")
	.success(function(res){
		$scope.listData=res.data;
	})
	
}])
