angular.module("comment",[])
.provider("ngModel",function(){
	this.$get=["$document",'$q', '$compile','$rootScope',"$http","$templateCache",function($document,$q,$compile,$rootScope,$http,$templateCache){
		var publicMethods={
			open:function(url,opt){
				 var self = this;
				 var dialogId="model"+new Date().getTime();
				 var html_overlay='<div class="pop-mask" ng-click="closeByDocument(\''+dialogId+'\')"></div>';
				  
				 var $dialog, scope;
				 $q.when(loadTemlate(url))
				 .then(function(template){
				 	$templateCache.put(url);
				 	self.$result = $dialog = angular.element('<div class="ng-dialog" ng-controller="dialogCommonCtrl" id="' + dialogId + '">'+html_overlay+'<div class="ng-model-content">'+template+'</div></div>');
				 	scope=opt.scope.$new();
				 	 $compile($dialog)(scope);
				 	 $document.find('body').append($dialog);
				 })
				  function loadTemplateUrl(tmpl) {
				  		return $http.get(tmpl, {cache: true
                            }).then(function(res){
				  		
				  			return res.data;
				  		})
                       
                    }
				  function loadTemlate(url){
				  	 return $templateCache.get(url)||loadTemplateUrl(url)
				  }
				 
				return {
                        id: dialogId,
                        obj: $dialog
                    };
			},
			close:function(id){
				 var closeElement = document.getElementById(id);
				  angular.element(closeElement).remove();
			}
		}
		return publicMethods;
	}]
})
.controller("dialogCommonCtrl",["$scope","ngModel",function($scope,ngModel){
	$scope.closeByDocument=function(id){
		ngModel.close(id);
	}
}])

