angular.module("myTip",[])
.directive("myTip",myTipDirective)
.provider("myTip",myTipProvider)
myTipDirective.$inject=['myTip'];
function myTipDirective (myTip){
	return {
		restrict:"EA",
		template:
			'<div class="alert alert-{{myTip.type || \'info\'}}" ng-show="myTip.msg">'+
			    '<button type="button" class="close"  ng-click="hideAlert()">'+
			        '<span class="glyphicon glyphicon-remove"></span>'+
			    '</button>'+
			'{{myTip.msg}}'+
			'</div>',
		link:function(scope,elem,attr){
			scope.myTip=myTip;
			scope.hideAlert=function(){
				myTip.msg=null;
				myTip.type=null;
			}
		}
	}
}
function myTipProvider(){
	var self=this;
	self.$get=function(){
		return  {
	      msg: null,
	      type: null,
	      tip: tip,
	      clear: clear
	    }
		function tip(msg,type){
			this.msg=msg;
			this.type=type;
			
		}
		function clear(){
			this.msg=null;
			this.type=null;	
		}
	}
	
}
