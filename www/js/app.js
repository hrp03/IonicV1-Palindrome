// init app
var app = angular.module('palindrome', ['ionic','app.controllers', 'app.services'])

// configure
app.run(function($ionicPlatform) 
{
	$ionicPlatform.ready(function() 
	{
		if(window.cordova && window.cordova.plugins.Keyboard) 
		{
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		  cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) 
		{
			StatusBar.styleDefault();
		}
	});
});

// Configure routings

app.config(function($stateProvider, $urlRouterProvider) 
{
	$stateProvider
    .state
	(
		'home', 
		{
			url: '/',
			templateUrl: 'pages/home.html',
			controller : 'ctrlHome'
		}
	)
	.state
	(
		'result', 
		{
			url: '/result',
			templateUrl: 'pages/result.html',
			controller : 'ctrlResult',
			params : { result : ""}
		}
	)  
	$urlRouterProvider.otherwise('/');
});

