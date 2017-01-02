angular.module("pagebreak",[])
.constant("pageShowLen",7)
.directive("pageBreak",function(){
	return{
		restrict:"ECMA",
		templateUrl:"tpl/pagebreak.html",
		replace:true,
		controller:function($scope,$http,pageShowLen){
			//$scope.pageLen 一页显示几篇文章
			//pageShowLen   一次显示几个分页
			//$scope.current 当前显示第几页
			$scope.pageShowLen=pageShowLen;	
			$scope.current=0;
			$scope.url="";
			$scope.articleLen=0;//当前列表的文章数量
			$scope.pageBreakData=[]//存放分页的数组
			this.getArticleLen=function(url){
				$http.get(url)
				.success(function(res){
					$scope.articleLen=parseInt(res.num);
					console.log($scope.articleLen);
					calcPageBreak();
				})
			}
			//分页算法 start
			function calcPageBreak(){
				var half=Math.floor($scope.pageShowLen/2);
				var allpage=Math.ceil($scope.articleLen/$scope.pageLen);
				//console.log(allpage+"---allpage");
				var start=$scope.current-half;
				var end=$scope.current+half;
				if($scope.current<=half){start=1,end=$scope.pageShowLen; };
			    if($scope.current>=allpage-half){start=allpage-$scope.pageShowLen,end=allpage};
			  	$scope.pageBreakData=[];
			    for(var i=start;i<=end;i++){
			    	$scope.pageBreakData.push(i);
			    	
			    }
			    console.log($scope.pageBreakData);
			}
			//分页算法 end
			
			
			
		},
		controllerAs:"breakCtrl",
		link:function(scope,elem,attrs,breakCtrl){
			breakCtrl.getArticleLen(attrs.url);
			
			
		}
	}
})