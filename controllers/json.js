app.controller('jsonCtrl',function($scope,$http){
/*$http.get('json/tabContent.json')
	.success(function(data){
        $scope.tabContent=data;
       // console.log($scope.tabContent);
        console.log("data fetched");
        console.log(data);
      })
       .error(function(data) {
       //   $scope.tabContent = "error in fetching data";
        // console.log($scope.tabContent);
          console.log(data);
        });


$http.get('json/code.json')
	.success(function(data){
        $scope.code=data;
       // console.log($scope.tabContent);
        console.log("data fetched");
        console.log(data);
      })
       .error(function(data) {
       //   $scope.tabContent = "error in fetching data";
        // console.log($scope.tabContent);
          console.log(data);
        });*/

  $http.get('json/Java/articles.json')
  .success(function(data){
        $scope.articles=data;
       // console.log($scope.tabContent);
        console.log("data fetched");
        console.log(data);
      })
       .error(function(data) {
       //   $scope.tabContent = "error in fetching data";
        // console.log($scope.tabContent);
          console.log(data);
        });



});