angular.module("pagebreak",[])
.directive("pageBreak",function(){
	return{
		restrict:"ECMA",
		templateUrl:"tpl/pagebreak.html",
		replace:true,
		controller:function($scope,$http){
			$scope.url="";
			$scope.articleLen=0;
			this.getArticleLen=function(url){
				$http.get(url)
				.success(function(res){
					$scope.articleLen=parseInt(res.num);
					console.log($scope.articleLen);
				})
			}
			
			
		},
		controllerAs:"breakCtrl",
		link:function(scope,elem,attrs,breakCtrl){
			breakCtrl.getArticleLen(attrs.url);
			
			
		}
	}
})