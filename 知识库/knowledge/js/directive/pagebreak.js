angular.module("pagebreak",[])
.constant("pageShowLen",7)
.directive("pageBreak",function(){
	return{
		restrict:"ECMA",
		templateUrl:"tpl/pagebreak.html",
		replace:true,
		controller:function($scope,$http,pageShowLen,$routeParams,$timeout,$rootScope){
			//$scope.pageLen 一页显示几篇文章
			//pageShowLen   一次显示几个分页
			//$scope.current 当前显示第几页
			$scope.pageShowLen=pageShowLen;	
			$scope.current=0;
			$scope.url="";
			$scope.articleLen=0;//当前列表的文章数量
			$scope.pageBreakData=[]//存放分页的数组
			//$scope.allpage 总共有多少页
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
				$scope.allpage=allpage;
				//console.log(allpage+"---allpage");
				
				var start=$scope.current-half+1;
				var end=$scope.current+half+1;
				if($scope.current<=half){start=1,end=$scope.pageShowLen; };
			    if($scope.current>=allpage-half){start=allpage-$scope.pageShowLen+1,end=allpage};
			    if(start<1){start=1}
			    if(end>allpage){end=allpage}
			  	$scope.pageBreakData=[];
			    for(var i=start;i<=end;i++){
			    	$scope.pageBreakData.push(i);
			    	
			    }
			    if($scope.pageBreakData.indexOf(1)==-1){
			    	$scope.pageBreakData.unshift("...");
			    	$scope.pageBreakData.unshift(1);
			    }
			    if($scope.pageBreakData.indexOf(allpage)==-1){
			    	$scope.pageBreakData.push("...");
			    	$scope.pageBreakData.push(allpage);
			    }
			    //console.log($scope.pageBreakData);
			}
			//分页算法 end
			this.getList=function(num){
				
				$scope.current=num-1;
				calcPageBreak();
				$http.get($scope.url2+"?page="+$scope.current+"&pageLen="+$scope.pageLen+"&sort=desc&"+$scope.query+"="+$routeParams.id)
				.success(function(res){
					
					//console.log(res);
					//$watch(function(){
						//$scope.listData=[]
						$scope.listData=res.data;
						console.log(res.data);
             
                	 
                	// })
                	// console.log($scope.listData);
               // });//必需手动进行脏值检测,否则数据无法刷新到界面
              
                
           
						
						
					//})
						
					
				})
			}
			//上一页，下一页
			var control=this;
			$scope.pre=function(){
				var num=$scope.current;
				if(num<=0){ return;}
				 control.getList(num)
			}
			$scope.next=function(){
				
				var num=$scope.current+2;
				if(num>$scope.allpage){ return;}
				 control.getList(num)
			}
			
			
			
		},
		controllerAs:"breakCtrl",
		link:function(scope,elem,attrs,breakCtrl){
			breakCtrl.getArticleLen(attrs.url);
			scope.url2=attrs.url2;
			scope.query=attrs.query;
			elem.on("click",function(e){
				e.preventDefault();
				var num=parseInt(e.srcElement.innerHTML);
				if(isNaN(num)){return}
			breakCtrl.getList(num);
			})
			
			
		}
	}
})