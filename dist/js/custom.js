var app=angular.module("ydApp",["ngRoute"]).controller("ydCtrl",["$scope","$http",function($scope,$http){$scope.navData={},$scope.navData.num=1,$scope.cities=[],$scope.categories={},$scope.today=new Date,$scope.maxDay=new Date($scope.today.getFullYear(),$scope.today.getMonth(),$scope.today.getDate()+7),$scope.time=[];for(var i=6;i<24;i++){var obj={};i<10?(obj.name="0"+i+":00",obj.value="0"+i+":00"):(obj.name=i+":00",obj.value=i+":00"),$scope.time.push(obj)}$scope.time.unshift({name:"全部",value:""}),$http.get("http://platform-api.1yd.me/api/meta-data/cities").success(function(res){for(var i=0;i<res.provinces.length;i++)$scope.cities=$scope.cities.concat(res.provinces[i].citys);$scope.currentCity=$scope.cities[0],$scope.getAddress()}),$scope.getAddress=function(){$http.get("http://platform-api.1yd.me/api/meta-data/"+$scope.currentCity.city_id).success(function(res){console.log(res),$scope.districts=res.city_districts[0].districts,$scope.city_cbds=res.city_cbds[0].cbds,$scope.facilitys=res.facilitys,$scope.categories=res.categories,console.log($scope.categories)})},$scope.setCurCity=function(item){$scope.currentCity=item,$scope.getAddress()}}]).config(function($routeProvider){$routeProvider.when("/home",{templateUrl:"templates/pages/home.html"}).when("/search",{templateUrl:"templates/pages/search.html"}).when("/pub_stadium",{templateUrl:"templates/pages/pub_stadium.html"}).when("/swim_stadium",{templateUrl:"templates/pages/swim_stadium.html"}).when("/production",{templateUrl:"templates/pages/production.html"}).when("/help",{templateUrl:"templates/pages/help.html"}).when("/stadium/:id",{templateUrl:"templates/pages/stadium.html"}).otherwise({redirectTo:"/home"})}).controller("homeCtrl",["$scope","$http","$search",function($scope,$http,$search){$scope.search=$search,$scope.navData.num=1,$http.get("js/category.json").success(function(res){$scope.category=res}),$http.get("http://platform-api.1yd.me/api/stadium_resources?size=9").success(function(res){console.log(res),$scope.stadiums=res})}]).controller("pub_stadiumCtrl",["$scope",function($scope){$scope.navData.num=3}]).controller("swim_stadiumCtrl",["$scope",function($scope){$scope.navData.num=4}]).controller("productionCtrl",["$scope",function($scope){$scope.navData.num=5}]).controller("helpCtrl",["$scope",function($scope){$scope.navData.num=6}]);
app.controller("searchCtrl",["$scope","$http","$filter","$search",function($scope,$http,$filter,$search){console.log($search),$scope.search={district_id:"",cbd_id:"",facility_id:"",sort:1,category_id:"",start:0,date:$filter("date")(new Date,"yyyy-MM-dd"),time:"",keyword:"",category_id:"",category:null},$scope.search=angular.extend($scope.search,$search),console.log($scope.search),$scope.navData.num=2,$scope.loadMore=function(){$scope.search.start++,$scope.loadStadium()},$scope.loadStadium=function(type){var url="http://platform-api.1yd.me/api/stadium_resources?start=";url+=10*$scope.search.start,url+="&district_id="+$scope.search.district_id,url+="&cbd_id="+$scope.search.cbd_id,url+="&facility_id="+$scope.search.facility_id,url+="&sort="+$scope.search.sort,url+=$scope.search&&$scope.search.category?"&category_id="+$scope.search.category.category_id:"&category_id=",url+="&start_dates="+$filter("date")($scope.search.date,"yyyy-MM-dd"),url+="&start_time="+$filter("date")($scope.search.date,"yyyy-MM-dd")+"+"+$scope.search.time,url+="&keyword="+$scope.search.keyword,$http.get(url).success(function(res){console.log(res),$scope.stadiums&&1!=type?$scope.stadiums=$scope.stadiums.concat(res):$scope.stadiums=res})},$scope.setSearchDistrict=function(item){$scope.search.district_id=item.district_id,$scope.loadStadium(1)},$scope.setSearchCBD=function(item){$scope.search.cbd_id=item.cbd_id,$scope.loadStadium(1)},$scope.setSearchFacility=function(item){$scope.search.facility_id=item.facility_id,$scope.loadStadium(1)},$scope.setSearchSort=function(sort){$scope.search.sort=sort,$scope.loadStadium(1)},$scope.setSearchCategory=function(){$scope.loadStadium(1)},$scope.setSearchDate=function(item){$scope.loadStadium(1)},$scope.loadStadium()}]);
app.controller("stadiumCtrl",["$scope","$http","$routeParams","$filter",function($scope,$http,$routeParams,$filter){function getField(){var url="http://platform-api.1yd.me/api/stadiums/"+$routeParams.id+"/field_resources?date="+$filter("date")($scope.stadium_curDate,"yyyy-M-d");$http.get(url).success(function(res){$scope.fields=res,console.log(res),$scope.wrapWidth=82*$scope.fields[0].field_resource.length})}$scope.navData.num=2,$http.get("http://platform-api.1yd.me/api/stadiums/"+$routeParams.id).success(function(res){$scope.stadium=res}),$scope.navData=[];for(var weekArr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],i=0;i<7;i++){var obj={};obj.d=new Date($scope.today.getFullYear(),$scope.today.getMonth(),$scope.today.getDate()+i);var w=obj.d.getDay();obj.w=weekArr[w],$scope.navData.push(obj)}$scope.stadium_curDate=$scope.navData[0].d,$scope.setCurDate=function(d){$scope.stadium_curDate=d,getField()},getField(),$scope.setSelected=function(col){"ordered"!=col.resource_status&&(col.selected=!col.selected)},$scope.customOrder=[],$scope.$watch("fields",function(){$scope.customOrder=[];for(var i=0;i<$scope.fields.length;i++)for(var j=0;j<$scope.fields[i].field_resource.length;j++)$scope.fields[i].field_resource[j].selected&&($scope.fields[i].field_resource[j].field_name=$scope.fields[i].field_name+"号",$scope.customOrder.push($scope.fields[i].field_resource[j]))},!0),$http.get("http://platform-api.1yd.me/api/stadiums/"+$routeParams.id+"/comments?size=10&start=0").success(function(res){$scope.comments=res,console.log(res)})}]);
app.factory("$search",[function(){return{name:"mumu"}}]);
app.directive("ydRank",function(){return{restrict:"ECMA",template:'<i class="glyphicon" ng-class="{\'glyphicon-star\':item.rank,\'glyphicon-star-empty\':!item.rank}" ng-mouseover="setCurRank($index)" ng-mouseout="resetRank()" ng-click="setRank($index)" ng-repeat="item in rankData"></i>',scope:{rank:"="},link:function(scope,elem,attrs){scope.rankData=[],scope.rank||(scope.rank=0);for(var i=0;i<5;i++){var obj={};i<scope.rank?obj.rank=!0:obj.rank=!1,scope.rankData.push(obj)}scope.oldRank=scope.rank,scope.setCurRank=function(index){scope.rank=index+1},scope.resetRank=function(){scope.rank=scope.oldRank},scope.setRank=function(index){scope.rank=index+1,scope.oldRank=scope.rank},scope.$watch("rank",function(){for(var i=0;i<5;i++)i<scope.rank?scope.rankData[i].rank=!0:scope.rankData[i].rank=!1})}}});