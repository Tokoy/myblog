// -*- coding: utf-8 -*-
'use strict';
// configure our routes

app.config(function($routeProvider,$locationProvider,$interpolateProvider,$httpProvider) {
	$routeProvider
		// route for the home page
//		.when('/', {
//			templateUrl : 'pages/home.html',
//			controller  : ''
//		})

//		// route for the login page
//		.when('/login', {
//			templateUrl : 'pages/login.html',
//			controller  : ''
//		})
//
//		// route for the register page
//		.when('/register', {
//			templateUrl : 'pages/register.html',
//			controller  : ''
//		})
		 // use the HTML5 History API
        $locationProvider.html5Mode(false);

         $interpolateProvider.startSymbol('{$');
         $interpolateProvider.endSymbol('$}');
         $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // 解决csrftoken跨域问题 csrfFail
         $httpProvider.defaults.xsrfCookieName = 'csrftoken';
         $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});
// create the controller and inject Angular's $scope
app.controller('myCtrl',function($scope,$http,Reddit) {
	$scope.reddit = new Reddit();
	$scope.visible = true;
	$scope.toggle = function(){
		$scope.visible = !$scope.visible;
	}

//	RESTful框架，数据存储在url里，只需要对url进行get就可以获取json格式的数据
// 	$http.get("/context/").success(function(response){
// 		$scope.datas = response;
// 		//alert(JSON.stringify($scope.datas));//这样获取到的只是整个json的内容。
// 		//alert(JSON.stringify($scope.datas.id));这样返回的值是undefined。
// 	}).error(function(){})


    $scope.signup=function(){
        var datas={'name':$scope.user.displayName,
                    'password':$scope.user.password,
                    'email':$scope.user.email
                    }
        $http({
        url:'/register/',
        method:'POST',
        data:datas,
        dataType:'json'
        }).success(function(response){

		}).error(function(response){
		    alert(response)
		})
    };

	
	$scope.Blogs = []
	$scope.Comments = []
	$http({
		method:'GET',
		url:'/article/'
	}).then(function successCallback(response) {
        // 请求成功执行代码
		$scope.Blogs = response.data
    }, function errorCallback(response) {
        // 请求失败执行代码
	});
	
	$http({
		method:'GET',
		url:'/comment/'
	}).then(function successCallback(response) {
        // 请求成功执行代码
		$scope.Comments = response.data
    }, function errorCallback(response) {
        // 请求失败执行代码
	});
    $scope.login=function(){
        var datas={
                    'password':$scope.user.password,
                    'email':$scope.user.email
                    }
        $http({
        url:'/login/',
        method:'GET',
        params:datas,
        dataType:'json'
        }).success(function(response){
			$scope.visible = !$scope.visible;
		}).error(function(response){
		    alert('User not exist')
		})
    };

	  $scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
		isCustomHeaderOpen: false,
		isFirstOpen: true,
		isFirstDisabled: false
	  };
	});

$(function(){
        $(".register").click(function(){
            $("#registermodal").modal("toggle");
        });
		$(".login").click(function(){
            $("#loginmodal").modal("toggle");
        });
		$('.carousel').carousel({
		  interval: 8000
		})
    });

$(function() {
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},1000);
			return false;
		});
		$(".icon").mouseenter(function(){
			$(".icon").css("box-shadow","0 0 5px 8px rgba(51, 104, 183, 0.63)");
			$(".icon").css("padding","0px");
		});
		$(".icon").mouseleave(function(){
			$(".icon").css("box-shadow","");
			$(".icon").css("padding","2px");
		});
	});

