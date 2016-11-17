app.controller('codeSeriesCtrl',function($scope,$http){

var get = $http.get('json/CodeSeries/codeSeries.json')
				.success(function(data){
					$scope.links=data;
					console.log("CodeSeries data:"+data);
				})
				.error(function(data){
						console.log(data);
				});





});