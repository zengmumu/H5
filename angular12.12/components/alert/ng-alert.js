angular.module("ng-alert",[])
.directive("alert",["alertServer",function(alertServer){
				return {
					restrict:"EA",
					template:
						'<div class="alert alert-{{alertServer.type}}" ng-show="alertServer.msg">{{alertServer.msg}}'
						+'<button class="close" ng-click="hideAlert()"><span>&times;</span></button></div>',
					link:function(scope,elem,attr){
						scope.alertServer=alertServer;
						scope.hideAlert=function(){
							scope.alertServer.msg=null;
							scope.alertServer.type=null;
						}
						
						
					},
					scope:{}
				}
			}])
.factory("alertServer",["$timeout",function($timeout){
	
return {
	msg:"",
	type:"",
	setMsg:function(msg,type){
		this.msg=msg;
		this.type=type;
		var _self=this;
		$timeout(function(){
			_self.msg=null;
			_self.type=null;
		},3000)
	}
}
	
}])
