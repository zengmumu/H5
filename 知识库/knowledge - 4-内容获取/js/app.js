angular.module("myApp",["ngRoute","list","view"])
.controller("mainCtrl",["$scope",function($scope){
	
}])
.config(function($routeProvider){
$routeProvider	
	.when("/list/:id",{templateUrl:"tpl/list.html"})
	.when("/view/:id",{templateUrl:"tpl/view.html"})
	.otherwise({redirectTo:"/list/1"})
	
})
