'use strict';

var defaultNoPic = 'http://www.cbooo.cn/Content/images/nopic.jpg';
var movieApp = angular.module('movieApp', ['ngAnimate']);
movieApp.controller('MainCtrl', ['$scope', '$filter', 'MovieService', function($scope, $filter, MovieService) {
  $scope.movieBasicInfo = {
    defaultImg: defaultNoPic,
    imgHost: '', // http://pic.entgroup.cn
    pipianImg: 'http://www.cbooo.cn/Content/images/pipian.png',
    pipianIntro: '注：批片又称买断片，是指中国买断电影版权，国外片商不再参与中国票房分账的进口片。'
  };
  var apiHost = 'http://www.cbooo.cn/boxOffice';
  $scope.searchInfo = {
    movieType: '',
    movieTypeList: ['喜剧', '爱情', '动作', '动画', '科幻', '魔幻', '纪实', '灾难', '战争'],
    movieBoxOffice: '',
    movieBoxOfficeList: [
      { name: '单日票房', type: 'day', box: '单日票房', url: apiHost + '/GetDayBoxOffice' }, // num: -1：昨天 0：今天 1：明天
      { name: '单周票房', type: 'week', box: '单周票房', url: apiHost + '/getWeekInfoData' },
      { name: '周末票房', type: 'weekend', box: '周末票房', url:  apiHost + '/getWeekendInfoData' },
      { name: '单月票房', type: 'month', box: '单月票房', url:  apiHost + '/getMonthBox' },
      // { name: '年度票房', type: 'year', box: '', url:  apiHost + '' },
      { name: '全球票房', type: 'world', box: '周末票房', url: apiHost + '/getAllInfo' },
      { name: '历史票房', type: 'history', box: '历史票房', url:  apiHost + '/getInland', pageIndex: 1 }, // t= type, 0：全部 1：国产 2：进口 v=2014
      { name: '影院票房', type: 'cinema', box: '单日票房', url:  apiHost + '/getCBD', pageIndex: 1 }
    ],
    movieBoxOfficeType: ''
  };
  var getMovieOfficeBoxByType = function(type) {
    var movieOfficeBox = '';
    angular.forEach($scope.searchInfo.movieBoxOfficeList, function(v) {
      if (v.type == type) {
        movieOfficeBox = v;
      }
    });
    return movieOfficeBox;
  };
  var setMovieBoxOfficeType = function() {
    if ($scope.searchInfo.movieBoxOffice && $scope.searchInfo.movieBoxOffice.type)
      $scope.searchInfo.movieBoxOfficeType = $scope.searchInfo.movieBoxOffice.type;
  };
  $scope.searchInfo.movieBoxOffice = getMovieOfficeBoxByType('day');
  $scope.movieList = [];
  $scope.currentMovie = null;
  $scope.boxOfficeLog = '';

  var getDate = function(interval, isNotInclude) {
    interval = interval || 0;
    var now = new Date();
    now.setDate(isNotInclude ? interval : (now.getDate() - interval));
    return $filter('date')(now, 'yyyy-MM-dd');
  };
  var day = new Date().getDay();
  day += day == 0 ? 6 : -1;
  var setQueryData = function(type) {
    var req = {};
    if (type == 'day') {
      req.num = 0;
    } else if (type == 'week') {
      req.sdate = getDate(day + 7);
    } else if (type == 'weekend') {
      req.selDate = getDate(day + 3) + '&' + getDate(day + 1) + '|' + getDate(day + 10) + '&' + getDate(day + 8);
    } else if (type == 'month') {
      var now = new Date();
      now.setMonth(now.getMonth() - 1);
      now.setDate(1);
      req.sdate = $filter('date')(now, 'yyyy-MM-dd');
    }  else if (type == 'world') {
      req.weekId = '3429';
    } else if (type == 'history') {
      req.pIndex = $scope.searchInfo.movieBoxOffice.pageIndex;
      req.t = 0;
    } else if (type == 'cinema') {
      req.pIndex = $scope.searchInfo.movieBoxOffice.pageIndex;
      req.dt = '2015-03-30';
    }

    return req;
  };

  $scope.loadMovieList = function() {
    if (!$scope.searchInfo.movieBoxOffice) return;
    $scope.boxOfficeLog = '';
    var movieBoxOffice = $scope.searchInfo.movieBoxOffice;
    var url = movieBoxOffice.url;
    var type = movieBoxOffice.type;
    var data = setQueryData(type);
    if ($scope.searchInfo.movieBoxOfficeType == type && !$scope.searchInfo.movieBoxOffice.pageIndex) return;
    setMovieBoxOfficeType();
    // var data = data ? $.extend(setQueryData(type), data) : setQueryData(type);
    MovieService.getMovieRanking(url, data).then(function(res) {
      var isModified = $scope.boxOfficeForm.boxOfficeSel.$dirty;
      var movieList = $scope.movieList;
      if (res) {
        res = res.data1 || res;
        if (isModified && (!$scope.searchInfo.movieBoxOffice.pageIndex || $scope.searchInfo.movieBoxOffice.pageIndex == 1)) movieList = res;
        else if (movieList) movieList = movieList.concat(res);
        if (location.href.indexOf('?') != -1) {
          angular.forEach(movieList, function(v, i) {
            $scope.boxOfficeLog += 'Top'+ (++i) + (i < 10 ? ' ' : '') + '- ' + v.MovieName + (v.WomIndex ? '('+ (v.WomIndex*1).toFixed(1) + '分)' : '') + ' 票房：' + $filter('number')($filter('movieValFilter')(v, 'sumBox')) + '万\n';
          });
        }
      }
      $scope.movieList = movieList;
    }, function(res) {
      console.log(url + data + '获取数据失败' + res);
    });
  };
  $scope.loadMovieList();

  $scope.getCurrentMovie = function(movie) {
    if (movie) {
      $scope.currentMovie = movie;
      $scope.currentMovie.movieImg = $filter('movieValFilter')(movie, 'img');
    }
  };

  $scope.resetToDefault = function() {
    var isModified = $scope.boxOfficeForm.boxOfficeSel.$dirty;
    if (isModified && $scope.searchInfo.movieBoxOffice && $scope.searchInfo.movieBoxOffice.pageIndex) {
      $scope.searchInfo.movieBoxOffice.pageIndex = 1;
    }
  };

  $(window).scroll(function() {
    if (!$scope.searchInfo.movieBoxOffice.pageIndex || $scope.searchInfo.movieBoxOffice.pageIndex >= 5) return;
    if ($(document).scrollTop() + $(window).height() > $(document).height() - 50) {
      $scope.searchInfo.movieBoxOffice.pageIndex++;
      $scope.loadMovieList();
    }
  });
}]);

