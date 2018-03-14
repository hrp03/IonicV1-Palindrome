var app = angular.module('app.controllers', []);

// Init controller for home page
app.controller('ctrlHome', function($scope, $state, $http, ServiceLoader, $ionicLoading) 
{	
	$scope.submit = function(input)
	{
		if(input === null || input === "" || input === undefined)
		{
			ServiceLoader.showDialog("Enter text");
		}
		else
		{
			// show loader
			$ionicLoading.show(
			{
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0
			});
  
			$http.get('http://192.168.0.130/php/api.php?text=' + input)
				.then
				(
					function(response)
					{
						$ionicLoading.hide();
						console.log(response.data);
						var result = input + " is " + (response.data == "true" ? "" : " not ") + "palindrome";  
						$state.go('result', { result : result});
					}, 
					function(error)
					{
						$ionicLoading.hide();
						ServiceLoader.showDialog("Something went wrong");
					}
				);
			$scope.default();
		}
	};
	
	$scope.default = function()
	{
		$scope.input = "";
	};
	
});
// Init controller for result page
app.controller('ctrlResult', function($scope, $state) 
{
	$scope.result = $state.params.result;
	
	$scope.check = function()
	{
		$state.go('home');
	};
});