var app = angular.module('app.services', []);

app.service('ServiceLoader', function($ionicPopup)
{
	var serviceLoader = {};
	
	serviceLoader.showDialog = function(message)
	{ 
		$ionicPopup.show(
		{
			template: '<p style="color:red;" ng-model = "data.model">' + message + '</p>',
			title : '<b style="color:red;">Alert</b>',
			buttons: [{ text : 'OK' }]
		})
		.then(function(res) 
		{
			console.log('Tapped!', res);
		});
	};
	
	return serviceLoader;
});