movieApp.filter('movieValFilter', [function() {
  return function(movie, type) {
    var v = '';
    if (movie) {
      if (type == 'img') {
        v = movie.defaultImage || movie.DefaultImage || movie.MovieImg;
        if (!!!v) v = defaultNoPic;
        else if (v.indexOf('/') == 0) v = 'http://www.cbooo.cn' + v;
      } else if (type == 'box') {
        v = movie.BoxOffice || movie.WeekAmount || movie.boxoffice;
      } else if (type == 'sumBox') {
        v = movie.SumBoxOffice || movie.SumWeekAmount || movie.BoxOffice || movie.boxoffice;
      } else if (type == 'avgPrice') {
        v = movie.AvgPrice || movie.avgboxoffice;
      } else if (type == 'avgPeople') {
        v = movie.AvpPeoPle || movie.AvgPeople || movie.avgshowcount;
      } else if (type == 'movieDay') {
        v = movie.MovieDay;
      } else if (type == 'releaseTime') {
        v = movie.releaseTime || movie.ReleaseTime;
      }
    }
    return v;
  };
}]);

movieApp.factory('MovieService', ['$q', '$http', function($q, $http) {
  var MovieService = {};

  var getHttpRequests = function(url, data) {
    var deferred = $q.defer();
    $http({method: 'GET', url: url, params: data})
      //$http.get(url)
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(reason) {
        deferred.reject(url + data + '获取数据失败' + reason);
      });
    return deferred.promise;
  };

  MovieService.getMovieRanking = function(url, data) {
    var baseUrl = 'http://each.sinaapp.com/wechat/url2text.php?';
    url = baseUrl + url + '?d=' + new Date().getTime();
    return getHttpRequests(url, data);
  };

  return MovieService;
}]);