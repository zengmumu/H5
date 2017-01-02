angular.module("comment",[])
/*.provider("ngModel",function(){
	this.$get=["$document",'$q', '$compile','$rootScope',"$http",function($document,$q,$compile,$rootScope,$http){
		var publicMethods={
			open:function(url,opt){
				 var self = this;
				 var html_overlay='<div class="pop-mask" ng-click="closeByDocument(modelId)"</div>';
				  var dialogId="model"+new Date().getTime();
				 var html = '<div class="ng-dialog">' + html_overlay + html_content + '</div>';
				 $q.when(loadTemplateUrl(url))
				 .then(function(template){
				 	self.$result = $dialog = angular.element('<div class="ng-dialog" ng-controller="dialogCommonCtrl" id="' + dialogId + '">'+html_overlay+template+'</div>');
				 	scope=opt.scope.$new();
				 	 $compile($dialog)(scope);
				 	 $document.find('body').append($dialog);
				 })
				  function loadTemplateUrl(tmpl) {
				  		return $http.get(tmpl).then(function(res){
				  			return res;
				  		})
                       
                    }
				return dialogId;
			},
			close:function(id){
				 var closeElement = document.getElementById(id);
				  angular.element(closeElement).remove();
			}
		}
		return publicMethods;
	}]
})*/
.controller("myCtrl",function($scope){
	
})

