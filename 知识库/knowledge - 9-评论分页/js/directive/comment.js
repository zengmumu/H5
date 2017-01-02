angular.module("comment",[])
.directive("commentTag",function(){
	return {
		restrict:"ECMA",
		replace:true,
		templateUrl:"tpl/comment.html",
		controller:function($scope,$http,$routeParams){
			$scope.addComment=function(){
				$http({
				url:"http://127.0.0.1/addComment.php",
				method:'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},        
				data:"aid="+$routeParams.id+"&msg="+$scope.msg,
				 
				})
				.success(function(res){
					$scope.commentData.unshift({username: "游客", msg:$scope.msg});
					$scope.msg="";
				})//http ed
			}//addComment ed
		}
	}
})
