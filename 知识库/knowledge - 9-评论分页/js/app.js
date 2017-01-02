angular.module("myApp",["ngRoute","list","view","pagebreak","comment"])
.controller("mainCtrl",["$scope",function($scope){
	
}])
.config(function($routeProvider){
$routeProvider	
	.when("/list/:id",{templateUrl:"tpl/list.html"})
	.when("/view/:id",{templateUrl:"tpl/view.html"})
	.otherwise({redirectTo:"/list/1"})
	
})
 